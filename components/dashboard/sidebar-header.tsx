"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  GraduationCap, 
  User, 
  Download,
  BookOpen,
  Dumbbell,
  CheckCircle2,
  Music2,
  History,
  Calendar,
  TrendingUp,
  Target,
  Lightbulb,
  LineChart,
  ChevronDown,
  Piano,
  Guitar,
  Mic2, // For Drums/Bass alternatives if icon not perfectly matched
  LogOut,
  Drum,
  Activity
} from "lucide-react"

// Icons mapping 
const generalItems = [
  { text: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { text: 'Perfil', icon: User, path: '/profile' },
  { text: 'Exportar', icon: Download, path: '/export' },
]

const instrumentItems = [
  { text: 'Libros', icon: BookOpen, path: '/books' },
  { text: 'Ejercicios', icon: Dumbbell, path: '/exercises' },
  { text: 'Progreso', icon: CheckCircle2, path: '/exercise-progress' },
  { text: 'Práctica', icon: Music2, path: '/practice-session' },
  { text: 'Sesiones', icon: History, path: '/sessions' },
  { text: 'Calendario', icon: Calendar, path: '/calendar' },
  { text: 'Nivel', icon: TrendingUp, path: '/level' },
  { text: 'Predicciones', icon: LineChart, path: '/predictions' },
  { text: 'Metas', icon: Target, path: '/goals' },
  { text: 'Recomendaciones', icon: Lightbulb, path: '/recommendations' },
]

const instruments = [
  { id: 'PIANO', name: 'Piano', icon: Piano, color: 'text-indigo-500', bgHover: 'hover:bg-indigo-500/10', bgActive: 'bg-indigo-500', bgLight: 'bg-indigo-500/10' },
  { id: 'GUITAR', name: 'Guitarra', icon: Guitar, color: 'text-pink-500', bgHover: 'hover:bg-pink-500/10', bgActive: 'bg-pink-500', bgLight: 'bg-pink-500/10' },
  { id: 'DRUMS', name: 'Batería', icon: Drum, color: 'text-amber-500', bgHover: 'hover:bg-amber-500/10', bgActive: 'bg-amber-500', bgLight: 'bg-amber-500/10' },
  { id: 'BASS', name: 'Bajo', icon: Activity, color: 'text-emerald-500', bgHover: 'hover:bg-emerald-500/10', bgActive: 'bg-emerald-500', bgLight: 'bg-emerald-500/10' },
]

export function SidebarAndHeader({ children, user }: { children: React.ReactNode, user: any }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedInstrument, setExpandedInstrument] = useState<string | null>(null)
  const pathname = usePathname()

  const handleInstrumentToggle = (id: string) => {
    setExpandedInstrument(expandedInstrument === id ? null : id)
  }

  const isPathSelected = (path: string, instrument?: string) => {
    if (!pathname) return false;
    const finalPath = instrument ? `/${instrument.toLowerCase()}${path}` : path
    return pathname === finalPath || pathname.startsWith(finalPath + '/')
  }

  const isInstrumentActive = (instrumentId: string) => {
    if (!pathname) return false;
    return pathname.startsWith(`/${instrumentId.toLowerCase()}/`)
  }

  const drawerContent = (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800 text-slate-300 w-64 flex-shrink-0 overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Brand */}
      <div className="p-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-xl shadow-lg">
          🎵
        </div>
        <div>
          <div className="font-bold text-lg text-white leading-tight">Music</div>
          <div className="text-xs text-slate-400">Practice App</div>
        </div>
      </div>

      <div className="h-px bg-slate-800/50 mb-2 w-full" />

      {/* Navigation */}
      <div className="flex-1 px-3 py-2">
        <div className="text-[0.7rem] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
          General
        </div>
        
        {generalItems.map(item => {
          const isActive = pathname === item.path
          const Icon = item.icon
          return (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all",
                isActive 
                  ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-[0_4px_12px_rgba(99,102,241,0.4)]" 
                  : "hover:bg-indigo-500/10 text-slate-400 hover:text-slate-200"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-white" : "")} />
              <span className={cn("text-sm", isActive ? "font-semibold" : "font-medium")}>{item.text}</span>
            </Link>
          )
        })}

        <div className="h-px bg-slate-800/50 my-4 mx-3" />

        <div className="text-[0.7rem] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
          Instrumentos
        </div>

        {instruments.map(instrument => {
          const isActive = isInstrumentActive(instrument.id)
          const isExpanded = expandedInstrument === instrument.id
          const Icon = instrument.icon

          return (
            <div key={instrument.id} className="mb-1">
              <button 
                onClick={() => handleInstrumentToggle(instrument.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all",
                  isActive ? instrument.bgLight : "hover:bg-slate-800/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-5 h-5", instrument.color)} />
                  <div className="flex items-center gap-2">
                    <span className={cn("text-sm", isActive ? "font-semibold text-slate-200" : "font-medium")}>
                      {instrument.name}
                    </span>
                    {isActive && (
                      <span className={cn("text-[0.6rem] px-1.5 py-0.5 rounded text-white", instrument.bgActive)}>
                        Activo
                      </span>
                    )}
                  </div>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-slate-500 transition-transform", isExpanded && "rotate-180")} />
              </button>

              {/* Submenu */}
              {isExpanded && (
                <div className="pl-9 pr-2 py-1 space-y-1 mt-1">
                  {instrumentItems.map(item => {
                    const isSubActive = isPathSelected(item.path, instrument.id)
                    const SubIcon = item.icon
                    return (
                      <Link
                        key={`${instrument.id}-${item.path}`}
                        href={`/${instrument.id.toLowerCase()}${item.path}`}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm",
                          isSubActive 
                            ? `${instrument.bgActive} text-white shadow-sm` 
                            : `text-slate-400 hover:text-slate-200 ${instrument.bgHover}`
                        )}
                      >
                        <SubIcon className={cn("w-4 h-4", isSubActive ? "text-white" : instrument.color)} />
                        <span className={isSubActive ? "font-semibold" : "font-medium"}>{item.text}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Bottom User Area Optional additions later */}
    </div>
  )

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 transition-colors">
      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 transform lg:transform-none lg:static transition-transform duration-300 ease-in-out",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {drawerContent}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileOpen(true)}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="font-semibold text-slate-800 dark:text-slate-200 hidden sm:block">
              Panel Principal
            </h2>
          </div>

          <div className="flex items-center gap-4 pr-2">
            <ThemeToggle />
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-none mb-1">{user?.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-none">{user?.email}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {user?.name?.[0]?.toUpperCase() || 'U'}
              </div>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-slate-400 hover:text-red-500 transition-colors hidden sm:block ml-2"
                title="Cerrar sesión"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}
