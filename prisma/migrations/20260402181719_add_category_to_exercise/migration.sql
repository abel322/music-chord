-- CreateEnum
CREATE TYPE "Instrument" AS ENUM ('PIANO', 'BASS', 'DRUMS', 'GUITAR');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "GoalType" AS ENUM ('DAILY', 'WEEKLY');

-- CreateEnum
CREATE TYPE "ExerciseStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'MASTERED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currentLevel" "Level" NOT NULL DEFAULT 'BASIC',
ADD COLUMN     "instruments" "Instrument"[];

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "instrument" "Instrument" NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "fileUrl" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookTranslation" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "translatedContent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "bookId" TEXT NOT NULL,
    "pages" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "notes" TEXT NOT NULL DEFAULT '',
    "category" TEXT,
    "targetTempo" INTEGER,
    "minMasteryTime" INTEGER NOT NULL DEFAULT 300,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "notes" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PracticeSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessionExercise" (
    "id" TEXT NOT NULL,
    "practiceSessionId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "tempo" INTEGER,

    CONSTRAINT "SessionExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "GoalType" NOT NULL,
    "targetMinutes" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LevelHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "previousLevel" "Level" NOT NULL,
    "newLevel" "Level" NOT NULL,
    "achievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalHours" DOUBLE PRECISION NOT NULL,
    "consistency" DOUBLE PRECISION NOT NULL,
    "exerciseVariety" INTEGER NOT NULL,

    CONSTRAINT "LevelHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "status" "ExerciseStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "currentTempo" INTEGER,
    "totalPracticeTime" INTEGER NOT NULL DEFAULT 0,
    "masteryTime" INTEGER NOT NULL DEFAULT 0,
    "lastPracticedAt" TIMESTAMP(3),
    "masteredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExerciseProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Book_userId_idx" ON "Book"("userId");

-- CreateIndex
CREATE INDEX "Book_instrument_idx" ON "Book"("instrument");

-- CreateIndex
CREATE INDEX "BookTranslation_bookId_idx" ON "BookTranslation"("bookId");

-- CreateIndex
CREATE INDEX "BookTranslation_language_idx" ON "BookTranslation"("language");

-- CreateIndex
CREATE UNIQUE INDEX "BookTranslation_bookId_language_key" ON "BookTranslation"("bookId", "language");

-- CreateIndex
CREATE INDEX "Exercise_bookId_idx" ON "Exercise"("bookId");

-- CreateIndex
CREATE INDEX "Exercise_difficulty_idx" ON "Exercise"("difficulty");

-- CreateIndex
CREATE INDEX "Exercise_category_idx" ON "Exercise"("category");

-- CreateIndex
CREATE INDEX "PracticeSession_userId_idx" ON "PracticeSession"("userId");

-- CreateIndex
CREATE INDEX "PracticeSession_date_idx" ON "PracticeSession"("date");

-- CreateIndex
CREATE INDEX "SessionExercise_practiceSessionId_idx" ON "SessionExercise"("practiceSessionId");

-- CreateIndex
CREATE INDEX "SessionExercise_exerciseId_idx" ON "SessionExercise"("exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "SessionExercise_practiceSessionId_exerciseId_key" ON "SessionExercise"("practiceSessionId", "exerciseId");

-- CreateIndex
CREATE INDEX "Goal_userId_idx" ON "Goal"("userId");

-- CreateIndex
CREATE INDEX "Goal_active_idx" ON "Goal"("active");

-- CreateIndex
CREATE INDEX "LevelHistory_userId_idx" ON "LevelHistory"("userId");

-- CreateIndex
CREATE INDEX "LevelHistory_achievedAt_idx" ON "LevelHistory"("achievedAt");

-- CreateIndex
CREATE INDEX "ExerciseProgress_userId_idx" ON "ExerciseProgress"("userId");

-- CreateIndex
CREATE INDEX "ExerciseProgress_exerciseId_idx" ON "ExerciseProgress"("exerciseId");

-- CreateIndex
CREATE INDEX "ExerciseProgress_status_idx" ON "ExerciseProgress"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseProgress_userId_exerciseId_key" ON "ExerciseProgress"("userId", "exerciseId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookTranslation" ADD CONSTRAINT "BookTranslation_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSession" ADD CONSTRAINT "PracticeSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionExercise" ADD CONSTRAINT "SessionExercise_practiceSessionId_fkey" FOREIGN KEY ("practiceSessionId") REFERENCES "PracticeSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionExercise" ADD CONSTRAINT "SessionExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelHistory" ADD CONSTRAINT "LevelHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseProgress" ADD CONSTRAINT "ExerciseProgress_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
