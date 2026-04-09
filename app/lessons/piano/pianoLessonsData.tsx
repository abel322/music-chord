import React from 'react';
import { Box, Typography, Paper, Grid, Card, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export const pianoLessonsData = [
  {
    id: 'piano-level-1',
    title: 'Fundamentos del Piano',
    level: 'Principiante',
    description: 'Postura, posición de manos, geografía del teclado y primeras notas',
    duration: '2-3 meses',
    topics: 8,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#22c55e', mb: 3 }}>
          🎹 Bienvenido al Mundo del Piano
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#22c55e' }}>
            1. Postura y Ergonomía
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Altura del banco: codos al nivel del teclado</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Distancia: brazos ligeramente extendidos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Espalda recta, hombros relajados</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Pies planos en el suelo o pedales</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#10b981' }}>
            2. Posición de las Manos
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Dedos curvados como sosteniendo una pelota</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Muñecas al nivel de las teclas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Pulgar relajado, no rígido</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Tocar con la yema de los dedos</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            3. Geografía del Teclado
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• 88 teclas: 52 blancas, 36 negras</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Patrón de teclas negras: grupos de 2 y 3</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• DO central: referencia principal</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Octavas: 7 completas + teclas adicionales</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#f59e0b' }}>
            4. Primeros Ejercicios
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Posición de 5 dedos en DO (C-D-E-F-G)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ejercicios de independencia de dedos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Escalas de 5 notas (pentascales)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Melodías simples con una mano</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-2',
    title: 'Lectura Musical y Ritmo',
    level: 'Básico',
    description: 'Pentagrama, claves, figuras rítmicas y lectura a primera vista',
    duration: '3-4 meses',
    topics: 10,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#10b981', mb: 3 }}>
          📖 Aprendiendo el Lenguaje de la Música
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
                Clave de Sol (Mano Derecha)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.95)' }}>Líneas: MI - SOL - SI - RE - FA</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>Espacios: FA - LA - DO - MI</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#f59e0b' }}>
                Clave de FA (Mano Izquierda)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.95)' }}>Líneas: SOL - SI - RE - FA - LA</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>Espacios: LA - DO - MI - SOL</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ p: 3, mt: 3, background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#10b981' }}>
            Figuras Rítmicas Fundamentales
          </Typography>
          <Stack spacing={1}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Redonda (𝅝) = 4 tiempos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Blanca (𝅗𝅥) = 2 tiempos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Negra (♩) = 1 tiempo</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Corchea (♫) = 1/2 tiempo</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Semicorchea (♬) = 1/4 tiempo</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-3',
    title: 'Escalas y Arpegios',
    level: 'Intermedio',
    description: 'Dominio de escalas mayores, menores, arpegios y paso del pulgar',
    duration: '4-6 meses',
    topics: 12,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#f59e0b', mb: 3 }}>
          🎼 Construyendo Fluidez y Velocidad
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#f59e0b' }}>
            Escalas Mayores (Todas las Tonalidades)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Sin alteraciones:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• DO Mayor</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Con sostenidos:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• SOL, RE, LA, MI, SI, FA#, DO# Mayor</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Con bemoles:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• FA, SIb, MIb, LAb, REb, SOLb, DOb Mayor</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            Escalas Menores (3 Tipos)
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Natural: patrón natural sin alteraciones adicionales</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Armónica: 7º grado elevado (sensible)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Melódica: 6º y 7º elevados al subir, natural al bajar</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ec4899' }}>
            Arpegios y Técnica del Pulgar
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Arpegios tríadas: fundamental, 3ª, 5ª</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Arpegios de 7ª: agregar la 7ª al acorde</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Paso del pulgar: técnica esencial para fluidez</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Práctica: lento con metrónomo, aumentar gradualmente</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-4',
    title: 'Armonía y Acordes Avanzados',
    level: 'Avanzado',
    description: 'Progresiones armónicas, voicings, inversiones y sustituciones',
    duration: '6-8 meses',
    topics: 15,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#ef4444', mb: 3 }}>
          🎵 Dominando la Armonía
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ef4444' }}>
            Progresiones Armónicas Esenciales
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>I-IV-V-I (Progresión clásica)</Typography>
              <Typography variant="body2" color="text.secondary">Base de la música occidental</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>I-vi-IV-V (Progresión pop)</Typography>
              <Typography variant="body2" color="text.secondary">Usada en miles de canciones populares</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>ii-V-I (Progresión jazz)</Typography>
              <Typography variant="body2" color="text.secondary">Fundamental en jazz y música sofisticada</Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#a855f7' }}>
            Voicings y Distribución de Voces
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Voicing cerrado: notas dentro de una octava</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Voicing abierto: notas distribuidas en más de una octava</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Drop 2: bajar la 2ª voz una octava</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Drop 3: bajar la 3ª voz una octava</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Voicings de cuartas: sonoridad moderna</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            Acordes Extendidos y Alterados
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Extensiones:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• 9ª, 11ª, 13ª</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Maj7, Maj9, Maj13</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Alteraciones:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• b9, #9, #11, b13</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Acordes disminuidos y aumentados</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-5',
    title: 'Interpretación y Performance',
    level: 'Profesional',
    description: 'Expresión musical, rubato, dinámicas, fraseo y presencia escénica',
    duration: '8-12 meses',
    topics: 18,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#a855f7', mb: 3 }}>
          🎭 El Arte de la Interpretación
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#a855f7' }}>
            Dinámicas y Control Sonoro
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Rango dinámico: ppp (pianississimo) a fff (fortississimo)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Crescendo y diminuendo: control gradual del volumen</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Acentos y sforzando: énfasis expresivo</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Balance entre manos: jerarquía de voces</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Pedal: uso artístico del pedal de resonancia</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ec4899' }}>
            Tempo Rubato y Fraseo
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Rubato: "tiempo robado" para expresividad</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Agógica: micro-variaciones de tempo</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Respiración musical: pausas naturales</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Articulación: legato, staccato, portato, marcato</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Construcción de clímax: tensión y resolución</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            Análisis e Interpretación
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Análisis formal: estructura de la obra</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Contexto histórico: estilo del compositor</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Intención emocional: mensaje de la pieza</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Decisiones interpretativas: crear tu versión única</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Memorización: técnicas para tocar sin partitura</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#10b981' }}>
            Performance y Presencia Escénica
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Manejo de nervios: técnicas de relajación</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Conexión con la audiencia: comunicación no verbal</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Recuperación de errores: continuar con confianza</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Preparación mental: visualización y rutinas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Grabación y autoevaluación: mejora continua</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-practical-exercises',
    title: 'Ejercicios Prácticos para Piano',
    level: 'Básico',
    description: 'Los 5 pilares fundamentales de la técnica pianística con bibliografía recomendada',
    duration: '90 min',
    topics: 5,
    content: (
      <Box>
        <Accordion sx={{ mb: 2, background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '8px !important', '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#6366f1' }} />} sx={{ background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6366f1' }}>
              I. Pilar Biomecánico (Fundamentos Físicos)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
              El "Cómo" se mueve el cuerpo para generar sonido sin tensión.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#6366f1' }}>Conceptos Clave:</Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Método de caída de peso (Gravity drop)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Flexibilidad de muñeca</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Punto de apoyo (hombro-codo-dedo)</Typography>
            </Stack>
            <Paper sx={{ p: 2, background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.4)' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#6366f1' }}>📚 Bibliografía Recomendada:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                <strong>Franz Liszt (Ejercicios Técnicos):</strong> Material por excelencia para entender el uso del peso en grandes extensiones, saltos y sonoridades orquestales.
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px !important', '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#10b981' }} />} sx={{ background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981' }}>
              II. Pilar de Articulación y Mecanismo (El Toque)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
              La claridad, la independencia y la textura del sonido.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#10b981' }}>Conceptos Clave:</Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Independencia de dedos (especialmente 4 y 5)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Precisión del ataque</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Fuerza individual</Typography>
            </Stack>
            <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>📚 Bibliografía Recomendada:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1.5 }}>
                <strong>Hanon (El Pianista Virtuoso):</strong> Ideal para la mecánica básica y el fortalecimiento de los dedos débiles.
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                <strong>Isidor Philipp:</strong> Ejercicios de independencia avanzada que utilizan notas tenidas mientras otros dedos ejecutan articulaciones complejas.
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px !important', '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#f59e0b' }} />} sx={{ background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.03) 100%)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>
              III. Pilar de Desplazamiento y Fluidez (El Mapa)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
              La agilidad para recorrer las 88 teclas con eficiencia.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#f59e0b' }}>Conceptos Clave:</Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• El paso del pulgar</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Desplazamientos laterales</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Saltos</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Sustitución de dedos (cambio de dedo sobre nota presionada)</Typography>
            </Stack>
            <Paper sx={{ p: 2, background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#f59e0b' }}>📚 Bibliografía Recomendada:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                <strong>Czerny (Escuela de la Velocidad / Agilidad):</strong> El estándar de oro para el desarrollo de escalas, arpegios y la claridad rítmica en pasajes rápidos.
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, background: 'rgba(236, 72, 153, 0.05)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '8px !important', '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#ec4899' }} />} sx={{ background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.03) 100%)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ec4899' }}>
              IV. Pilar Rítmico y Cognitivo (La Coordinación)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
              La gestión cerebral de múltiples capas de información.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#ec4899' }}>Conceptos Clave:</Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Independencia de manos (ritmos opuestos)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Precisión rítmica extrema</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Síncopa</Typography>
            </Stack>
            <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.4)' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>📚 Bibliografía Recomendada:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1.5 }}>
                <strong>Brahms (51 Ejercicios):</strong> Fundamental para dominar polirritmias complejas y desplazamientos rítmicos.
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                <strong>Jazz Hanon / Hanon Blues:</strong> Esencial para internalizar el swing, las síncopas y la coordinación entre un bajo caminante y la melodía.
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '8px !important', '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#8b5cf6' }} />} sx={{ background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 100%)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#8b5cf6' }}>
              V. Pilar de Control Sonoro y Armonía (El Color)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
              La aplicación de la técnica para la expresión y la estructura musical.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#8b5cf6' }}>Conceptos Clave:</Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Cambios de acordes (economía de movimiento)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Voicing (resaltar una voz dentro de un acorde)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>• Dinámicas (pp al ff)</Typography>
            </Stack>
            <Paper sx={{ p: 2, background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.4)' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#8b5cf6' }}>📚 Bibliografía Recomendada:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                <strong>Jazz Hanon / Hanon Blues:</strong> No solo por la técnica, sino por la enseñanza de la armonía de séptimas, tensiones y cómo distribuir las voces (voicing) para que los acordes suenen equilibrados.
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Paper sx={{ p: 3, mt: 3, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)', border: '2px solid rgba(99, 102, 241, 0.3)', borderRadius: '12px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1', textAlign: 'center' }}>
            🛠️ Resumen de Referencia Rápida
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(99, 102, 241, 0.5)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#6366f1' }}>Pilar</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#6366f1' }}>Libro Principal</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#6366f1' }}>Enfoque Principal</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.9)' }}>1. Biomecánica</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Franz Liszt</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Peso del brazo y flexibilidad</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.9)' }}>2. Mecanismo</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Hanon / Isidor Philipp</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Independencia y articulación</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.9)' }}>3. Desplazamiento</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Czerny</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Velocidad, escalas y arpegios</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.9)' }}>4. Coordinación</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Brahms / Jazz Hanon</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Polirritmia y precisión rítmica</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.9)' }}>5. Armonía/Color</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Jazz Hanon / Blues Hanon</td>
                  <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)' }}>Acordes, Voicing y dinámica</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-6',
    title: 'Repertorio Clásico',
    level: 'Intermedio',
    description: 'Obras fundamentales de Bach, Mozart, Beethoven, Chopin y compositores románticos',
    duration: '6-12 meses',
    topics: 12,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#f59e0b', mb: 3 }}>
          🎼 Explorando el Repertorio Clásico
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            Período Barroco (1600-1750)
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• J.S. Bach: Invenciones a 2 voces (BWV 772-786)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Bach: Pequeños Preludios y Fugas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Bach: Suites Francesas e Inglesas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Handel: Suites para teclado</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Scarlatti: Sonatas (selección progresiva)</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#10b981' }}>
            Período Clásico (1750-1820)
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Mozart: Sonatas K.545, K.331 (Marcha Turca)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Haydn: Sonatas Hob. XVI (selección)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Beethoven: Sonatas tempranas (Op. 49, Op. 14)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Clementi: Sonatinas Op. 36</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ec4899' }}>
            Período Romántico (1820-1900)
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Chopin: Nocturnos, Valses, Preludios Op. 28</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Schumann: Escenas de Niños, Álbum de la Juventud</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Brahms: Intermezzos, Baladas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Liszt: Consolaciones, Sueños de Amor</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Mendelssohn: Romanzas sin Palabras</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#a855f7' }}>
            Siglo XX y Contemporáneo
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Debussy: Arabesque, Claro de Luna, Preludios</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ravel: Pavana para una Infanta Difunta</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Bartók: Mikrokosmos (progresivo)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Prokofiev: Piezas Juveniles</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Shostakovich: Preludios y Fugas</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-7',
    title: 'Improvisación y Jazz',
    level: 'Avanzado',
    description: 'Técnicas de improvisación, escalas modales, voicings de jazz y comping',
    duration: '8-12 meses',
    topics: 14,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#ef4444', mb: 3 }}>
          🎹 El Arte de la Improvisación
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            Escalas para Improvisación
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Escalas Básicas:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Pentatónica mayor y menor</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Blues (con blue notes)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Dórica, Mixolidia, Frigia</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)' }}>Escalas Avanzadas:</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Melódica menor y modos</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Disminuida (tono-semitono)</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>• Tonos enteros</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#f59e0b' }}>
            Voicings de Jazz
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Rootless voicings: omitir la fundamental</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Shell voicings: 3ª y 7ª (esenciales)</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Upper structure triads: tríadas sobre acordes</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Quartal voicings: acordes por cuartas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Block chords: técnica de Milt Buckner</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ec4899' }}>
            Técnicas de Comping
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ritmos sincopados: anticipaciones y retardos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Montunos y patrones latinos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Walking bass con acordes</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Stride piano: estilo tradicional</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Comping moderno: espacios y silencios</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#10b981' }}>
            Desarrollo de Solos
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Motivos: desarrollo y variación temática</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Call and response: pregunta y respuesta</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Construcción de tensión: uso de cromatismos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Fraseo: respiración y articulación jazz</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Transcripción: aprender de los maestros</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
  {
    id: 'piano-level-8',
    title: 'Técnicas Extendidas y Contemporáneas',
    level: 'Profesional',
    description: 'Técnicas del siglo XX y XXI, preparación del piano, clusters y efectos especiales',
    duration: '6-10 meses',
    topics: 10,
    content: (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#a855f7', mb: 3 }}>
          🚀 Explorando Nuevos Territorios Sonoros
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#a855f7' }}>
            Técnicas Extendidas
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Clusters: grupos de notas adyacentes</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Glissandi: sobre teclas blancas y negras</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Pizzicato: pellizcar las cuerdas directamente</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Armónicos: tocar cuerdas mientras se presionan teclas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Percusión sobre la caja del piano</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, mb: 3, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#6366f1' }}>
            Piano Preparado
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Técnica de John Cage: objetos entre cuerdas</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Tornillos, gomas, papel: diferentes timbres</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Preparación temporal vs. permanente</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Notación de piano preparado</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Obras representativas: Sonatas e Interludios</Typography>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#ef4444' }}>
            Compositores Contemporáneos
          </Typography>
          <Stack spacing={1.5}>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• George Crumb: Makrokosmos</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Ligeti: Études</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Messiaen: Vingt Regards</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Stockhausen: Klavierstücke</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)' }}>• Philip Glass: Études minimalistas</Typography>
          </Stack>
        </Paper>
      </Box>
    ),
  },
];
