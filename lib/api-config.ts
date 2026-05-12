// Configuración de la API para Next.js
export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || 
  'https://api--app-ejercicios-practico-music--vbfv9hwvdjf6.code.run';

export const getApiUrl = (path: string) => {
  // Si la ruta ya es absoluta, devolverla tal cual
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Si la ruta empieza con /api, usar la URL base del backend
  if (path.startsWith('/api')) {
    return `${API_BASE_URL}${path}`;
  }
  
  // Para otras rutas, asumir que son relativas a la app de Next.js
  return path;
};
