import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Construir la ruta del archivo
    const filePath = join(process.cwd(), 'uploads', ...params.path);

    // Verificar que el archivo existe
    if (!existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Archivo no encontrado' },
        { status: 404 }
      );
    }

    // Leer el archivo
    const fileBuffer = await readFile(filePath);

    // Determinar el tipo de contenido basado en la extensión
    const fileName = params.path[params.path.length - 1];
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    let contentType = 'application/octet-stream';
    if (extension === 'pdf') {
      contentType = 'application/pdf';
    } else if (extension === 'png') {
      contentType = 'image/png';
    } else if (extension === 'jpg' || extension === 'jpeg') {
      contentType = 'image/jpeg';
    }

    // Retornar el archivo con los headers apropiados
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${fileName}"`,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    console.error('Error al servir archivo:', error);
    return NextResponse.json(
      { error: 'Error al cargar el archivo' },
      { status: 500 }
    );
  }
}
