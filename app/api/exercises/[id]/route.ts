import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/exercises/[id] - Obtener un ejercicio específico
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const exercise = await prisma.exercise.findFirst({
      where: {
        id: params.id,
        book: {
          userId: user.id,
        },
      },
      include: {
        book: true,
      },
    });

    if (!exercise) {
      return NextResponse.json({ error: 'Ejercicio no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ exercise });
  } catch (error: any) {
    console.error('Error al obtener ejercicio:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener ejercicio' },
      { status: 500 }
    );
  }
}

// PUT /api/exercises/[id] - Actualizar un ejercicio
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Verificar que el ejercicio existe y pertenece al usuario
    const existingExercise = await prisma.exercise.findFirst({
      where: {
        id: params.id,
        book: {
          userId: user.id,
        },
      },
    });

    if (!existingExercise) {
      return NextResponse.json({ error: 'Ejercicio no encontrado' }, { status: 404 });
    }

    // Si se está cambiando el libro, verificar que el nuevo libro pertenece al usuario
    if (body.bookId && body.bookId !== existingExercise.bookId) {
      const book = await prisma.book.findFirst({
        where: {
          id: body.bookId,
          userId: user.id,
        },
      });

      if (!book) {
        return NextResponse.json(
          { error: 'Libro no encontrado o no tienes permiso' },
          { status: 404 }
        );
      }
    }

    // Actualizar el ejercicio
    const exercise = await prisma.exercise.update({
      where: { id: params.id },
      data: {
        name: body.name,
        description: body.description,
        bookId: body.bookId,
        pages: body.pages,
        difficulty: body.difficulty,
        notes: body.notes,
        category: body.category,
        targetTempo: body.targetTempo,
        minMasteryTime: body.minMasteryTime,
      },
      include: {
        book: true,
      },
    });

    return NextResponse.json({ exercise });
  } catch (error: any) {
    console.error('Error al actualizar ejercicio:', error);
    return NextResponse.json(
      { error: error.message || 'Error al actualizar ejercicio' },
      { status: 500 }
    );
  }
}

// DELETE /api/exercises/[id] - Eliminar un ejercicio
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Verificar que el ejercicio existe y pertenece al usuario
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: params.id,
        book: {
          userId: user.id,
        },
      },
    });

    if (!exercise) {
      return NextResponse.json({ error: 'Ejercicio no encontrado' }, { status: 404 });
    }

    // Eliminar el ejercicio (las sesiones se mantienen por el historial)
    await prisma.exercise.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Ejercicio eliminado exitosamente' });
  } catch (error: any) {
    console.error('Error al eliminar ejercicio:', error);
    return NextResponse.json(
      { error: error.message || 'Error al eliminar ejercicio' },
      { status: 500 }
    );
  }
}
