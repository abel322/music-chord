import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Instrument } from '@prisma/client';
import { unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// GET /api/books/[id] - Obtener un libro específico
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

    const book = await prisma.book.findFirst({
      where: {
        id: params.id,
        userId: user.id,
      },
    });

    if (!book) {
      return NextResponse.json({ error: 'Libro no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ book });
  } catch (error: any) {
    console.error('Error al obtener libro:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener libro' },
      { status: 500 }
    );
  }
}

// PUT /api/books/[id] - Actualizar un libro
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
    const { name, description, instrument } = body;

    // Verificar que el libro existe y pertenece al usuario
    const existingBook = await prisma.book.findFirst({
      where: {
        id: params.id,
        userId: user.id,
      },
    });

    if (!existingBook) {
      return NextResponse.json({ error: 'Libro no encontrado' }, { status: 404 });
    }

    // Actualizar el libro
    const book = await prisma.book.update({
      where: { id: params.id },
      data: {
        name: name || existingBook.name,
        description: description !== undefined ? description : existingBook.description,
        instrument: instrument || existingBook.instrument,
      },
    });

    return NextResponse.json({ book });
  } catch (error: any) {
    console.error('Error al actualizar libro:', error);
    return NextResponse.json(
      { error: error.message || 'Error al actualizar libro' },
      { status: 500 }
    );
  }
}

// DELETE /api/books/[id] - Eliminar un libro
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

    // Verificar que el libro existe y pertenece al usuario
    const book = await prisma.book.findFirst({
      where: {
        id: params.id,
        userId: user.id,
      },
    });

    if (!book) {
      return NextResponse.json({ error: 'Libro no encontrado' }, { status: 404 });
    }

    // Verificar si hay ejercicios asociados
    const exerciseCount = await prisma.exercise.count({
      where: { bookId: params.id },
    });

    if (exerciseCount > 0) {
      return NextResponse.json(
        { 
          error: `No se puede eliminar el libro porque tiene ${exerciseCount} ejercicio(s) asociado(s). Elimina primero los ejercicios.` 
        },
        { status: 400 }
      );
    }

    // Eliminar el archivo físico si existe
    if (book.fileName) {
      const filePath = join(process.cwd(), 'public', 'uploads', 'books', book.fileName);
      if (existsSync(filePath)) {
        try {
          await unlink(filePath);
        } catch (error) {
          console.error('Error al eliminar archivo:', error);
        }
      }
    }

    // Eliminar el libro de la base de datos
    await prisma.book.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Libro eliminado exitosamente' });
  } catch (error: any) {
    console.error('Error al eliminar libro:', error);
    return NextResponse.json(
      { error: error.message || 'Error al eliminar libro' },
      { status: 500 }
    );
  }
}
