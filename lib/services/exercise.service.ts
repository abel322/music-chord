import { prisma } from '../prisma';
import { Difficulty } from '@prisma/client';

export class ExerciseService {
  /**
   * Get all exercises with optional filters
   */
  static async getExercises(
    userId: string,
    filters?: {
      bookId?: string;
      difficulty?: Difficulty;
      search?: string;
    }
  ) {
    const exercises = await prisma.exercise.findMany({
      where: {
        book: {
          userId,
        },
        ...(filters?.bookId && { bookId: filters.bookId }),
        ...(filters?.difficulty && { difficulty: filters.difficulty }),
        ...(filters?.search && {
          OR: [
            { name: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } },
            { notes: { contains: filters.search, mode: 'insensitive' } },
          ],
        }),
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            instrument: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return exercises;
  }

  /**
   * Get a single exercise by ID
   */
  static async getExercise(exerciseId: string, userId: string) {
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: exerciseId,
        book: {
          userId,
        },
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            instrument: true,
          },
        },
      },
    });

    if (!exercise) {
      throw new Error('Ejercicio no encontrado');
    }

    return exercise;
  }

  /**
   * Create a new exercise
   */
  static async createExercise(
    userId: string,
    data: {
      name: string;
      description?: string;
      bookId: string;
      pages: string;
      difficulty: Difficulty;
      notes?: string;
    }
  ) {
    const book = await prisma.book.findFirst({
      where: {
        id: data.bookId,
        userId,
      },
    });

    if (!book) {
      throw new Error('Libro no encontrado o no tienes permiso para acceder a él');
    }

    const exercise = await prisma.exercise.create({
      data: {
        name: data.name,
        description: data.description || '',
        bookId: data.bookId,
        pages: data.pages,
        difficulty: data.difficulty,
        notes: data.notes || '',
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            instrument: true,
          },
        },
      },
    });

    return exercise;
  }

  /**
   * Update an exercise
   */
  static async updateExercise(
    exerciseId: string,
    userId: string,
    data: {
      name?: string;
      description?: string;
      pages?: string;
      difficulty?: Difficulty;
      notes?: string;
    }
  ) {
    const existingExercise = await prisma.exercise.findFirst({
      where: {
        id: exerciseId,
        book: {
          userId,
        },
      },
    });

    if (!existingExercise) {
      throw new Error('Ejercicio no encontrado');
    }

    const exercise = await prisma.exercise.update({
      where: { id: exerciseId },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.pages && { pages: data.pages }),
        ...(data.difficulty && { difficulty: data.difficulty }),
        ...(data.notes !== undefined && { notes: data.notes }),
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            instrument: true,
          },
        },
      },
    });

    return exercise;
  }

  /**
   * Delete an exercise
   */
  static async deleteExercise(exerciseId: string, userId: string) {
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: exerciseId,
        book: {
          userId,
        },
      },
      include: {
        _count: {
          select: { 
            sessionExercises: true,
            progress: true,
          },
        },
      },
    });

    if (!exercise) {
      throw new Error('Ejercicio no encontrado');
    }

    if (exercise._count.sessionExercises > 0) {
      const error: any = new Error(
        `No se puede eliminar el ejercicio porque está asociado a ${exercise._count.sessionExercises} sesión(es) de práctica. Los registros históricos deben mantenerse para preservar tu historial.`
      );
      error.statusCode = 400;
      throw error;
    }

    try {
      await prisma.exercise.delete({
        where: { id: exerciseId },
      });

      return { message: 'Ejercicio eliminado exitosamente' };
    } catch (error: any) {
      if (error.code === 'P2003') {
        const constraintError: any = new Error('No se puede eliminar el ejercicio porque está siendo usado en otras partes de la aplicación.');
        constraintError.statusCode = 400;
        throw constraintError;
      }
      throw error;
    }
  }
}
