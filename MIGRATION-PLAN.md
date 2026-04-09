# Plan de Migración: React + Node.js → Next.js

## Objetivo
Migrar la aplicación completa de una arquitectura separada (React frontend + Node.js backend) a una aplicación Next.js unificada.

## Estado Actual
- **Frontend**: React + Vite + Material-UI + PWA
- **Backend**: Node.js + Express + Prisma
- **Autenticación**: JWT custom
- **Base de datos**: PostgreSQL con Prisma

## Estado Objetivo
- **Framework**: Next.js 14+ (App Router)
- **Autenticación**: NextAuth.js
- **API**: Next.js API Routes
- **Base de datos**: Prisma (mantener)
- **UI**: Mantener Material-UI + Tailwind
- **PWA**: Mantener funcionalidad offline

## Estructura de Migración

### Fase 1: Backend → API Routes ✅ (Parcialmente completado)
Migrar todos los endpoints del backend Express a Next.js API Routes:

#### Endpoints a migrar:
- [x] `/api/auth/*` - Autenticación (usando NextAuth.js)
- [ ] `/api/users/*` - Gestión de usuarios
- [x] `/api/books/*` - Gestión de libros (parcial)
- [x] `/api/exercises/*` - Gestión de ejercicios (parcial)
- [x] `/api/exercise-progress/*` - Progreso de ejercicios (parcial)
- [ ] `/api/sessions/*` - Sesiones de práctica
- [ ] `/api/levels/*` - Sistema de niveles
- [x] `/api/dashboard/*` - Dashboard (parcial)
- [x] `/api/goals/*` - Metas (parcial)
- [ ] `/api/recommendations/*` - Recomendaciones
- [ ] `/api/predictions/*` - Predicciones
- [ ] `/api/export/*` - Exportación de datos
- [ ] `/api/translation/*` - Traducción de PDFs

#### Servicios a migrar:
- [x] `auth.service.ts` → Integrar con NextAuth (ya implementado)
- [x] `book.service.ts` → `/lib/services/book.service.ts` ✅
- [x] `exercise.service.ts` → `/lib/services/exercise.service.ts` ✅
- [x] `session.service.ts` → `/lib/services/session.service.ts` ✅
- [x] `level-calculation.service.ts` → `/lib/services/level-calculation.service.ts` ✅
- [x] `dashboard.service.ts` → `/lib/services/dashboard.service.ts` ✅
- [x] `goal.service.ts` → `/lib/services/goal.service.ts` ✅
- [x] `storage.service.ts` → `/lib/services/storage.service.ts` ✅
- [ ] `recommendation.service.ts` → `/lib/services/recommendation.service.ts`
- [ ] `prediction.service.ts` → `/lib/services/prediction.service.ts`
- [ ] `export.service.ts` → `/lib/services/export.service.ts`
- [ ] `level.service.ts` → `/lib/services/level.service.ts`
- [ ] `pdf-translation.service.ts` → `/lib/services/pdf-translation.service.ts`
- [ ] `user.service.ts` → `/lib/services/user.service.ts`
- [ ] `exercise-progress.service.ts` → `/lib/services/exercise-progress.service.ts`

#### Middleware a migrar:
- [x] `auth.middleware.ts` → NextAuth + middleware.ts
- [ ] `rate-limit.middleware.ts` → Next.js middleware
- [ ] `sanitize.middleware.ts` → Utilidades de validación
- [ ] `error-handler.middleware.ts` → Error boundaries + API error handling

### Fase 2: Frontend → Next.js Pages/Components ⏳ (En progreso)
Migrar componentes y páginas de React a Next.js:

