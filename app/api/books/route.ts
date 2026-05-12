import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Instrument } from '@prisma/client';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// GET /api/books - Obtener todos los libros
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    // Obtener el usuario de la base de datos
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const instrument = searchParams.get('instrument') as Instrument | null;

    const where: any = {
      userId: user.id,
    };

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (instrument) {
      where.instrument = instrument;
    }

    const books = await prisma.book.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ books });
  } catch (error: any) {
    console.error('Error al obtener libros:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener libros' },
      { status: 500 }
    );
  }
}

// POST /api/books - Crear un nuevo libro
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    // Obtener el usuario de la base de datos
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const instrument = formData.get('instrument') as Instrument;
    const file = formData.get('file') as File;

    if (!name || !instrument || !file) {
      return NextResponse.json(
        { error: 'Nombre, instrumento y archivo son requeridos' },
        { status: 400 }
      );
    }

    // Validar que sea un PDF
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Solo se permiten archivos PDF' },
        { status: 400 }
      );
    }

    // Crear directorio de uploads si no existe
    const uploadsDir = join(process.cwd(), 'uploads', 'users', user.id, 'books');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Generar nombre único para el archivo
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const fileKey = `users/${user.id}/books/${fileName}`;
    const filePath = join(process.cwd(), 'uploads', fileKey);

    // Guardar el archivo
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Generar URL para acceder al archivo
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const fileUrl = `${baseUrl}/uploads/${fileKey}`;

    // Crear registro en la base de datos
    const book = await prisma.book.create({
      data: {
        name,
        description: description || '',
        instrument,
        fileUrl,
        fileKey,
        userId: user.id,
      },
    });

    return NextResponse.json({ book }, { status: 201 });
  } catch (error: any) {
    console.error('Error al crear libro:', error);
    return NextResponse.json(
      { error: error.message || 'Error al crear libro' },
      { status: 500 }
    );
  }
}
