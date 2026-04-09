import type { Metadata } from 'next'
import './globals.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { AuthProvider } from '@/components/providers/session-provider'
import { ThemeScript } from '@/components/theme-script'

export const metadata: Metadata = {
  title: 'MusicChord - SaaS para Músicos',
  description: 'Guarda, transpone y gestiona tus canciones con cifrado musical',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