#### Páginas a migrar:
- [x] `/login` → `app/(auth)/login/page.tsx`
- [x] `/register` → `app/(auth)/register/page.tsx`
- [x] `/dashboard` → `app/(dashboard)/dashboard/page.tsx`
- [x] `/books` → `app/(dashboard)/books/page.tsx`
- [x] `/exercises` → `app/(dashboard)/exercises/page.tsx`
- [x] `/exercise-progress` → `app/(dashboard)/exercise-progress/page.tsx`
- [x] `/practice-session` → `app/(dashboard)/practice-session/page.tsx`
- [x] `/sessions` → `app/(dashboard)/sessions/page.tsx`
- [x] `/calendar` → `app/(dashboard)/calendar/page.tsx`
- [x] `/level` → `app/(dashboard)/level/page.tsx`
- [x] `/goals` → `app/(dashboard)/goals/page.tsx`
- [x] `/predictions` → `app/(dashboard)/predictions/page.tsx`
- [x] `/recommendations` → `app/(dashboard)/recommendations/page.tsx`
- [x] `/profile` → `app/(dashboard)/profile/page.tsx`
- [x] `/export` → `app/(dashboard)/export/page.tsx`
- [ ] `/lessons/*` → `app/(dashboard)/lessons/*/page.tsx`

#### Componentes a migrar:
- [ ] `AppLayout.tsx` → Ya existe layout en Next.js
- [ ] `Sidebar.tsx` → Migrar a `/components/navigation/`
- [ ] `Header.tsx` → Migrar a `/components/navigation/`
- [ ] `PDFViewer.tsx` → Ya existe en `/components/`
- [ ] `StatsCard.tsx` → Migrar a `/components/dashboard/`
- [ ] `PracticeChart.tsx` → Migrar a `/components/dashboard/`
- [ ] `GoalForm.tsx` → Migrar a `/components/dashboard/`
- [ ] `SessionForm.tsx` → Migrar a `/components/dashboard/`
- [ ] `Metronome.tsx` → Migrar a `/components/`
- [ ] Otros componentes según necesidad

#### Contextos a migrar:
- [x] `AuthContext.tsx` → NextAuth (ya implementado)
- [ ] `ThemeContext.tsx` → Next.js theme provider
- [ ] `NotificationContext.tsx` → Toast/notification system

#### Servicios (API clients) a migrar:
- [ ] `authService.ts` → Usar NextAuth
- [ ] `bookService.ts` → Fetch a API routes de Next.js
- [ ] `exerciseService.ts` → Fetch a API routes de Next.js
- [ ] `sessionService.ts` → Fetch a API routes de Next.js
- [ ] `dashboardService.ts` → Fetch a API routes de Next.js
- [ ] `goalService.ts` → Fetch a API routes de Next.js
- [ ] Otros servicios según necesidad

### Fase 3: PWA y Funcionalidad Offline 📱
- [ ] Configurar Next.js PWA
- [ ] Migrar service worker
- [ ] Implementar offline sync
- [ ] Configurar manifest.json
- [ ] Generar iconos PWA

### Fase 4: Optimizaciones y Limpieza 🧹
- [ ] Eliminar carpetas `backend/` y `frontend/`
- [ ] Actualizar documentación
- [ ] Optimizar imágenes y assets
- [ ] Configurar variables de entorno
- [ ] Testing completo
- [ ] Deploy

## Archivos a Eliminar Después de la Migración
- `backend/` (completo)
- `frontend/` (completo)
- `pages/` (si no se usa)

## Notas Importantes
1. Mantener Prisma schema y migraciones
2. NextAuth.js reemplaza el sistema JWT custom
3. Mantener compatibilidad con rutas por instrumento
4. Preservar funcionalidad PWA y offline
5. Mantener Material-UI + Tailwind CSS
6. Migrar validaciones de Zod
7. Mantener rate limiting y seguridad

## Próximos Pasos Inmediatos
1. ✅ Crear este documento de plan
2. 🔄 Migrar servicios del backend a `/lib/services/`
3. 🔄 Migrar API routes faltantes
4. 🔄 Migrar componentes del frontend
5. 🔄 Actualizar páginas para usar nuevos servicios
6. 🔄 Testing y validación
