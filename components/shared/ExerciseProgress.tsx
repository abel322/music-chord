'use client'

import { useState } from 'react'
import { TrendingUp, Calendar, Clock, Award, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProgressEntry {
  id: string
  date: string
  exerciseName: string
  bpmAchieved?: number
  durationMinutes: number
  notes?: string
  rating: 1 | 2 | 3 | 4 | 5
}

interface ExerciseProgressProps {
  instrument?: string
}

export default function ExerciseProgressPage({ instrument = 'GENERAL' }: ExerciseProgressProps) {
  const storageKey = `exercise-progress-${instrument.toLowerCase()}`
  const [entries] = useState<ProgressEntry[]>(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]') } catch { return [] }
  })

  const totalMinutes = entries.reduce((sum, e) => sum + e.durationMinutes, 0)
  const totalSessions = entries.length
  const avgRating = entries.length > 0 ? (entries.reduce((sum, e) => sum + e.rating, 0) / entries.length).toFixed(1) : '0'
  const thisWeek = entries.filter(e => {
    const d = new Date(e.date)
    const now = new Date()
    const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
    return diff <= 7
  }).length

  const stats = [
    { label: 'Tiempo Total', value: `${Math.round(totalMinutes / 60)}h ${totalMinutes % 60}m`, icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Sesiones', value: totalSessions, icon: Calendar, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
    { label: 'Esta Semana', value: thisWeek, icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { label: 'Rating Promedio', value: `${avgRating}/5`, icon: Award, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
          <BarChart3 className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Progreso de Ejercicios</h2>
          <p className="text-sm text-gray-500">Seguimiento de tu evolución</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(stat => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className={cn('w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center', stat.bg)}>
                <Icon className={cn('w-5 h-5', stat.color)} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary-600" />Historial Reciente
        </h3>
        {entries.length === 0 ? (
          <div className="text-center py-8">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <p className="text-gray-500 text-lg mb-1">Sin registros aún</p>
            <p className="text-gray-400 text-sm">Tu progreso aparecerá aquí a medida que practiques</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {entries.slice(0, 20).map(entry => (
              <div key={entry.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div>
                  <p className="text-sm font-medium">{entry.exerciseName}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(entry.date).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
                    {entry.bpmAchieved && ` • ${entry.bpmAchieved} BPM`}
                    {` • ${entry.durationMinutes} min`}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className={cn('text-xs', star <= entry.rating ? 'text-amber-400' : 'text-gray-300')}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
