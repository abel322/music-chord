'use client'

import { useState } from 'react'
import { BookOpen, Plus, Trash2, ExternalLink, Search, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Book {
  id: string
  title: string
  author: string
  category: string
  url?: string
  notes?: string
  addedAt: string
}

interface BookListProps {
  instrument?: string
}

const CATEGORIES = [
  { value: 'method', label: 'Método', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { value: 'theory', label: 'Teoría', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  { value: 'repertoire', label: 'Repertorio', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
  { value: 'technique', label: 'Técnica', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
]

export default function BookList({ instrument = 'GENERAL' }: BookListProps) {
  const storageKey = `books-${instrument.toLowerCase()}`
  const [books, setBooks] = useState<Book[]>(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]') } catch { return [] }
  })
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('method')
  const [url, setUrl] = useState('')
  const [notes, setNotes] = useState('')

  const save = (updated: Book[]) => { setBooks(updated); localStorage.setItem(storageKey, JSON.stringify(updated)) }

  const addBook = () => {
    if (!title.trim()) return
    const book: Book = { id: Date.now().toString(), title: title.trim(), author: author.trim(), category, url: url.trim() || undefined, notes: notes.trim() || undefined, addedAt: new Date().toISOString() }
    save([book, ...books])
    setTitle(''); setAuthor(''); setCategory('method'); setUrl(''); setNotes(''); setShowForm(false)
  }

  const deleteBook = (id: string) => save(books.filter(b => b.id !== id))

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  )

  const getCat = (v: string) => CATEGORIES.find(c => c.value === v) || CATEGORIES[0]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Biblioteca</h2>
            <p className="text-sm text-gray-500">{books.length} libros</p>
          </div>
        </div>
        <Button variant="gradient" size="sm" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-1" />Agregar Libro
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm" placeholder="Buscar por título o autor..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in space-y-4">
          <h3 className="font-semibold">Nuevo Libro</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input label="Título" placeholder="Ej: Hal Leonard Bass Method" value={title} onChange={e => setTitle(e.target.value)} />
            <Input label="Autor" placeholder="Ej: Ed Friedland" value={author} onChange={e => setAuthor(e.target.value)} />
            <Input label="URL (opcional)" placeholder="https://..." value={url} onChange={e => setUrl(e.target.value)} />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoría</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(c => (
                  <button key={c.value} onClick={() => setCategory(c.value)} className={cn('px-3 py-1 text-xs rounded-full border transition-all', category === c.value ? `${c.bg} ${c.color} font-semibold border-current` : 'border-gray-200 dark:border-gray-700 text-gray-500')}>{c.label}</button>
                ))}
              </div>
            </div>
          </div>
          <Input label="Notas (opcional)" placeholder="Apuntes sobre el libro..." value={notes} onChange={e => setNotes(e.target.value)} />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancelar</Button>
            <Button variant="primary" size="sm" onClick={addBook} disabled={!title.trim()}>Guardar</Button>
          </div>
        </div>
      )}

      {/* Book Cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <p className="text-gray-500 text-lg mb-1">{search ? 'Sin resultados' : 'Sin libros aún'}</p>
            <p className="text-gray-400 text-sm">Agrega tu primer libro de estudio</p>
          </div>
        ) : filtered.map(book => {
          const cat = getCat(book.category)
          return (
            <div key={book.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg flex-shrink-0">
                  <FileText className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-medium">{book.title}</h4>
                    <span className={cn('px-2 py-0.5 text-xs rounded-full', cat.bg, cat.color)}>{cat.label}</span>
                  </div>
                  {book.author && <p className="text-sm text-gray-500 mt-0.5">{book.author}</p>}
                  {book.notes && <p className="text-sm text-gray-400 mt-1 italic">{book.notes}</p>}
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {book.url && (
                    <a href={book.url} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-blue-500 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button onClick={() => deleteBook(book.id)} className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
