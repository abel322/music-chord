import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { GoalType, Instrument } from '@prisma/client';

// GET /api/goals - Obtener todas las metas
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
    const active = searchParams.get('active');
    const instrument = searchParams.get('instrument') as Instrument | null;

    const where: any = {
      userId: user.id,
    };

    if (active === 'true') {
      where.isActive = true;
    } else if (active === 'false') {
      where.isActive = false;
    }

    if (instrument) {
      where.instrument = instrument;
    }

    const goals = await prisma.goal.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ goals });
  } catch (error: any) {
    console.error('Error al obtener metas:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener metas' },
      { status: 500 }
    );
  }
}

// POST /api/goals - Crear una nueva meta
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
    const { type, targetMinutes, instrument, startDate, endDate } = body;

    if (!type || !targetMinutes || !instrument) {
      return NextResponse.json(
        { error: 'Tipo, minutos objetivo e instrumento son requeridos' },
        { status: 400 }
      );
    }

    // Validar fechas
    const start = startDate ? new Date(startDate) : new Date();
    const end = endDate ? new Date(endDate) : null;

    if (end && end <= start) {
      return NextResponse.json(
        { error: 'La fecha de fin debe ser posterior a la fecha de inicio' },
        { status: 400 }
      );
    }

    // Crear la meta
    const goal = await prisma.goal.create({
      data: {
        userId: user.id,
        type,
        targetMinutes,
        instrument,
        startDate: start,
        endDate: end,
        currentMinutes: 0,
        isActive: true,
      },
    });

    return NextResponse.json({ goal }, { status: 201 });
  } catch (error: any) {
    console.error('Error al crear meta:', error);
    return NextResponse.json(
      { error: error.message || 'Error al crear meta' },
      { status: 500 }
    );
  }
}
