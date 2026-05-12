'use client'

import { useState } from 'react'
import { Dumbbell, Plus, Trash2, Play, Pause, ChevronDown, ChevronUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Exercise {
  id: string
  name: string
  description: string
  bpm?: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  createdAt: string
}

interface ExerciseListProps {
  instrument?: string
}

const DIFFICULTIES = [
  { value: 'beginner', label: 'Principiante', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
  { value: 'intermediate', label: 'Intermedio', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
  { value: 'advanced', label: 'Avanzado', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
]

export default function ExerciseList({ instrument = 'GENERAL' }: ExerciseListProps) {
  const storageKey = `exercises-${instrument.toLowerCase()}`
  const [exercises, setExercises] = useState<Exercise[]>(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]') } catch { return [] }
  })
  const [showForm, setShowForm] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [bpm, setBpm] = useState('')
  const [difficulty, setDifficulty] = useState<Exercise['difficulty']>('beginner')
  const [category, setCategory] = useState('')

  const save = (updated: Exercise[]) => { setExercises(updated); localStorage.setItem(storageKey, JSON.stringify(updated)) }

  const addExercise = () => {
    if (!name.trim()) return
    const ex: Exercise = { id: Date.now().toString(), name: name.trim(), description: description.trim(), bpm: bpm ? parseInt(bpm) : undefined, difficulty, category: category.trim() || 'General', createdAt: new Date().toISOString() }
    save([ex, ...exercises])
    setName(''); setDescription(''); setBpm(''); setDifficulty('beginner'); setCategory(''); setShowForm(false)
  }

  const deleteExercise = (id: string) => save(exercises.filter(e => e.id !== id))
  const getDiff = (v: string) => DIFFICULTIES.find(d => d.value === v) || DIFFICULTIES[0]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg">
            <Dumbbell className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Ejercicios</h2>
            <p className="text-sm text-gray-500">{exercises.length} ejercicios registrados</p>
          </div>
        </div>
        <Button variant="gradient" size="sm" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-1" />Nuevo Ejercicio
        </Button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in space-y-4">
          <h3 className="font-semibold">Agregar Ejercicio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input label="Nombre" placeholder="Ej: Escala pentatónica" value={name} onChange={e => setName(e.target.value)} />
            <Input label="BPM (opcional)" type="number" placeholder="120" value={bpm} onChange={e => setBpm(e.target.value)} />
            <Input label="Categoría" placeholder="Ej: Escalas" value={category} onChange={e => setCategory(e.target.value)} />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Dificultad</label>
              <div className="flex gap-2">
                {DIFFICULTIES.map(d => (
                  <button key={d.value} onClick={() => setDifficulty(d.value as Exercise['difficulty'])} className={cn('px-3 py-1 text-xs rounded-full border transition-all', difficulty === d.value ? `${d.bg} ${d.color} font-semibold border-current` : 'border-gray-200 dark:border-gray-700 text-gray-500')}>{d.label}</button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descripción</label>
            <textarea className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm resize-none" rows={2} placeholder="Instrucciones o notas..." value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancelar</Button>
            <Button variant="primary" size="sm" onClick={addExercise} disabled={!name.trim()}>Guardar</Button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {exercises.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <Dumbbell className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <p className="text-gray-500 text-lg mb-1">Sin ejercicios aún</p>
            <p className="text-gray-400 text-sm">Crea tu primer ejercicio de práctica</p>
          </div>
        ) : exercises.map(ex => {
          const diff = getDiff(ex.difficulty)
          const isOpen = expanded === ex.id
          return (
            <div key={ex.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className={cn('p-2 rounded-lg', diff.bg)}><Dumbbell className={cn('w-4 h-4', diff.color)} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-medium">{ex.name}</h4>
                    <span className={cn('px-2 py-0.5 text-xs rounded-full', diff.bg, diff.color)}>{diff.label}</span>
                    {ex.bpm && <span className="flex items-center gap-1 text-xs text-gray-400"><Zap className="w-3 h-3" />{ex.bpm} BPM</span>}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{ex.category}</p>
                </div>
                <div className="flex items-center gap-1">
                  {ex.description && <button onClick={() => setExpanded(isOpen ? null : ex.id)} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400">{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</button>}
                  <button onClick={() => deleteExercise(ex.id)} className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              {isOpen && ex.description && <p className="mt-3 text-sm text-gray-500 pl-11 animate-fade-in">{ex.description}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
