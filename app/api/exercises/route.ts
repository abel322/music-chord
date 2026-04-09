import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Difficulty } from '@prisma/client';

// GET /api/exercises - Obtener todos los ejercicios
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

    const searchParams = request.nextUrl.searchParams;
    const bookId = searchParams.get('bookId');
    const difficulty = searchParams.get('difficulty') as Difficulty | null;
    const search = searchParams.get('search');

    const where: any = {
      book: {
        userId: user.id,
      },
    };

    if (bookId) {
      where.bookId = bookId;
    }

    if (difficulty) {
      where.difficulty = difficulty;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const exercises = await prisma.exercise.findMany({
      where,
      include: {
        book: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ exercises });
  } catch (error: any) {
    console.error('Error al obtener ejercicios:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener ejercicios' },
      { status: 500 }
    );
  }
}

// POST /api/exercises - Crear un nuevo ejercicio
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
    const { name, description, bookId, pages, difficulty, notes, category, targetTempo, minMasteryTime } = body;

    if (!name || !bookId || !pages || !difficulty) {
      return NextResponse.json(
        { error: 'Nombre, libro, páginas y dificultad son requeridos' },
        { status: 400 }
      );
    }

    // Verificar que el libro existe y pertenece al usuario
    const book = await prisma.book.findFirst({
      where: {
        id: bookId,
        userId: user.id,
      },
    });

    if (!book) {
      return NextResponse.json(
        { error: 'Libro no encontrado o no tienes permiso' },
        { status: 404 }
      );
    }

    // Crear el ejercicio
    const exercise = await prisma.exercise.create({
      data: {
        name,
        description: description || '',
        pages,
        difficulty,
        notes: notes || '',
        category: category || null,
        targetTempo: targetTempo || null,
        minMasteryTime: minMasteryTime || 300,
        book: {
          connect: {
            id: bookId,
          },
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

    return NextResponse.json({ exercise }, { status: 201 });
  } catch (error: any) {
    console.error('Error al crear ejercicio:', error);
    return NextResponse.json(
      { error: error.message || 'Error al crear ejercicio' },
      { status: 500 }
    );
  }
}
