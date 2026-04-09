import { prisma } from '../prisma';
import { Level } from '@prisma/client';

interface LevelMetrics {
  totalHours: number;
  consistency: number;
  exerciseVariety: number;
}

interface LevelProgress {
  totalHours: number;
  consistency: number;
  exerciseVariety: number;
  nextLevel: Level | null;
  percentageToNext: number;
  missingRequirements: string[];
}

export class LevelCalculationService {
  /**
   * Calculate user level based on metrics
   */
  static async calculateLevel(userId: string, instrument?: string): Promise<Level> {
    const metrics = await this.getMetrics(userId, instrument);

    if (metrics.totalHours < 20) {
      return Level.BASIC;
    }

    if (
      metrics.totalHours >= 20 &&
      metrics.totalHours < 100 &&
      metrics.consistency > 40
    ) {
      return Level.INTERMEDIATE;
    }

    if (
      metrics.totalHours >= 100 &&
      metrics.consistency > 60 &&
      metrics.exerciseVariety >= 15
    ) {
      return Level.ADVANCED;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { currentLevel: true },
    });

    return user?.currentLevel || Level.BASIC;
  }

  /**
   * Get metrics for level calculation
   */
  static async getMetrics(userId: string, instrument?: string): Promise<LevelMetrics> {
    const sessionWhere: any = { userId };
    
    if (instrument) {
      sessionWhere.exercises = {
        some: {
          exercise: {
            book: {
              instrument: instrument
            }
          }
        }
      };
    }

    const sessions = await prisma.session.findMany({
      where: sessionWhere,
      select: {
        durationMinutes: true,
        date: true,
        exercises: {
          select: {
            exerciseId: true,
            exercise: {
              select: {
                book: {
                  select: {
                    instrument: true
                  }
                }
              }
            }
          },
        },
      },
    });

    const filteredSessions = instrument 
      ? sessions.filter(session => 
          session.exercises.some(e => e.exercise.book.instrument === instrument)
        )
      : sessions;

    const totalMinutes = filteredSessions.reduce((sum, s) => sum + s.durationMinutes, 0);
    const totalHours = totalMinutes / 60;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentSessions = filteredSessions.filter((s) => s.date >= thirtyDaysAgo);
    const uniqueDates = new Set(
      recentSessions.map((s) => s.date.toISOString().split('T')[0])
    );
    const consistency = (uniqueDates.size / 30) * 100;

    const uniqueExercises = new Set<string>();
    filteredSessions.forEach((s) => {
      s.exercises.forEach((e) => {
        if (!instrument || e.exercise.book.instrument === instrument) {
          uniqueExercises.add(e.exerciseId);
        }
      });
    });
    const exerciseVariety = uniqueExercises.size;

    return {
      totalHours,
      consistency,
      exerciseVariety,
    };
  }

  /**
   * Get progress to next level
   */
  static async getProgressToNextLevel(userId: string, instrument?: string): Promise<LevelProgress> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { currentLevel: true },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const metrics = await this.getMetrics(userId, instrument);
    const currentLevel = user.currentLevel;
    const nextLevel = this.getNextLevel(currentLevel);
    const missingRequirements: string[] = [];
    let percentageToNext = 0;

    if (!nextLevel) {
      return {
        ...metrics,
        nextLevel: null,
        percentageToNext: 100,
        missingRequirements: [],
      };
    }

    if (nextLevel === Level.INTERMEDIATE) {
      const hoursProgress = Math.min((metrics.totalHours / 20) * 100, 100);
      const consistencyProgress = Math.min((metrics.consistency / 40) * 100, 100);
      percentageToNext = Math.min((hoursProgress + consistencyProgress) / 2, 100);

      if (metrics.totalHours < 20) {
        missingRequirements.push(
          `Necesitas ${(20 - metrics.totalHours).toFixed(1)} horas más de práctica`
        );
      }
      if (metrics.consistency < 40) {
        missingRequirements.push(
          `Necesitas ${(40 - metrics.consistency).toFixed(1)}% más de consistencia`
        );
      }
    } else if (nextLevel === Level.ADVANCED) {
      const hoursProgress = Math.min((metrics.totalHours / 100) * 100, 100);
      const consistencyProgress = Math.min((metrics.consistency / 60) * 100, 100);
      const varietyProgress = Math.min((metrics.exerciseVariety / 15) * 100, 100);
      percentageToNext = Math.min(
        (hoursProgress + consistencyProgress + varietyProgress) / 3,
        100
      );

      if (metrics.totalHours < 100) {
        missingRequirements.push(
          `Necesitas ${(100 - metrics.totalHours).toFixed(1)} horas más de práctica`
        );
      }
      if (metrics.consistency < 60) {
        missingRequirements.push(
          `Necesitas ${(60 - metrics.consistency).toFixed(1)}% más de consistencia`
        );
      }
      if (metrics.exerciseVariety < 15) {
        missingRequirements.push(
          `Necesitas practicar ${15 - metrics.exerciseVariety} ejercicios diferentes más`
        );
      }
    }

    return {
      ...metrics,
      nextLevel,
      percentageToNext,
      missingRequirements,
    };
  }

  /**
   * Get next level
   */
  private static getNextLevel(currentLevel: Level): Level | null {
    switch (currentLevel) {
      case Level.BASIC:
        return Level.INTERMEDIATE;
      case Level.INTERMEDIATE:
        return Level.ADVANCED;
      case Level.ADVANCED:
        return null;
      default:
        return null;
    }
  }

  /**
   * Check and update user level
   */
  static async checkAndUpdateLevel(userId: string, instrument?: string): Promise<{
    levelChanged: boolean;
    previousLevel?: Level;
    newLevel?: Level;
  }> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { currentLevel: true },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const previousLevel = user.currentLevel;
    const newLevel = await this.calculateLevel(userId, instrument);

    if (previousLevel !== newLevel) {
      await prisma.user.update({
        where: { id: userId },
        data: { currentLevel: newLevel },
      });

      const metrics = await this.getMetrics(userId, instrument);
      await prisma.levelHistory.create({
        data: {
          userId,
          previousLevel,
          newLevel,
          totalHours: metrics.totalHours,
          consistency: metrics.consistency,
          exerciseVariety: metrics.exerciseVariety,
        },
      });

      return {
        levelChanged: true,
        previousLevel,
        newLevel,
      };
    }

    return { levelChanged: false };
  }
}
