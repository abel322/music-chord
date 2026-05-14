"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DashboardService } from "@/lib/services/dashboard.service";
import { LevelService } from "@/lib/services/level-calculation.service"; // Nota el cambio de nombre aquí
import { GoalService } from "@/lib/services/goal.service";
// import { PredictionService } from "@/lib/services/prediction.service";
import { Instrument } from "@prisma/client";



export async function fetchDashboardData(filters?: { startDate?: string; endDate?: string; instrument?: string }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;
  const instrument = filters?.instrument as Instrument | undefined;

  const [stats, practiceChart, topExercises] = await Promise.all([
    DashboardService.getStats(userId, filters),
    DashboardService.getPracticeChart(userId, 30, filters),
    DashboardService.getTopExercises(userId, 4, filters),
  ]);

  let instrumentDistribution = null;
  if (!filters?.instrument) {
    instrumentDistribution = await DashboardService.getInstrumentDistribution(userId, filters);
  }

  let levelData = null;
  let predictionData = null;
  let goals = null;

  if (instrument) {
    try {
      levelData = await LevelService.getCurrentLevel(userId, instrument);
    } catch (e) { }
    try {
      predictionData = await PredictionService.getNextLevelPrediction(userId, instrument);
    } catch (e) { }
    try {
      goals = await GoalService.getGoals(userId, true, instrument);
    } catch (e) { }
  }

  return {
    stats,
    practiceChart: practiceChart.data,
    instrumentDistribution: instrumentDistribution?.data || [],
    topExercises: topExercises.exercises || [],
    levelData,
    predictionData,
    goals,
  };
}
