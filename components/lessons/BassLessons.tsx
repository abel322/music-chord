'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, PlayArrow } from '@mui/icons-material';

interface Lesson {
  id: string;
  title: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  description: string;
  content: React.ReactNode;
}

export default function BassLessons() {
  const [expandedLesson, setExpandedLesson] = useState<string | false>(false);

  const handleLessonChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedLesson(isExpanded ? panel : false);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico':
        return {
          bg: 'rgba(16, 185, 129, 0.15)',
          color: '#10b981',
          border: '#10b981',
        };
      case 'Intermedio':
        return {
          bg: 'rgba(245, 158, 11, 0.15)',
          color: '#f59e0b',
          border: '#f59e0b',
        };
      case 'Avanzado':
        return {
          bg: 'rgba(239, 68, 68, 0.15)',
          color: '#ef4444',
          border: '#ef4444',
        };
      default:
        return {
          bg: 'rgba(107, 114, 128, 0.15)',
          color: '#6b7280',
          border: '#6b7280',
        };
    }
  };

  const bassLessons: Lesson[] = [
    {
      id: 'bass-techniques',
      title: 'Técnicas de Bajo Eléctrico',
      level: 'Básico',
      description: 'Guía completa de técnicas desde fundamentos hasta nivel profesional',
      content: (
        <Box>
          <Accordion sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                1. Fundamentos (El "Cimiento")
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
                Antes de correr, hay que saber pararse. Estas técnicas aseguran que no te lesiones y que el sonido sea limpio.
              </Typography>
              
              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Pizzicato (Alternado)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    El uso de los dedos índice y medio (i-m) para pulsar las cuerdas. La clave es la alternancia perfecta y el "apoyo" (el dedo descansa en la cuerda superior tras pulsar).
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`PIZZICATO ALTERNADO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vista de las cuerdas del bajo:
                                    
   G ═══════════════════════════    (más aguda)
   D ═══════════════════════════    
   A ═══════════════════════════    
   E ═══════════════════════════    (más grave)
        ↓         ↓
     índice    medio
       (i)      (m)

PATRÓN DE ALTERNANCIA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nota:  │  1  │  2  │  3  │  4  │  5  │  6  │
Dedo:  │  i  │  m  │  i  │  m  │  i  │  m  │
       └─────┴─────┴─────┴─────┴─────┴─────┘

EJEMPLO: Línea de bajo simple en Do
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3─────3─────3─────3─────
A ─────────────────────────────
D ─────────────────────────────
G ─────────────────────────────
      i   m   i   m   i   m

TÉCNICA DEL APOYO:
• Después de pulsar, el dedo descansa en la cuerda superior
• Ejemplo: Al tocar la cuerda E, el dedo descansa en A
• Esto da estabilidad y control`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Muting (Sordina)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Técnica esencial para evitar que las cuerdas al aire vibren por simpatía. Se hace con la palma de la mano derecha o con los dedos de la izquierda que no están presionando trastes.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`MUTING (SORDINA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TÉCNICA 1: Mano Derecha (Palm Mute)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              [Palma]
                 ↓
   G ═══════════════════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══════════════════════════  
        ↑
   Apoya el canto de la palma
   cerca del puente

TÉCNICA 2: Mano Izquierda
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 1   2   3   4   5
        │   │   │   │   │
   G ───┼───┼───●───┼───┼───  ← Dedo presiona aquí
   D ───┼───x───┼───┼───┼───  ← Dedos tocan ligeramente
   A ───┼───x───┼───┼───┼───     (sin presionar)
   E ───┼───x───┼───┼───┼───

EJEMPLO: Tocando la nota G (traste 3, cuerda E)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3─────────────────  ← Nota que suena
A ─────x─────────────────  ← Muteada
D ─────x─────────────────  ← Muteada  
G ─────x─────────────────  ← Muteada

RESULTADO: Solo suena la nota deseada, sin ruidos`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Posición del Pulgar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    El uso del pulgar de la mano derecha como ancla (ya sea en la pastilla o en las cuerdas graves) para dar estabilidad.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`POSICIÓN DEL PULGAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPCIÓN 1: Anclaje en Pastilla
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                [Pastilla]
                    ↓
   G ═══════════[P]═════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══════════════════════════  
                ↑
           Pulgar apoyado
           (da estabilidad)

OPCIÓN 2: Anclaje en Cuerda E
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   G ═══════════════════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══[P]═════════════════════  
        ↑
   Pulgar descansa aquí
   cuando tocas cuerdas superiores

EJEMPLO: Tocando cuerda D con pulgar en E
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   G ─────────────────────────── 
   D ─────5───7───5───3─────────  ← Tocas aquí
        (i) (m) (i) (m)
   A ─────────────────────────── 
   E ═══[P]═════════════════════  ← Pulgar anclado
        ↑
   Mantiene posición estable

VENTAJAS:
• Mayor control y precisión
• Menos fatiga en la mano
• Sonido más consistente
• Base para técnicas avanzadas`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                2. Técnicas Intermedias (Articulación y Groove)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
                Aquí es donde el bajo empieza a cobrar vida y a tener "color".
              </Typography>
              
              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Hammer-on y Pull-off</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Ligar notas sin pulsar con la mano derecha, usando solo la fuerza de la mano izquierda.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`HAMMER-ON & PULL-OFF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HAMMER-ON (H):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 0   1   2   3   4   5
        │   │   │   │   │   │
   A ───●───┼───┼───●───┼───┼───
        ↑           ↑
     Pulsa      Martilla
     (dedo)     con fuerza

EJEMPLO: De traste 0 a 3 en cuerda A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────0───H───3─────────────────
              ↑
         Solo martillas,
         no pulsas de nuevo

PULL-OFF (P):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 0   1   2   3   4   5
        │   │   │   │   │   │
   A ───●───┼───┼───●───┼───┼───
        ↑           ↑
    Suena al    Presiona y
    soltar      tira hacia abajo

EJEMPLO: De traste 3 a 0 en cuerda A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────3───P───0─────────────────
              ↑
         Tira el dedo,
         suena la cuerda al aire

COMBINACIÓN (Lick típico):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────0─H─2─H─3─P─2─P─0─────────
      │   │   │   │   │   │
      1   2   3   4   &   &

TIPS:
• Hammer-on: Golpea fuerte con el dedo
• Pull-off: Tira ligeramente hacia abajo al soltar
• Practica lento primero`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Slides (Glissandos)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Deslizarse de una nota a otra. Fundamental para líneas de bajo fluidas y expresivas.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`SLIDES (GLISSANDOS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SLIDE ASCENDENTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 0   1   2   3   4   5   6   7
        │   │   │   │   │   │   │   │
   A ───┼───┼───●═══════════●───┼───
                ↑           ↑
             Inicio       Final
             (pulsa)    (mantén presión)

EJEMPLO: Slide de traste 2 a 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────2/5───────────────────────
        ↑
   Desliza sin soltar

SLIDE DESCENDENTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 0   1   2   3   4   5   6   7
        │   │   │   │   │   │   │   │
   A ───┼───┼───●═══════════●───┼───
                ↑           ↑
             Final       Inicio
                       (pulsa)

EJEMPLO: Slide de traste 7 a 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────7\\3───────────────────────

LÍNEA DE BAJO CON SLIDES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3───5/7───7───5\\3───3─────
      │   │   │   │   │   │
      1   2   3   4   &   &

TIPS:
• Mantén la presión constante al deslizar
• El slide debe ser suave y continuo
• Practica la velocidad del slide
• Usa slides para conectar notas expresivamente`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Ghost Notes (Notas Muertas)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Notas percusivas sin tono definido. Son el secreto detrás de un groove con mucho "swing" y profundidad rítmica.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`GHOST NOTES (NOTAS MUERTAS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TÉCNICA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 0   1   2   3   4   5
        │   │   │   │   │   │
   A ───x───┼───●───x───●───┼───
        ↑       ↑   ↑   ↑
      Ghost  Normal Ghost Normal
      (mute) (suena) (mute) (suena)

NOTACIÓN EN TABLATURA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
x = Ghost note (nota muerta)
● = Nota normal

EJEMPLO: Groove Funk con Ghost Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tiempo: 1   &   2   &   3   &   4   &
        │   │   │   │   │   │   │   │
E ─────3───x───x───3───x───3───x───x─
      ●   x   x   ●   x   ●   x   x

PATRÓN TÍPICO DE R&B:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────x───3───x───x───3───x───x───3─
A ─────5───x───x───5───x───x───5───x─
      │   │   │   │   │   │   │   │
      1   &   2   &   3   &   4   &

CÓMO TOCAR GHOST NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Toca la cuerda con los dedos
2. Mantén la mano izquierda tocando
   ligeramente (sin presionar)
3. Sonido: "thunk" percusivo

TIPS:
• Ghost notes crean el "groove"
• Toca suave pero con ritmo preciso
• Combina con notas normales
• Escucha funk y R&B para referencias`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Slap & Pop básico</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    El golpe con el pulgar (slap) y el tirón con el índice/medio (pop). Es la base del funk.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`SLAP & POP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SLAP (Pulgar - T):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        [Pulgar]
           ↓  Golpe perpendicular
   G ═══════════════════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══[T]═════════════════════  ← Golpea aquí
        ↑
   El pulgar rebota inmediatamente

POP (Índice/Medio - P):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   G ═══[P]═════════════════════  ← Tira hacia arriba
        ↑
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══════════════════════════  

PATRÓN BÁSICO DE FUNK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tiempo: 1   &   2   &   3   &   4   &
        │   │   │   │   │   │   │   │
E ─────T───────T───────T───────T─────
D ─────────────────────────────────── 
A ─────────────────────────────────── 
G ─────────P───────P───────P───────P─

EJEMPLO: Línea de slap en E y pop en D
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────T───────T───────T───────T─────
D ─────────P───────P───────P───────P─
A ─────────────────────────────────── 
G ─────────────────────────────────── 
      1   &   2   &   3   &   4   &

TIPS:
• Slap: Golpe rápido y seco, el pulgar rebota
• Pop: Tira la cuerda hacia arriba y suéltala
• Mantén la muñeca relajada`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Vibrato</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Oscilar la cuerda para dar emoción a las notas largas, similar a la técnica de la guitarra pero con más resistencia.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`VIBRATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOVIMIENTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 0   1   2   3   4   5
        │   │   │   │   │   │
   A ───┼───┼───┼───●───┼───┼───
                 ↕↕↕
            Oscila arriba/abajo
            (perpendicular)

REPRESENTACIÓN DEL VIBRATO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ~~~●~~~
           ↕
      Movimiento
      ondulatorio

EJEMPLO: Nota larga con vibrato
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────5~~~~~~~~~~~~~~~~~────────
      │                 │
   Presiona          Mantén
   y oscila         vibrando

TIPOS DE VIBRATO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. VIBRATO LENTO (Blues/Soul):
   A ─────5~~~5~~~5~~~5─────
         ↕   ↕   ↕   ↕
      Oscilación amplia y lenta

2. VIBRATO RÁPIDO (Rock/Metal):
   A ─────5~~~~~~~~~────────
         ↕↕↕↕↕↕↕↕
      Oscilación rápida

3. VIBRATO SUTIL (Jazz):
   A ─────5~·~·~·~──────────
         ↕ ↕ ↕ ↕
      Oscilación pequeña

TÉCNICA:
• Presiona el traste firmemente
• Mueve el dedo perpendicular al diapasón
• Usa la muñeca, no solo el dedo
• Controla la velocidad y amplitud

TIPS:
• Practica con metrónomo
• Empieza lento, aumenta velocidad
• Escucha a Jaco Pastorius, Marcus Miller`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                3. Técnicas Avanzadas (Textura y Velocidad)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
                En este punto, el bajo sale de su rol tradicional para explorar nuevas capacidades.
              </Typography>
              
              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Double Thumping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Técnica popularizada por Victor Wooten. Usar el pulgar como una púa (golpe hacia abajo y hacia arriba).
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`DOUBLE THUMPING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOVIMIENTO DEL PULGAR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ↓  DOWN (D)
   G ═══════════════════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══[T]═════════════════════  
        ↑  UP (U)

PATRÓN BÁSICO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tiempo: 1   e   &   a   2   e   &   a
        │   │   │   │   │   │   │   │
E ─────D───U───D───U───D───U───D───U─
      ↓   ↑   ↓   ↑   ↓   ↑   ↓   ↑

EJEMPLO: Double Thump en 16avos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3───3───3───3───5───5───5───5─
      D   U   D   U   D   U   D   U
      │   │   │   │   │   │   │   │
      1   e   &   a   2   e   &   a

COMBINACIÓN CON POP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────D───U───D───U─────────────────
D ─────────────────────P───────P─────
A ─────────────────────────────────── 
G ─────────────────────────────────── 
      1   e   &   a   2   &   3   &

VELOCIDAD COMPARADA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slap normal:  ♩ ♩ ♩ ♩  (4 notas)
Double Thump: ♬♬♬♬♬♬♬♬ (8 notas)
              ↑
         Doble de rápido!

TIPS:
• Practica el movimiento de muñeca
• Down = golpe normal de slap
• Up = golpe con el dorso del pulgar
• Mantén el pulgar relajado
• Referencia: Victor Wooten, Marcus Miller`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Tapping (A dos manos)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Presionar las cuerdas directamente contra el diapasón con ambas manos para crear arpegios o contrapuntos melódicos.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`TAPPING (DOS MANOS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POSICIÓN DE LAS MANOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 3   5   7   9   12  15  17
        │   │   │   │   │   │   │
   G ───┼───L1──┼───┼───R1──┼───R2──
        ↑       ↑       ↑       ↑
     Mano Izq.    Mano Derecha

L = Left hand (Izquierda)
R = Right hand (Derecha)

EJEMPLO: Arpegio en Em
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────────────12──────────────────
D ─────────────────14──────────────
A ─────5───7────────────7───5──────
E ─────────────────────────────────
      L1  L2  R1  R2  R1  L2  L1

PATRÓN DE TAPPING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────5───T───12──P───5───T───12──
      │   │   │   │   │   │   │
      L   H   R   P   L   H   R

T = Tap (golpea fuerte)
H = Hammer-on
P = Pull-off

TÉCNICA DE TAPPING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Golpea fuerte con el dedo
2. Presiona firmemente contra el traste
3. Pull-off al soltar
4. Mantén el muting con ambas manos

EJEMPLO AVANZADO: Escala rápida
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─5─7─9─12─14─16─14─12─9─7─5─────
  L L L R  R  R  R  R  L L L

TIPS:
• Usa la yema del dedo
• Golpea perpendicular al diapasón
• Practica lento primero
• Referencia: Billy Sheehan, Stuart Hamm`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Armónicos (Naturales y Artificiales)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Uso de los nodos de la cuerda para producir tonos acampanados. Los artificiales requieren pisar un traste y puntear mientras se roza la cuerda.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`ARMÓNICOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARMÓNICOS NATURALES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 3   5   7   9   12  15  17
        │   │   │   │   │   │   │
   G ───┼───◊───◊───┼───◊───┼───◊───
        ↑
   Toca ligeramente sobre el traste
   (no presiones)

NODOS PRINCIPALES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste 12: Octava (más fácil)
Traste 7:  Quinta + Octava
Traste 5:  Doble octava
Traste 4:  Tercera mayor + 2 octavas

EJEMPLO: Armónicos en E
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────<12>──<7>───<5>───<4>─────
       ◊    ◊     ◊     ◊
      Octava 5ta  2Oct  3ra+2Oct

ARMÓNICOS ARTIFICIALES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mano Izq: Presiona traste 3
Mano Der: Toca armónico 12 trastes arriba

Traste: 3   ...   15 (3+12)
        │         │
   A ───●─────────◊───────────────
        ↑         ↑
    Presiona   Roza aquí
               (12 trastes arriba)

EJEMPLO: Línea con armónicos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3───<12>──5───<12>──7───<12>
      │   │     │   │     │   │
    Normal Arm Normal Arm Normal Arm

TÉCNICA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Toca ligeramente sobre el traste
2. No presiones, solo roza
3. Pulsa y retira el dedo inmediatamente
4. Sonido: "ding" acampanado

TIPS:
• Practica en traste 12 primero
• Usa el borde del dedo
• Experimenta con diferentes nodos
• Referencia: Jaco Pastorius, Victor Wooten`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Chords (Acordes) y Double Stops</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Tocar dos o más notas simultáneamente. Requiere mucho cuidado para no "embarrar" el sonido en las frecuencias bajas.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`CHORDS & DOUBLE STOPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOUBLE STOP (2 notas):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 3   5   7   9   12
        │   │   │   │   │
   G ───┼───●───┼───┼───┼───  ← Quinta
   D ───┼───●───┼───┼───┼───  ← Tónica
   A ───┼───┼───┼───┼───┼───
   E ───┼───┼───┼───┼───┼───

EJEMPLO: Double stops en A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────────────────────────────
D ─────7───9───7───5───────────  ← E (quinta)
A ─────7───9───7───5───────────  ← A (tónica)
E ─────────────────────────────
      │   │   │   │
    Toca ambas cuerdas juntas

ACORDE DE 3 NOTAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traste: 3   5   7   9   12
        │   │   │   │   │
   G ───┼───●───┼───┼───┼───  ← 5ta
   D ───┼───●───┼───┼───┼───  ← 3ra
   A ───┼───●───┼───┼───┼───  ← Tónica
   E ───┼───┼───┼───┼───┼───

EJEMPLO: Acorde de Am (A menor)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────5─────────────────────── (E)
D ─────5─────────────────────── (C)
A ─────7─────────────────────── (A)
E ─────────────────────────────

PROGRESIÓN CON ACORDES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Am          Dm          Em
G ─────5───────10──────────────
D ─────5────────────────9──────
A ─────7───────10───────7──────
E ─────────────────────────────

INTERVALOS RECOMENDADOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Octavas (8va)
✓ Quintas (5ta)
✓ Cuartas (4ta)
✗ Evita: Segundas y terceras en graves
  (suenan embarradas)

TIPS:
• Usa intervalos amplios
• Toca en registros medios/agudos
• Presiona todas las notas firmemente
• Practica la limpieza del sonido
• Referencia: Jaco Pastorius, Stanley Clarke`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Raking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Usar el mismo dedo para cruzar varias cuerdas en sentido descendente, optimizando la velocidad en pasajes rápidos.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`RAKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOVIMIENTO DEL DEDO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        [índice]
           ↓
   G ───●─────────────────────── 
        ↘
   D ─────●───────────────────── 
          ↘
   A ───────●─────────────────── 
            ↘
   E ─────────●───────────────── 

Un solo dedo cruza todas las cuerdas

EJEMPLO: Arpegio descendente en Am
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────5─────────────────────── 
D ─────────5───────────────────  
A ─────────────7───────────────  
E ─────────────────────────────  
      (i)   (i)   (i)
       ↘     ↘     ↘
    Mismo dedo en movimiento continuo

PATRÓN RÁPIDO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tiempo: 1   e   &   a   2   e   &   a
        │   │   │   │   │   │   │   │
G ─────5───────────5───────────5─────
D ─────────5───────────5─────────────
A ─────────────7───────────7─────────
E ─────────────────────────────────── 
      i   i   i   i   i   i   i   i
      ↘   ↘   ↘   ↘   ↘   ↘   ↘   ↘

COMBINACIÓN CON OTRAS TÉCNICAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────5─────────────────────────────
D ─────────5─────────────────────────
A ─────────────7─H─9─P─7─────────────
E ─────────────────────────0─────────
      i   i   i   H   P   m   i
      ↘   ↘   ↘

VENTAJAS DEL RAKING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Mayor velocidad en arpegios
• Movimiento más eficiente
• Sonido fluido y conectado
• Menos fatiga en la mano

TIPS:
• Mantén el dedo relajado
• Movimiento continuo, no entrecortado
• Practica lento primero
• Combina con hammer-ons y pull-offs
• Referencia: Billy Sheehan, John Myung`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                4. Nivel Profesional y Estilístico
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
                Estas técnicas separan a los bajistas competentes de los maestros de sesión.
              </Typography>
              
              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Palm Mute (estilo Vintage)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Apagar las cuerdas con el canto de la mano derecha mientras se pulsa con el pulgar para obtener un sonido seco, similar al contrabajo o al bajo de los 60.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`PALM MUTE (ESTILO VINTAGE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POSICIÓN DE LA MANO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        [Canto de la mano]
              ↓
   G ═══════════════════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══[P]═════════════════════  
        ↑
   Pulgar pulsa mientras
   la palma apaga

SONIDO CARACTERÍSTICO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Normal:     "BOOM" (resonante)
Palm Mute:  "thump" (seco, corto)

EJEMPLO: Línea estilo Motown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3───3───3───3───5───5───5───5─
      PM  PM  PM  PM  PM  PM  PM  PM
      │   │   │   │   │   │   │   │
      1   &   2   &   3   &   4   &

WALKING BASS CON PALM MUTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3───────5───────7───────8─────
A ─────────────────────────────────── 
      PM      PM      PM      PM
      │       │       │       │
      1       2       3       4

COMPARACIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sin PM:  E ─────3~~~~~~~~~~~~~~~~~
         Sonido: Largo y resonante

Con PM:  E ─────3─
         Sonido: Corto y seco

ESTILOS QUE USAN PALM MUTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Motown (años 60)
• Soul clásico
• R&B vintage
• Rockabilly
• Country

TIPS:
• Apoya el canto de la mano cerca del puente
• Pulsa con el pulgar
• Presión moderada (no demasiado fuerte)
• Simula el sonido del contrabajo
• Referencia: James Jamerson, Carol Kaye`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Three-Finger Picking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Usar tres dedos (anular, medio, índice) para alcanzar velocidades de gallop (común en el metal o jazz fusión).
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`THREE-FINGER PICKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POSICIÓN DE LOS DEDOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   G ═══════════════════════════  
   D ═══════════════════════════  
   A ═══════════════════════════  
   E ═══════════════════════════  
        ↓   ↓   ↓
       (a) (m) (i)
     anular medio índice

PATRÓN BÁSICO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nota:  │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
Dedo:  │ a │ m │ i │ a │ m │ i │
       └───┴───┴───┴───┴───┴───┘

GALLOP (Patrón de Metal):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tiempo: 1   &   a   2   &   a
        │   │   │   │   │   │
E ─────3───3───3───3───3───3─────
      a   m   i   a   m   i
      ♪   ♪   ♪   ♪   ♪   ♪
      └─tripletes─┘

EJEMPLO: Línea rápida en E
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────0─0─0─3─3─3─5─5─5─7─7─7─────
      a m i a m i a m i a m i
      │ │ │ │ │ │ │ │ │ │ │ │
      Tripletes continuos

PATRÓN DE JAZZ FUSIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────3─5─7─8─7─5─3─5─7─8─10─12──
      a m i a m i a m i a m  i
      │ │ │ │ │ │ │ │ │ │ │  │
      Escala rápida y fluida

VENTAJAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 50% más rápido que dos dedos
• Ideal para tripletes
• Menos fatiga en pasajes largos
• Sonido más uniforme

EJERCICIO DE VELOCIDAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E ─────0─0─0─0─0─0─0─0─0─0─0─0─────
      a m i a m i a m i a m i
      
Practica con metrónomo:
60 BPM → 80 BPM → 100 BPM → 120 BPM

TIPS:
• Practica lento primero
• Mantén los dedos relajados
• Alterna uniformemente
• Usa con gallops y tripletes
• Referencia: Billy Sheehan, Steve Harris`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Bending</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Estirar la cuerda para alcanzar otra nota. En el bajo requiere mucha fuerza y precisión en la afinación.
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`BENDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOVIMIENTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Antes del bend:
Traste: 5   7   9   11  12
        │   │   │   │   │
   G ───┼───●───┼───┼───┼───
            ↑
        Nota inicial

Durante el bend:
Traste: 5   7   9   11  12
        │   │   │   │   │
   G ───┼───●───┼───┼───┼───
            ↑↑↑
        Empuja hacia arriba

TIPOS DE BENDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. MEDIO TONO (1/2):
   G ─────7^8───────────────────
         ↑ ↑
       Traste 7 suena como 8

2. TONO COMPLETO (1):
   G ─────7^9───────────────────
         ↑ ↑
       Traste 7 suena como 9

3. TONO Y MEDIO (1.5):
   G ─────7^10──────────────────
         ↑  ↑
       Traste 7 suena como 10

EJEMPLO: Lick con bend
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────5───7^9───7───5───────────
      │   │   │   │   │
      1   2   3   4   &

BEND Y RELEASE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────7^9~~~~~~~9v7─────────────
      ↑         ↓
    Sube      Baja
    (bend)  (release)

PRE-BEND (Bend antes de pulsar):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────(9)v7─────────────────────
       ↑  ↓
    Bend ya  Suelta
    hecho   mientras suena

TÉCNICA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Usa 2-3 dedos para más fuerza
2. Empuja perpendicular al diapasón
3. Escucha la afinación
4. Las cuerdas de bajo son duras!

TIPS:
• Practica la afinación con afinador
• Usa cuerdas más ligeras al principio
• Fortalece los dedos gradualmente
• Común en cuerdas G y D
• Referencia: Jaco Pastorius, Pino Palladino`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.03)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>Técnicas de Fretless</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    Si usas un bajo sin trastes, se suman el intonation perfecto y el "mwah" (el sonido característico del roce de la cuerda con la madera).
                  </Typography>
                  <Paper sx={{ p: 3, bgcolor: '#0d1117', color: '#58a6ff', fontFamily: 'monospace', fontSize: '0.85rem', overflow: 'auto', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                    <pre style={{ margin: 0, color: '#c9d1d9' }}>{`TÉCNICAS DE FRETLESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIAPASÓN SIN TRASTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        Marcas laterales
             ↓
   │         ●         ●         │
   │    ●         ●         ●    │
   │                             │
   │         ●         ●         │
   └─────────────────────────────┘
   
   Sin trastes = Posición exacta crucial

POSICIÓN DE LOS DEDOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Fretted:   │ ● │   │   │
           Detrás del traste

Fretless:  │   ● │   │   │
           SOBRE la marca
           (donde estaría el traste)

EL SONIDO "MWAH":
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────5~~~~~~~~~~~~~~~~~────────
      ↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕
   Vibrato + Presión = "Mwah"
   (Sonido vocal característico)

GLISSANDO PERFECTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────3═══════════════12────────
      ↑               ↑
   Desliza suavemente sin trastes
   que interrumpan el sonido

EJEMPLO: Línea melódica fretless
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
G ─────5~──7/9~──9\\7~──5~────────
      │   │   │   │   │
    Vibrato en cada nota larga

MICROTONOS (Notas entre notas):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A ─────5───5.5───6───────────────
      │    ↑    │
      Do  Do#/Db Re
          (entre notas)

VENTAJAS DEL FRETLESS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Sonido más cálido y expresivo
• Glissandos perfectos
• Vibrato más natural
• Sonido "mwah" único
• Microtonos posibles

DESAFÍOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Requiere oído perfecto
• Intonación precisa necesaria
• Más difícil para principiantes
• Mantenimiento del diapasón

TIPS:
• Practica con afinador siempre
• Usa marcas laterales como guía
• Desarrolla el oído
• Presiona justo sobre la marca
• Referencia: Jaco Pastorius, Pino Palladino,
  Tony Franklin, Gary Willis`}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </Box>
      ),
    },
    {
      id: 'bass-basic-1',
      title: 'Clave de Fa y Registro del Bajo',
      level: 'Básico',
      description: 'Aprende a leer en clave de fa y el registro específico del bajo',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>
            La Clave de Fa
          </Typography>
          <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f0f8ff' }}>
            <Typography variant="body1" gutterBottom>
              El bajo se escribe principalmente en clave de fa, que indica las notas graves:
            </Typography>
            <Box sx={{ textAlign: 'center', my: 3, fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Líneas del pentagrama (de abajo hacia arriba):</Typography>
              <div>5ª línea: _____ LA</div>
              <div>4º espacio: SOL</div>
              <div>4ª línea: _____ FA</div>
              <div>3º espacio: MI</div>
              <div>3ª línea: _____ RE</div>
              <div>2º espacio: DO</div>
              <div>2ª línea: _____ SI</div>
              <div>1º espacio: LA</div>
              <div>1ª línea: _____ SOL</div>
            </Box>
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                💡 Truco: "Sol Si Re Fa La" (líneas) y "La Do Mi Sol" (espacios)
              </Typography>
            </Box>
          </Paper>

          <Typography variant="h6" gutterBottom>
            Cuerdas del Bajo en Partitura
          </Typography>
          <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f8fff8' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Afinación estándar (4 cuerdas):
                </Typography>
                <Stack spacing={0.5}>
                  <Typography>• 4ª cuerda (más grave): MI (E1)</Typography>
                  <Typography>• 3ª cuerda: LA (A1)</Typography>
                  <Typography>• 2ª cuerda: RE (D2)</Typography>
                  <Typography>• 1ª cuerda (más aguda): SOL (G2)</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  En el pentagrama:
                </Typography>
                <Typography variant="body2">
                  Las cuerdas al aire se escriben desde el MI grave hasta el SOL (primera línea del pentagrama).
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ),
    },
    {
      id: 'bass-basic-2',
      title: 'Líneas de Bajo en Partitura',
      level: 'Básico',
      description: 'Aprende a leer y escribir líneas de bajo fundamentales',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Progresiones Básicas</Typography>
          <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" gutterBottom>
              Cómo se escriben las progresiones de acordes más comunes:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 2, backgroundColor: '#e8f5e8' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    I-V-vi-IV (Do Mayor)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Acordes:</strong> C - G - Am - F
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Bajo:</strong> DO - SOL - LA - FA
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    ii-V-I (Jazz básico)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Acordes:</strong> Dm - G7 - C
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Bajo:</strong> RE - SOL - DO
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h6" gutterBottom>Patrones Rítmicos</Typography>
          <Paper sx={{ p: 3, backgroundColor: '#fafafa' }}>
            <Typography variant="body1" gutterBottom>
              Diferentes formas de tocar las mismas notas con distintos ritmos:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, backgroundColor: '#ffebee' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Redondas (4 tiempos)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    Una nota por compás
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, backgroundColor: '#f3e5f5' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Blancas (2 tiempos)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    Dos notas por compás
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, backgroundColor: '#e8eaf6' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Walking Bass
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    Cuatro notas por compás
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ),
    },
    {
      id: 'bass-intermediate-1',
      title: 'Técnicas Avanzadas en Partitura',
      level: 'Intermedio',
      description: 'Aprende a leer técnicas como slap, pop y ghost notes',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Notación de Técnicas Especiales</Typography>
          <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f8f9fa' }}>
            <Typography variant="body1" gutterBottom>
              Símbolos especiales para técnicas de bajo moderno:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Slap y Pop:
                </Typography>
                <Typography variant="body2">• T = Thumb (slap con pulgar)</Typography>
                <Typography variant="body2">• P = Pop (tirar cuerda)</Typography>
                <Typography variant="body2">• S = Slap (alternativa a T)</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Ghost Notes:
                </Typography>
                <Typography variant="body2">• Nota fantasma (muy suave)</Typography>
                <Typography variant="body2">• x = Nota muerta</Typography>
                <Typography variant="body2">• Crea groove y ritmo</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h6" gutterBottom>Articulaciones y Dinámicas</Typography>
          <Paper sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" gutterBottom>
              Símbolos que modifican cómo se toca cada nota:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Articulaciones:
                </Typography>
                <Typography variant="body2">• Staccato = Nota corta y seca</Typography>
                <Typography variant="body2">• Tenuto = Nota sostenida</Typography>
                <Typography variant="body2">• Acento = Nota más fuerte</Typography>
                <Typography variant="body2">• Legato = Notas conectadas</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Efectos especiales:
                </Typography>
                <Typography variant="body2">• Bend = Estirar cuerda</Typography>
                <Typography variant="body2">• Slide = Deslizar entre trastes</Typography>
                <Typography variant="body2">• Hammer-on = Martilleo</Typography>
                <Typography variant="body2">• Pull-off = Tirón</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      {bassLessons.map((lesson) => (
        <Accordion
          key={lesson.id}
          expanded={expandedLesson === lesson.id}
          onChange={handleLessonChange(lesson.id)}
          sx={{
            mb: 2,
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px !important',
            overflow: 'hidden',
            '&:before': { display: 'none' },
            '&:hover': {
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'rgba(16, 185, 129, 0.03)',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#10b981' }} />}
            sx={{
              background: 'transparent',
              color: '#fff',
              '&:hover': {
                background: 'rgba(16, 185, 129, 0.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Chip
                label={lesson.level}
                size="small"
                sx={{
                  backgroundColor: getLevelColor(lesson.level).bg,
                  color: getLevelColor(lesson.level).color,
                  border: `1px solid ${getLevelColor(lesson.level).border}`,
                  fontWeight: 'bold',
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  {lesson.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                  {lesson.description}
                </Typography>
              </Box>
              <Button
                size="small"
                startIcon={<PlayArrow />}
                sx={{
                  color: '#10b981',
                  fontWeight: 600,
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                Estudiar
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)', color: '#fff' }}>
            {lesson.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
