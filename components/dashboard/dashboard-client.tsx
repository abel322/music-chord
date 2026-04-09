"use client"

import { useState, useEffect } from "react"
import { fetchDashboardData } from "@/app/actions/dashboard"
import { 
  Timer, 
  TrendingUp, 
  CalendarDays, 
  Flame, 
  FileText,
  Piano,
  Guitar,
  Music,
  Activity,
  Trophy,
  Target
} from "lucide-react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

const instruments = [
  { id: 'general', name: 'General', icon: Activity, color: '#3B82F6' },
  { id: 'PIANO', name: 'Piano', icon: Piano, color: '#6366F1' },
  { id: 'GUITAR', name: 'Guitarra', icon: Guitar, color: '#EC4899' },
  { id: 'DRUMS', name: 'Batería', icon: Target, color: '#F59E0B' },
  { id: 'BASS', name: 'Bajo', icon: Music, color: '#10B981' },
]

export function DashboardClient({ userName }: { userName?: string | null }) {
  const [activeTab, setActiveTab] = useState('general')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const activeInstrument = instruments.find(i => i.id === activeTab) || instruments[0]

  const loadData = async () => {
    setLoading(true)
    try {
      const filters = {
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        instrument: activeTab === 'general' ? undefined : activeTab
      }
      const result = await fetchDashboardData(filters)
      setData(result)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [activeTab])

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
  }

  const getLevelLabel = (level: string) => {
    const labels: any = { BASIC: 'Básico', INTERMEDIATE: 'Intermedio', ADVANCED: 'Avanzado' }
    return labels[level] || level
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Activity className="w-8 h-8 text-blue-600" />
          Dashboard Profesional
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Bienvenido {userName ? userName : "Músico"} - Visualiza tus estadísticas de práctica por instrumento de manera profesional
        </p>
      </div>

      {/* Date Filters */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-800 dark:text-gray-200">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          Filtros de Fecha
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha de inicio</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha de fin</label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <div className="flex items-end gap-2">
            <button onClick={loadData} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Aplicar
            </button>
            <button 
              onClick={() => { setStartDate(''); setEndDate(''); setTimeout(loadData, 0) }}
              className="flex-1 bg-white dark:bg-gray-800 hover:bg-gray-50 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 scrollbar-hide">
          {instruments.map(instrument => {
            const Icon = instrument.icon
            const isActive = activeTab === instrument.id
            return (
              <button
                key={instrument.id}
                onClick={() => setActiveTab(instrument.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm whitespace-nowrap transition-colors relative ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                style={isActive && instrument.id !== 'general' ? { color: instrument.color } : {}}
              >
                <Icon className="w-5 h-5" />
                {instrument.name}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5" 
                    style={{ backgroundColor: instrument.id !== 'general' ? instrument.color : '#2563EB' }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <activeInstrument.icon className="w-7 h-7" style={{ color: activeInstrument.id !== 'general' ? activeInstrument.color : '#2563EB' }} />
              <h3 className="text-2xl font-bold">Dashboard de {activeInstrument.name}</h3>
            </div>
            {loading && <div className="text-sm text-gray-500 animate-pulse">Cargando datos...</div>}
          </div>

          {!data && !loading && (
            <div className="p-8 text-center text-gray-500">Error al cargar datos</div>
          )}

          {data && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { label: 'Tiempo Total', value: formatTime(data.stats?.totalMinutes || 0), icon: Timer, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
                  { label: 'Promedio Diario', value: formatTime(data.stats?.averageDaily || 0), icon: CalendarDays, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                  { label: 'Promedio Semanal', value: formatTime(data.stats?.averageWeekly || 0), icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
                  { label: 'Racha Actual', value: `${data.stats?.currentStreak || 0} días`, icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
                  { label: 'Total Sesiones', value: data.stats?.totalSessions || 0, icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`${stat.bg} p-2 rounded-lg`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                    <p className="text-xl lg:text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Special Cards for specific instruments */}
              {activeTab !== 'general' && data.levelData && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="w-6 h-6 text-yellow-600" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Nivel Actual</h4>
                    </div>
                    <p className="text-4xl font-extrabold text-yellow-600 mb-2">{getLevelLabel(data.levelData.level)}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Progreso hacia siguiente nivel: {data.levelData.progress?.percentageToNext?.toFixed(1) || 0}%</p>
                  </div>
                  {data.predictionData?.prediction && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">Predicción</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-2">{getLevelLabel(data.predictionData.prediction.nextLevel)}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fecha estimada: {new Date(data.predictionData.prediction.estimatedDate).toLocaleDateString('es-ES')}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold mb-6 text-gray-800 dark:text-gray-200">Tiempo de Práctica (Últimos 30 días)</h4>
                  <div className="h-72 w-full">
                    {data.practiceChart?.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data.practiceChart} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                          <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 12, fill: '#6B7280' }} 
                            dy={10} 
                            tickFormatter={(val) => {
                              const d = new Date(val);
                              return `${d.getDate()}/${d.getMonth() + 1}`;
                            }}
                          />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                          <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                          <Bar dataKey="minutes" fill={activeInstrument.id !== 'general' ? activeInstrument.color : '#6366F1'} radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-400">No hay datos</div>
                    )}
                  </div>
                </div>

                {activeTab === 'general' ? (
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold mb-6 text-gray-800 dark:text-gray-200">Distribución de Instrumentos</h4>
                    <div className="h-72 w-full flex items-center justify-center relative">
                      {data.instrumentDistribution?.length > 0 ? (
                        <>
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={data.instrumentDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="minutes"
                                nameKey="instrument"
                              >
                                {data.instrumentDistribution.map((entry: any, index: number) => {
                                  const inst = instruments.find(i => i.id === entry.instrument)
                                  return <Cell key={`cell-${index}`} fill={inst?.color || '#3B82F6'} />
                                })}
                              </Pie>
                              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-sm text-gray-500">Total Min</span>
                            <span className="text-2xl font-bold">{data.instrumentDistribution.reduce((a: any, b: any) => a + b.minutes, 0)}</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-gray-400">No hay datos</div>
                      )}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                      {data.instrumentDistribution?.map((item: any) => {
                        const inst = instruments.find(i => i.id === item.instrument)
                        return (
                          <div key={item.instrument} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: inst?.color || '#3B82F6' }} />
                            {inst?.name || item.instrument} ({item.percentage}%)
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Mejores Ejercicios</h4>
                    <div className="space-y-4">
                      {data.topExercises?.length > 0 ? data.topExercises.map((ex: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{ex.exercise?.name}</p>
                            <span className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-gray-700 dark:text-gray-300 mt-1 inline-block">
                              {ex.exercise?.book?.name}
                            </span>
                          </div>
                          <div className="font-bold whitespace-nowrap" style={{ color: activeInstrument.id !== 'general' ? activeInstrument.color : '#6366F1' }}>
                            {ex.totalMinutes} min
                          </div>
                        </div>
                      )) : (
                        <div className="p-4 text-gray-400 text-center">No hay ejercicios registrados</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
