# Navbar Component

Menú de navegación moderno con animaciones y diseño responsivo.

## Características

### 🎨 Diseño Moderno
- Logo animado con efecto de pulso
- Fondo con glassmorphism al hacer scroll
- Transiciones suaves en todos los elementos
- Gradientes vibrantes (#6366f1 → #ec4899)

### 📱 Totalmente Responsivo
- **Desktop**: Menú horizontal con dropdown de cursos
- **Mobile**: Drawer lateral con navegación completa
- Animación hide-on-scroll para más espacio

### 🎵 Menú de Cursos
- Dropdown animado con 5 opciones de instrumentos
- Iconos personalizados por instrumento
- Colores únicos para cada curso:
  - Piano: #6366f1 (azul)
  - Guitarra: #ec4899 (rosa)
  - Batería: #f59e0b (naranja)
  - Bajo: #10b981 (verde)
  - Todos: #8b5cf6 (púrpura)

### ✨ Animaciones
- Fade in/out al hacer scroll
- Hover effects con translateY
- Pulse animation en el logo
- Staggered animation en dropdown items
- Smooth transitions en todos los estados

### 🔗 Navegación
- Inicio
- Cursos (con dropdown)
- Características
- Testimonios
- Login / Registro

## Uso

```tsx
import Navbar from '@/components/navigation/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Tu contenido */}
    </>
  );
}
```

## Integración

El navbar ya está integrado en:
- `app/page.tsx` - Página principal

## Personalización

Para cambiar colores, edita las variables en `Navbar.tsx`:
- `background`: Color de fondo
- `course.color`: Colores de cada instrumento
- Gradientes en botones y logo
