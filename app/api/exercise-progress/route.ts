import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ExerciseStatus } from '@prisma/client';

// GET /api/exercise-progress - Obtener todo el progreso
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const progress = await prisma.exerciseProgress.findMany({
      where: {
        userId: user.id,
      },
      include: {
        exercise: {
          include: {
            book: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return NextResponse.json({ progress });
  } catch (error: any) {
    console.error('Error al obtener progreso:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener progreso' },
      { status: 500 }
    );
  }
}

// POST /api/exercise-progress - Crear o actualizar progreso
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { exerciseId, currentTempo, masteryTime, totalPracticeTime, status } = body;

    if (!exerciseId) {
      return NextResponse.json(
        { error: 'ID del ejercicio es requerido' },
        { status: 400 }
      );
    }

    // Verificar que el ejercicio existe y pertenece al usuario
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: exerciseId,
        book: {
          userId: user.id,
        },
      },
    });

    if (!exercise) {
      return NextResponse.json(
        { error: 'Ejercicio no encontrado' },
        { status: 404 }
      );
    }

    // Buscar progreso existente
    const existingProgress = await prisma.exerciseProgress.findUnique({
      where: {
        userId_exerciseId: {
          userId: user.id,
          exerciseId,
        },
      },
    });

    let progress;

    if (existingProgress) {
      // Actualizar progreso existente
      progress = await prisma.exerciseProgress.update({
        where: {
          id: existingProgress.id,
        },
        data: {
          currentTempo: currentTempo !== undefined ? currentTempo : existingProgress.currentTempo,
          masteryTime: masteryTime !== undefined ? masteryTime : existingProgress.masteryTime,
          totalPracticeTime: totalPracticeTime !== undefined ? totalPracticeTime : existingProgress.totalPracticeTime,
          status: status || existingProgress.status,
        },
        include: {
          exercise: {
            include: {
              book: true,
            },
          },
        },
      });
    } else {
      // Crear nuevo progreso
      progress = await prisma.exerciseProgress.create({
        data: {
          userId: user.id,
          exerciseId,
          currentTempo: currentTempo || 0,
          masteryTime: masteryTime || 0,
          totalPracticeTime: totalPracticeTime || 0,
          status: status || ExerciseStatus.NOT_STARTED,
        },
        include: {
          exercise: {
            include: {
              book: true,
            },
          },
        },
      });
    }

    return NextResponse.json({ progress });
  } catch (error: any) {
    console.error('Error al guardar progreso:', error);
    return NextResponse.json(
      { error: error.message || 'Error al guardar progreso' },
      { status: 500 }
    );
  }
}
