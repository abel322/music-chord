import React from 'react';
import { Box, Typography, Paper, Grid, Stack, Chip, Divider } from '@mui/material';
import { FitnessCenter, Speed, Bolt, School, MusicNote, TrendingUp } from '@mui/icons-material';

export const bassPracticeBooks = {
  id: 'bass-practice-books',
  title: 'Biblioteca de Práctica Profesional',
  level: 'Todos los Niveles',
  description: 'Colección completa de métodos y libros especializados para dominar el bajo eléctrico',
  duration: 'Progresivo',
  topics: 10,
  content: (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#10b981', mb: 4, textAlign: 'center' }}>
        📚 Biblioteca Completa de Métodos de Bajo
      </Typography>

      {/* Categoría 1: Técnica y Acondicionamiento */}
      <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)', border: '2px solid rgba(99, 102, 241, 0.3)', borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ width: 50, height: 50, borderRadius: 2, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FitnessCenter sx={{ fontSize: 28, color: '#fff' }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6366f1' }}>
              Técnica y Acondicionamiento Físico
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Desarrollo de resistencia, velocidad y precisión
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.3)', height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
                📖 Bass Fitness
              </Typography>
              <Stack spacing={1.5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ejercicios diarios de calentamiento</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Desarrollo de resistencia en dedos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Rutinas progresivas de 10-30 minutos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Patrones cromáticos y diatónicos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Sincronización mano derecha/izquierda</Typography>
              </Stack>
              <Chip label="Nivel: Todos" size="small" sx={{ mt: 2, bgcolor: 'rgba(99, 102, 241, 0.2)', color: '#6366f1' }} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.3)', height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#8b5cf6' }}>
                📖 Bass Aerobics (Joe Liebman)
              </Typography>
              <Stack spacing={1.5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• 52 semanas de ejercicios estructurados</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Un ejercicio nuevo cada semana</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnicas de digitación avanzadas</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Desarrollo de velocidad gradual</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Incluye audio de acompañamiento</Typography>
              </Stack>
              <Chip label="Nivel: Intermedio-Avanzado" size="small" sx={{ mt: 2, bgcolor: 'rgba(139, 92, 246, 0.2)', color: '#8b5cf6' }} />
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Categoría 2: Escuela Clásica */}
      <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)', border: '2px solid rgba(16, 185, 129, 0.3)', borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ width: 50, height: 50, borderRadius: 2, background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <School sx={{ fontSize: 28, color: '#fff' }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981' }}>
              Método Clásico y Fundamentos
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Formación técnica completa y sistemática
            </Typography>
          </Box>
        </Box>

        <Paper sx={{ p: 3, background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#10b981' }}>
            📖 SCUOLA DI BASSO ELETTRICO (Escuela de Bajo Eléctrico)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Contenido Principal:</Typography>
              <Stack spacing={1}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Lectura de partituras para bajo</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Teoría musical aplicada</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Escalas y arpegios sistemáticos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Construcción de líneas de bajo</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Técnicas Cubiertas:</Typography>
              <Stack spacing={1}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Posición de manos y postura</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnica de púa y dedos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ejercicios de coordinación</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Repertorio progresivo</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Chip label="Nivel: Principiante-Intermedio" size="small" sx={{ mt: 2, bgcolor: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }} />
        </Paper>
      </Paper>

      {/* Categoría 3: Funk y Disco */}
      <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)', border: '2px solid rgba(245, 158, 11, 0.3)', borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ width: 50, height: 50, borderRadius: 2, background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MusicNote sx={{ fontSize: 28, color: '#fff' }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>
              Funk, Disco y Grooves
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Estilos rítmicos y técnicas de groove
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#f59e0b' }}>
                📖 Funk & Disco Bass (Josquin des Pres)
              </Typography>
              <Stack spacing={1.5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Patrones de funk clásico (70s-80s)</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Líneas de disco con síncopa</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnica de ghost notes</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Grooves de 16th notes</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Estudio de bajistas legendarios</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Transcripciones de clásicos</Typography>
              </Stack>
              <Chip label="Nivel: Intermedio" size="small" sx={{ mt: 2, bgcolor: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' }} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, background: 'rgba(251, 146, 60, 0.08)', border: '1px solid rgba(251, 146, 60, 0.3)', height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#fb923c' }}>
                📖 Muted Grooves for Bass (Josquin des Pres)
              </Typography>
              <Stack spacing={1.5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnica de palm muting</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Dead notes y percusión</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Grooves staccato</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Patrones rítmicos complejos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Aplicación en diferentes estilos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Control dinámico avanzado</Typography>
              </Stack>
              <Chip label="Nivel: Intermedio-Avanzado" size="small" sx={{ mt: 2, bgcolor: 'rgba(251, 146, 60, 0.2)', color: '#fb923c' }} />
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Categoría 4: Slap Bass */}
      <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)', border: '2px solid rgba(239, 68, 68, 0.3)', borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ width: 50, height: 50, borderRadius: 2, background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bolt sx={{ fontSize: 28, color: '#fff' }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ef4444' }}>
              Slap Bass Mastery
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Técnicas percusivas y slap avanzado
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ef4444' }}>
                📖 Slap Bass Essentials (Josquin des Pres)
              </Typography>
              <Stack spacing={1.5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Fundamentos del slap y pop</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Posición correcta del pulgar</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnica de popping</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Combinaciones slap/pop</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ejercicios de velocidad</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Patrones rítmicos básicos</Typography>
              </Stack>
              <Chip label="Nivel: Intermedio" size="small" sx={{ mt: 2, bgcolor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.3)', height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#dc2626' }}>
                📖 Slap It! Funk Studies (Tony Oppenheim)
              </Typography>
              <Stack spacing={1.5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Estudios progresivos de funk</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Slap en contexto musical</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Double thumbing</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Hammer-ons y pull-offs</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Grooves de slap complejos</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Improvisación con slap</Typography>
              </Stack>
              <Chip label="Nivel: Avanzado" size="small" sx={{ mt: 2, bgcolor: 'rgba(220, 38, 38, 0.2)', color: '#dc2626' }} />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3, background: 'rgba(248, 113, 113, 0.08)', border: '1px solid rgba(248, 113, 113, 0.3)' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#f87171' }}>
                📖 Ultimate Slap Bass - Parte 1 & 2
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1.5, color: 'rgba(255,255,255,0.95)' }}>Parte 1 - Fundamentos:</Typography>
                  <Stack spacing={1}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnica de slap desde cero</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ejercicios de desarrollo gradual</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Patrones básicos de slap/pop</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Coordinación y timing</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Grooves de slap esenciales</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1.5, color: 'rgba(255,255,255,0.95)' }}>Parte 2 - Avanzado:</Typography>
                  <Stack spacing={1}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnicas avanzadas de slap</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Triple pop y técnicas extendidas</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Slap melódico y armónico</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Solos de slap</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Aplicación en diferentes estilos</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Parte 1: Intermedio" size="small" sx={{ bgcolor: 'rgba(248, 113, 113, 0.2)', color: '#f87171' }} />
                <Chip label="Parte 2: Avanzado-Profesional" size="small" sx={{ bgcolor: 'rgba(248, 113, 113, 0.2)', color: '#f87171' }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Resumen y Recomendaciones */}
      <Paper sx={{ p: 4, background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)', border: '2px solid rgba(168, 85, 247, 0.3)', borderRadius: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#a855f7', textAlign: 'center' }}>
          🎯 Ruta de Aprendizaje Recomendada
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" sx={{ color: '#10b981', fontWeight: 'bold', mb: 2 }}>
                Nivel Principiante
              </Typography>
              <Stack spacing={1}>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>1. SCUOLA DI BASSO ELETTRICO</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>2. Bass Fitness (básico)</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Duración: 6-12 meses</Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" sx={{ color: '#f59e0b', fontWeight: 'bold', mb: 2 }}>
                Nivel Intermedio
              </Typography>
              <Stack spacing={1}>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>1. Bass Aerobics</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>2. Funk & Disco Bass</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>3. Slap Bass Essentials</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Duración: 12-18 meses</Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" sx={{ color: '#ef4444', fontWeight: 'bold', mb: 2 }}>
                Nivel Avanzado
              </Typography>
              <Stack spacing={1}>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>1. Muted Grooves</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>2. Slap It! Funk Studies</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>3. Ultimate Slap Bass 1 & 2</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Duración: 18-24 meses</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(168, 85, 247, 0.3)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
            💡 Consejo Profesional
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Combina ejercicios técnicos (Bass Fitness, Bass Aerobics) con estudios de estilo (Funk, Slap) para un desarrollo equilibrado. 
            Practica 30-60 minutos diarios, dividiendo el tiempo entre técnica pura y aplicación musical.
          </Typography>
        </Box>
      </Paper>
    </Box>
  ),
};
