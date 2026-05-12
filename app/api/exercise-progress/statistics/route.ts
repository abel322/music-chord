import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ExerciseStatus } from '@prisma/client';

// GET /api/exercise-progress/statistics - Obtener estadísticas de progreso
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

    // Obtener todos los progresos del usuario
    const allProgress = await prisma.exerciseProgress.findMany({
      where: {
        userId: user.id,
      },
    });

    // Calcular estadísticas
    const total = allProgress.length;
    const notStarted = allProgress.filter(p => p.status === ExerciseStatus.NOT_STARTED).length;
    const inProgress = allProgress.filter(p => p.status === ExerciseStatus.IN_PROGRESS).length;
    const mastered = allProgress.filter(p => p.status === ExerciseStatus.MASTERED).length;
    const totalPracticeHours = allProgress.reduce((sum, p) => sum + (p.totalPracticeTime / 3600), 0);

    const statistics = {
      total,
      notStarted,
      inProgress,
      mastered,
      totalPracticeHours,
    };

    return NextResponse.json(statistics);
  } catch (error: any) {
    console.error('Error al obtener estadísticas:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener estadísticas' },
      { status: 500 }
    );
  }
}
