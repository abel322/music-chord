'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Paper,
  Grid,
  Card,
  Stack,
  Fade,
  Slide,
  Button,
  Breadcrumbs,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  ExpandMore,
  MusicNote,
  PlayArrow,
  Home,
  School,
  KeyboardArrowDown,
} from '@mui/icons-material';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  level: 'BÃ¡sico' | 'Intermedio' | 'Avanzado';
  description: string;
  duration: string;
  topics: number;
  content: React.ReactNode;
}

export default function GuitarLessonsPage() {
  const [expandedLesson, setExpandedLesson] = useState<string | false>(false);

  const handleToggle = (lessonId: string) => {
    setExpandedLesson(expandedLesson === lessonId ? false : lessonId);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'BÃ¡sico': return { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '#10b981' };
      case 'Intermedio': return { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '#f59e0b' };
      case 'Avanzado': return { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '#ef4444' };
      default: return { bg: 'rgba(107, 114, 128, 0.15)', color: '#6b7280', border: '#6b7280' };
    }
  };

  const guitarLessons: Lesson[] = [
    {
      id: 'guitar-basic-1',
      title: 'Tablatura vs Partitura',
      level: 'BÃ¡sico',
      description: 'Comprende las diferencias entre tablatura y notaciÃ³n musical estÃ¡ndar',
      duration: '35 min',
      topics: 4,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#ec4899' }}>
            Tablatura de Guitarra
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(219, 39, 119, 0.05) 100%)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
            <Typography variant="body1" gutterBottom>
              La tablatura muestra exactamente dónde poner los dedos en el mástil:
            </Typography>
            <Box sx={{ textAlign: 'center', my: 3, fontFamily: 'monospace', fontSize: { xs: '0.8rem', md: '1.1rem' }, lineHeight: 1.8, color: '#ec4899' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Cuerdas (de aguda a grave):</Typography>
              <div>e |--0--2--3--5--| (1Âª cuerda - Mi agudo)</div>
              <div>B |--1--3--5--7--| (2Âª cuerda - Si)</div>
              <div>G |--0--2--4--6--| (3Âª cuerda - Sol)</div>
              <div>D |--2--4--5--7--| (4Âª cuerda - Re)</div>
              <div>A |--0--2--3--5--| (5Âª cuerda - La)</div>
              <div>E |--3--5--7--8--| (6Âª cuerda - Mi grave)</div>
            </Box>
            <Box sx={{ mt: 2, p: 2, background: 'rgba(236, 72, 153, 0.15)', borderRadius: 2, border: '1px solid rgba(236, 72, 153, 0.3)' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                ðŸ’¡ Los nÃºmeros indican el traste: 0 = cuerda al aire, 3 = tercer traste
              </Typography>
            </Box>
          </Paper>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#10b981' }}>
            Partitura EstÃ¡ndar
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <Typography variant="body1" gutterBottom>
              La guitarra se escribe en clave de sol, pero suena una octava más grave:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Cuerdas al aire (de grave a agudo):
                </Typography>
                <Stack spacing={0.5}>
                  <Typography>â€¢ 6Âª cuerda: MI (E2)</Typography>
                  <Typography>â€¢ 5Âª cuerda: LA (A2)</Typography>
                  <Typography>â€¢ 4Âª cuerda: RE (D3)</Typography>
                  <Typography>â€¢ 3Âª cuerda: SOL (G3)</Typography>
                  <Typography>â€¢ 2Âª cuerda: SI (B3)</Typography>
                  <Typography>â€¢ 1Âª cuerda: MI (E4)</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  PosiciÃ³n en el pentagrama:
                </Typography>
                <Typography variant="body2">
                  Las cuerdas al aire se escriben desde el MI bajo (debajo del pentagrama con lÃ­neas adicionales) 
                  hasta el MI agudo (primer espacio).
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#6366f1' }}>
            Ventajas de cada sistema
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', height: '100%' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Tablatura
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>âœ… FÃ¡cil de leer</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>âœ… Muestra posiciÃ³n exacta</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>âœ… EspecÃ­fica para guitarra</Typography>
                  <Typography variant="body2" sx={{ color: '#ef4444' }}>âŒ No muestra ritmo claramente</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', height: '100%' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Partitura
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>âœ… Muestra ritmo preciso</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>âœ… Universal para todos los instrumentos</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>✅ Teoría musical completa</Typography>
                  <Typography variant="body2" sx={{ color: '#ef4444' }}>âŒ Requiere mÃ¡s estudio</Typography>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ),
    },
    {
      id: 'guitar-basic-2',
      title: 'Acordes Abiertos en Partitura',
      level: 'BÃ¡sico',
      description: 'Aprende cÃ³mo se escriben los acordes bÃ¡sicos en partitura y tablatura',
      duration: '40 min',
      topics: 5,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#ec4899' }}>
            Acordes Mayores en Partitura
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(219, 39, 119, 0.05) 100%)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    DO Mayor (C)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>En partitura:</strong> DO-MI-SOL-DO-MI
                  </Typography>
                  <Box sx={{ fontFamily: 'monospace', fontSize: { xs: '0.75rem', md: '0.9rem' }, lineHeight: 1.4, background: 'rgba(0,0,0,0.05)', p: 1, borderRadius: 1 }}>
                    <div>e |--0--| (Mi)</div>
                    <div>B |--1--| (Do)</div>
                    <div>G |--0--| (Sol)</div>
                    <div>D |--2--| (Mi)</div>
                    <div>A |--3--| (Do)</div>
                    <div>E |--X--| (no tocar)</div>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    SOL Mayor (G)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>En partitura:</strong> SOL-SI-RE-SOL-SI-SOL
                  </Typography>
                  <Box sx={{ fontFamily: 'monospace', fontSize: { xs: '0.75rem', md: '0.9rem' }, lineHeight: 1.4, background: 'rgba(0,0,0,0.05)', p: 1, borderRadius: 1 }}>
                    <div>e |--3--| (Sol)</div>
                    <div>B |--0--| (Si)</div>
                    <div>G |--0--| (Sol)</div>
                    <div>D |--0--| (Re)</div>
                    <div>A |--2--| (Si)</div>
                    <div>E |--3--| (Sol)</div>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    RE Mayor (D)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>En partitura:</strong> RE-LA-RE-FA#
                  </Typography>
                  <Box sx={{ fontFamily: 'monospace', fontSize: { xs: '0.75rem', md: '0.9rem' }, lineHeight: 1.4, background: 'rgba(0,0,0,0.05)', p: 1, borderRadius: 1 }}>
                    <div>e |--2--| (Fa#)</div>
                    <div>B |--3--| (Re)</div>
                    <div>G |--2--| (La)</div>
                    <div>D |--0--| (Re)</div>
                    <div>A |--X--| (no tocar)</div>
                    <div>E |--X--| (no tocar)</div>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#6366f1' }}>
            Lectura de Ritmo en Partitura
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <Typography variant="body1" gutterBottom>
              Combinar partitura y tablatura para ritmo y posiciÃ³n:
            </Typography>
            <Box sx={{ textAlign: 'center', my: 3, fontFamily: 'monospace', fontSize: { xs: '0.85rem', md: '1rem' }, background: 'rgba(0,0,0,0.05)', p: 2, borderRadius: 1 }}>
              <div>Partitura: â™© â™© â™« â™« â™© (ritmo)</div>
              <div>Tablatura: 0 3 2-0 2-0 3 (posiciÃ³n)</div>
              <div>Tiempo:   1 2 3-e 4-e 1</div>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              La partitura indica CUÃNDO tocar, la tablatura indica DÃ“NDE tocar
            </Typography>
          </Paper>
        </Box>
      ),
    },
    {
      id: 'guitar-intermediate-1',
      title: 'Escalas en Partitura y Tablatura',
      level: 'Intermedio',
      description: 'Aprende a leer escalas combinando ambos sistemas de notaciÃ³n',
      duration: '55 min',
      topics: 7,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#ec4899' }}>
            Escala de DO Mayor
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(219, 39, 119, 0.05) 100%)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
            <Typography variant="body1" gutterBottom>
              La escala más básica, sin alteraciones (sostenidos o bemoles):
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  En partitura (notas):
                </Typography>
                <Typography>DO - RE - MI - FA - SOL - LA - SI - DO</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Todas las notas naturales, sin alteraciones
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  En tablatura (posiciÃ³n abierta):
                </Typography>
                <Box sx={{ fontFamily: 'monospace', fontSize: { xs: '0.75rem', md: '0.9rem' }, background: 'rgba(0,0,0,0.05)', p: 2, borderRadius: 1 }}>
                  <div>e |--0--1--3--|</div>
                  <div>B |--1--3-----|</div>
                  <div>G |--0--2-----|</div>
                  <div>D |--0--2--3--|</div>
                  <div>A |--0--2--3--|</div>
                  <div>E |--0--1--3--|</div>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#10b981' }}>
            Alteraciones en Partitura
          </Typography>
          <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <Typography variant="body1" gutterBottom>
              SÃ­mbolos que modifican las notas:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Sostenido (#)
                  </Typography>
                  <Typography variant="body2">â€¢ Sube la nota medio tono</Typography>
                  <Typography variant="body2">â€¢ FA# = traste 2 (cuerda E)</Typography>
                  <Typography variant="body2">â€¢ DO# = traste 4 (cuerda A)</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Bemol (â™­)
                  </Typography>
                  <Typography variant="body2">â€¢ Baja la nota medio tono</Typography>
                  <Typography variant="body2">â€¢ SIâ™­ = traste 1 (cuerda A)</Typography>
                  <Typography variant="body2">â€¢ MIâ™­ = traste 1 (cuerda D)</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 2, background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Becuadro (â™®)
                  </Typography>
                  <Typography variant="body2">â€¢ Cancela alteraciones</Typography>
                  <Typography variant="body2">â€¢ Vuelve a la nota natural</Typography>
                  <Typography variant="body2">â€¢ FAâ™® despuÃ©s de FA#</Typography>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ),
    },
    {
      id: 'guitar-techniques',
      title: 'Técnicas de Guitarra',
      level: 'Intermedio',
      description: 'Domina las técnicas esenciales de ambas manos y técnicas avanzadas',
      duration: '90 min',
      topics: 5,
      content: (
        <Box>
          {/* Técnicas de Mano Izquierda */}
          <Accordion
            sx={{
              mb: 2,
              background: 'rgba(236, 72, 153, 0.05)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '8px !important',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#ec4899' }} />}
              sx={{
                background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.03) 100%)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ec4899' }}>
                1. Técnicas de la Mano Izquierda (Mano del Diapasón)
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
              <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
                Estas técnicas se encargan de la articulación y la expresión de las notas.
              </Typography>
              
              <Stack spacing={2}>
                <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>
                    Hammer-on (Ligado ascendente)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Golpear una cuerda con un dedo de la mano izquierda para que suene la nota sin necesidad de volver a pulsar con la derecha.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#ec4899', mb: 1, display: 'block' }}>
                      Ejemplo: Hammer-on de traste 5 a 7
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----5h7---------|  (h = hammer-on)</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Toca el traste 5, luego golpea el 7 sin pulsar de nuevo
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>
                    Pull-off (Ligado descendente)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Retirar un dedo de una nota pulsada "pellizcando" ligeramente para que suene una nota que estÃ¡ en un traste inferior.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#ec4899', mb: 1, display: 'block' }}>
                      Ejemplo: Pull-off de traste 7 a 5
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----7p5---------|  (p = pull-off)</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Toca el traste 7, luego retira el dedo "pellizcando" la cuerda
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>
                    Slide (Glissando)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Deslizar un dedo de un traste a otro sin despegarlo de la cuerda, manteniendo el sonido.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#ec4899', mb: 1, display: 'block' }}>
                      Ejemplo: Slide ascendente y descendente
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----5/7--7\5----|  (/ = slide up, \ = slide down)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ MantÃ©n la presiÃ³n mientras deslizas el dedo por el diapasÃ³n
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>
                    Bending (Estiramiento)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Estirar la cuerda hacia arriba o hacia abajo para elevar el tono de la nota (muy comÃºn en el Blues y Rock).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#ec4899', mb: 1, display: 'block' }}>
                      Ejemplo: Bend de 1 tono completo
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----7b9---------|  (b = bend, 9 = tono objetivo)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Toca el traste 7 y estira la cuerda hasta que suene como el traste 9
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>
                    Vibrato
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Oscilar rápidamente la presión o posición del dedo sobre la nota para crear una variación rítmica en el tono, dándole "vida" al sonido.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#ec4899', mb: 1, display: 'block' }}>
                      Ejemplo: Vibrato en nota sostenida
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----7~----------|  (~ = vibrato)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Oscila el dedo hacia arriba y abajo rÃ¡pidamente mientras sostienes la nota
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ec4899' }}>
                    Hammer-on from nowhere
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Hacer sonar una nota golpeando el traste directamente, sin que la cuerda estuviera sonando previamente.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#ec4899', mb: 1, display: 'block' }}>
                      Ejemplo: Hammer-on desde el silencio
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----^7----------|  (^ = hammer desde silencio)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Golpea el traste 7 con fuerza sin pulsar previamente con la mano derecha
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Técnicas de Mano Derecha */}
          <Accordion
            sx={{
              mb: 2,
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '8px !important',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#10b981' }} />}
              sx={{
                background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981' }}>
                2. Técnicas de la Mano Derecha (Púa o Dedos)
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
              <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
                Determinan el ataque, el ritmo y la velocidad.
              </Typography>
              
              <Stack spacing={2}>
                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Alternate Picking (Púa alternada)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Movimiento constante de la púa hacia abajo y hacia arriba. Es la base de la velocidad.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Escala cromÃ¡tica con pÃºa alternada
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----5-6-7-8-----|  â†“ â†‘ â†“ â†‘ (direcciÃ³n de pÃºa)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Alterna constantemente: abajo-arriba-abajo-arriba
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Downpicking
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Tocar solo hacia abajo. Produce un sonido más agresivo y uniforme (clásico del Thrash Metal y Punk).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Riff de power chord
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----------------|</div>
                    <div>D |-----5-5-5-5-----|  â†“ â†“ â†“ â†“ (solo hacia abajo)</div>
                    <div>A |-----5-5-5-5-----|</div>
                    <div>E |-----3-3-3-3-----|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Todas las notas con pÃºa hacia abajo para sonido potente
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Sweep Picking (Barrido)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Deslizar la púa a través de varias cuerdas en un solo movimiento (como si fuera un acorde lento) pero articulando notas individuales. Se usa para arpegios a gran velocidad.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Arpegio de Am (La menor)
                    </Typography>
                    <div>e |-----8-----------|  â†“</div>
                    <div>B |---5-------------|  â†“</div>
                    <div>G |-5---------------|  â†“ (un movimiento continuo)</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Desliza la pÃºa en un solo movimiento fluido a travÃ©s de las cuerdas
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Economy Picking
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Una mezcla de púa alternada y barrido para minimizar el movimiento.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Cambio de cuerda eficiente
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----5-7---------|  â†“ â†‘</div>
                    <div>G |---5-7-----------|  â†“ â†“ (continÃºa hacia abajo)</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Al cambiar de cuerda, continÃºa en la misma direcciÃ³n
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Tremolo Picking
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Púa alternada extremadamente rápida sobre una sola nota.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Tremolo en nota sostenida
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----7â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ------|  (â‰ˆ = tremolo rÃ¡pido)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Alterna la pÃºa lo mÃ¡s rÃ¡pido posible en una sola nota
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Fingerpicking / Fingerstyle
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Tocar las cuerdas directamente con los dedos y uÃ±as, permitiendo tocar bajos y melodÃ­as simultÃ¡neamente.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: PatrÃ³n bÃ¡sico de fingerpicking
                    </Typography>
                    <div>e |-----0-------0---|  (a = anular)</div>
                    <div>B |---1-------1-----|  (m = medio)</div>
                    <div>G |-0-------0-------|  (i = Ã­ndice)</div>
                    <div>D |-----------------|</div>
                    <div>A |-3-------3-------|  (p = pulgar)</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ p-i-m-a: pulgar toca bajos, dedos tocan melodÃ­a
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Hybrid Picking
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Tocar con la púa (sujetada por el pulgar e índice) y usar los dedos medio y anular para pulsar otras cuerdas.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Lick de country
                    </Typography>
                    <div>e |-----7-----------|  (m = dedo medio)</div>
                    <div>B |---5-------------|  (pÃºa)</div>
                    <div>G |-5---------------|  (pÃºa)</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ PÃºa para cuerdas graves, dedos para agudas simultÃ¡neamente
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#10b981' }}>
                    Rasgueado
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Técnica flamenca donde se despliegan los dedos de la mano derecha rítmicamente sobre las cuerdas.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#10b981', mb: 1, display: 'block' }}>
                      Ejemplo: Rasgueado flamenco bÃ¡sico
                    </Typography>
                    <div>e |â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ|</div>
                    <div>B |â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ|  (a-m-i-p secuencia rÃ¡pida)</div>
                    <div>G |â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ|</div>
                    <div>D |â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ|</div>
                    <div>A |â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ|</div>
                    <div>E |â‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆâ‰ˆ|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Despliega los dedos rÃ­tmicamente: anular-medio-Ã­ndice-pulgar
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Técnicas de Control de Dinámica */}
          <Accordion
            sx={{
              mb: 2,
              background: 'rgba(245, 158, 11, 0.05)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '8px !important',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#f59e0b' }} />}
              sx={{
                background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.03) 100%)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>
                3. Técnicas de Control de Dinámica y Tono
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
              <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
                Modifican el carácter de la nota.
              </Typography>
              
              <Stack spacing={2}>
                <Paper sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#f59e0b' }}>
                    Palm Mute
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Apoyar ligeramente el lateral de la palma de la mano derecha sobre el puente para "ahogar" el sonido de las cuerdas, creando un efecto percusivo.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#f59e0b', mb: 1, display: 'block' }}>
                      Ejemplo: Riff con palm mute
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |--0-0-0-0-3-5----|  (PM = palm mute)</div>
                    <div>E |--0-0-0-0-3-5----|</div>
                    <div>    PM..........</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Apoya la palma cerca del puente para sonido "ahogado"
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#f59e0b' }}>
                    Fret Mute (Notas muertas)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Colocar los dedos de la mano izquierda sobre las cuerdas sin presionar los trastes para que, al tocar, suene un golpe seco sin tono (clÃ¡sico del Funk).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#f59e0b', mb: 1, display: 'block' }}>
                      Ejemplo: Groove funk con notas muertas
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----------------|</div>
                    <div>D |--x-x-5-x-x-5----|  (x = nota muerta)</div>
                    <div>A |--x-x-5-x-x-5----|</div>
                    <div>E |--x-x-3-x-x-3----|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Toca las cuerdas sin presionar para sonido percusivo
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#f59e0b' }}>
                    Pinch Harmonic (ArmÃ³nico de pÃºa)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Rozar la cuerda con el pulgar de la mano derecha inmediatamente despuÃ©s de herirla con la pÃºa para producir un chillido agudo.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#f59e0b', mb: 1, display: 'block' }}>
                      Ejemplo: Lick con pinch harmonics
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----7(PH)-------|  (PH = pinch harmonic)</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Roza la cuerda con el pulgar justo despuÃ©s de tocarla
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#f59e0b' }}>
                    Volume Swell
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Tocar una nota con el volumen en cero y subirlo rÃ¡pidamente con el potenciÃ³metro de la guitarra o un pedal para eliminar el ataque inicial (suena como un violÃ­n).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#f59e0b', mb: 1, display: 'block' }}>
                      Ejemplo: Acorde con volume swell
                    </Typography>
                    <div>e |-----0{'<'}----------|  ({'<'} = swell, volumen sube)</div>
                    <div>B |-----1{'<'}----------|</div>
                    <div>G |-----0{'<'}----------|</div>
                    <div>D |-----2{'<'}----------|</div>
                    <div>A |-----3{'<'}----------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Toca con volumen en 0, luego sube rÃ¡pidamente
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Técnicas Avanzadas */}
          <Accordion
            sx={{
              mb: 2,
              background: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '8px !important',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#6366f1' }} />}
              sx={{
                background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6366f1' }}>
                4. Técnicas Avanzadas y Modernas
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
              <Stack spacing={2}>
                <Paper sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#6366f1' }}>
                    Tapping
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Golpear las cuerdas con los dedos de la mano derecha en el diapasÃ³n. Puede ser de una mano o Eight-finger tapping (usando todos los dedos).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#6366f1', mb: 1, display: 'block' }}>
                      Ejemplo: Lick de tapping estilo Van Halen
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |--12t-5h8p5------|  (t = tap con mano derecha)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Tap traste 12 con mano derecha, luego hammer-on y pull-off
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#6366f1' }}>
                    Legato
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    CombinaciÃ³n fluida de hammer-ons y pull-offs para que el sonido sea suave y sin el ataque de la pÃºa.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#6366f1', mb: 1, display: 'block' }}>
                      Ejemplo: Frase legato fluida
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |--5h7h8p7p5------|  (solo una pulsada inicial)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Pulsa solo la primera nota, el resto con hammer-ons y pull-offs
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#6366f1' }}>
                    Slap & Pop
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    TÃ©cnica heredada del bajo; golpear las cuerdas con el pulgar y tirar de ellas con el Ã­ndice.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#6366f1', mb: 1, display: 'block' }}>
                      Ejemplo: Groove con slap y pop
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |-----5p----------|  (p = pop, tirar con Ã­ndice)</div>
                    <div>D |--5s-------------|  (s = slap, golpear con pulgar)</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Golpea con pulgar (slap) y tira con Ã­ndice (pop)
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#6366f1' }}>
                    Percussive Guitar
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Golpear el cuerpo de la guitarra (tapa armÃ³nica, aros) para imitar sonidos de baterÃ­a mientras se toca (muy comÃºn en guitarra acÃºstica moderna).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#6366f1', mb: 1, display: 'block' }}>
                      Ejemplo: PatrÃ³n percusivo con melodÃ­a
                    </Typography>
                    <div>e |--0---X---0---X--|  (X = golpe en cuerpo)</div>
                    <div>B |--1---X---1---X--|</div>
                    <div>G |--0---X---0---X--|</div>
                    <div>D |--2---X---2---X--|</div>
                    <div>A |--3---X---3---X--|</div>
                    <div>E |-----X-------X---|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Alterna entre notas y golpes percusivos en el cuerpo
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#6366f1' }}>
                    Chicken Picking
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    TÃ©cnica de country que suena como el cloqueo de una gallina, usando dedos y pÃºa con muteos agresivos.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#6366f1', mb: 1, display: 'block' }}>
                      Ejemplo: Lick de chicken picking
                    </Typography>
                    <div>e |--7-x-7-x-5------|  (x = mute, pÃºa + dedos)</div>
                    <div>B |-----------------|</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Alterna notas con muteos agresivos usando pÃºa y dedos
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Técnicas con Accesorios */}
          <Accordion
            sx={{
              mb: 2,
              background: 'rgba(139, 92, 246, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '8px !important',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#8b5cf6' }} />}
              sx={{
                background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 100%)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#8b5cf6' }}>
                5. Técnicas con Accesorios
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
              <Stack spacing={2}>
                <Paper sx={{ p: 2, background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#8b5cf6' }}>
                    Slide Guitar (Bottleneck)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Usar un tubo de metal o vidrio en un dedo para deslizarse por las cuerdas sin presionar los trastes, logrando sonidos microtonales.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#8b5cf6', mb: 1, display: 'block' }}>
                      Ejemplo: Lick de blues con slide
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----------------|</div>
                    <div>G |--/5---/7---/9---|  (/ = slide con bottleneck)</div>
                    <div>D |--/5---/7---/9---|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Desliza el bottleneck sobre los trastes sin presionar
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#8b5cf6' }}>
                    Palanca de TrÃ©molo (Whammy Bar)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Usar la barra metÃ¡lica del puente para variar la tensiÃ³n de las cuerdas (Dive bombs, vibratos exagerados).
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#8b5cf6', mb: 1, display: 'block' }}>
                      Ejemplo: Dive bomb y vibrato
                    </Typography>
                    <div>e |-----------------|</div>
                    <div>B |-----7-dip-------|  (dip = dive bomb)</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Toca la nota y baja la palanca para efecto de caÃ­da
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#8b5cf6' }}>
                    E-Bow
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                    Un accesorio electrÃ³nico que crea un campo magnÃ©tico para hacer vibrar la cuerda indefinidamente, creando un sustain infinito.
                  </Typography>
                  <Box sx={{ background: 'rgba(255,255,255,0.15)', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.9rem', color: '#ffffff' }}>
                    <Typography variant="caption" sx={{ color: '#8b5cf6', mb: 1, display: 'block' }}>
                      Ejemplo: MelodÃ­a con sustain infinito
                    </Typography>
                    <div>e |--7âˆž---9âˆž---12âˆž--|  (âˆž = sustain infinito con E-Bow)</div>
                    <div>B |-----------------|</div>
                    <div>G |-----------------|</div>
                    <div>D |-----------------|</div>
                    <div>A |-----------------|</div>
                    <div>E |-----------------|</div>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1, display: 'block' }}>
                      ðŸ’¡ Coloca el E-Bow sobre la cuerda para sustain continuo
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
        color: '#ffffff',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Fade in timeout={500}>
          <Breadcrumbs
            sx={{
              mb: 3,
              '& .MuiBreadcrumbs-separator': { color: 'rgba(255,255,255,0.5)' },
            }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Home sx={{ fontSize: 18 }} />
              Inicio
            </Link>
            <Link href="/lessons" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <School sx={{ fontSize: 18 }} />
              Cursos
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#ec4899' }}>
              <MusicNote sx={{ fontSize: 18 }} />
              Guitarra
            </Box>
          </Breadcrumbs>
        </Fade>

        {/* Header */}
        <Slide direction="down" in timeout={700}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4)',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <MusicNote sx={{ fontSize: { xs: 48, md: 60 }, color: '#fff' }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #ffffff 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Lecciones de Guitarra
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Aprende a leer tablatura y partitura, domina acordes y escalas con nuestras lecciones progresivas
            </Typography>
          </Box>
        </Slide>

        {/* Lessons */}
        <Box>
          {guitarLessons.map((lesson, index) => {
            const levelStyle = getLevelColor(lesson.level);
            const isExpanded = expandedLesson === lesson.id;
            
            return (
              <Fade in timeout={800 + index * 150} key={lesson.id}>
                <Card
                  sx={{
                    mb: 3,
                    background: isExpanded 
                      ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 63, 94, 0.08) 100%)'
                      : 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(20px)',
                    border: isExpanded 
                      ? '2px solid rgba(236, 72, 153, 0.4)'
                      : '2px solid rgba(255,255,255,0.08)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      border: '2px solid rgba(236, 72, 153, 0.3)',
                      boxShadow: '0 20px 60px rgba(236, 72, 153, 0.15)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #ec4899 0%, #f43f5e 100%)',
                      opacity: isExpanded ? 1 : 0,
                      transition: 'opacity 0.3s',
                    },
                  }}
                >
                  {/* Header */}
                  <Box
                    onClick={() => handleToggle(lesson.id)}
                    sx={{
                      p: { xs: 3, md: 4 },
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      flexWrap: 'wrap',
                      '&:hover': {
                        background: 'rgba(236, 72, 153, 0.05)',
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: { xs: 60, md: 70 },
                        height: { xs: 60, md: 70 },
                        minWidth: { xs: 60, md: 70 },
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(236, 72, 153, 0.3)',
                        transition: 'all 0.3s ease',
                        transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <MusicNote sx={{ fontSize: { xs: 32, md: 40 }, color: '#fff' }} />
                    </Box>

                    {/* Content */}
                    <Box sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: '300px' } }}>
                      <Stack direction="row" spacing={1} alignItems="center" mb={1} flexWrap="wrap">
                        <Chip
                          label={lesson.level}
                          size="small"
                          sx={{
                            bgcolor: levelStyle.bg,
                            color: levelStyle.color,
                            border: `1px solid ${levelStyle.border}`,
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            height: 24,
                          }}
                        />
                        <Chip
                          label={`${lesson.topics} temas`}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(139, 92, 246, 0.15)',
                            color: '#8b5cf6',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            height: 22,
                          }}
                        />
                        <Chip
                          label={lesson.duration}
                          size="small"
                          icon={<MusicNote sx={{ fontSize: 14 }} />}
                          sx={{
                            bgcolor: 'rgba(236, 72, 153, 0.15)',
                            color: '#ec4899',
                            border: '1px solid rgba(236, 72, 153, 0.3)',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            height: 22,
                          }}
                        />
                      </Stack>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#fff',
                          mb: 1,
                          fontSize: { xs: '1.2rem', md: '1.4rem' },
                        }}
                      >
                        {lesson.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                      >
                        {lesson.description}
                      </Typography>
                    </Box>

                    {/* Actions */}
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<PlayArrow />}
                        sx={{
                          borderRadius: '50px',
                          px: 3,
                          py: 1,
                          background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          boxShadow: '0 4px 16px rgba(236, 72, 153, 0.3)',
                          '&:hover': {
                            boxShadow: '0 6px 24px rgba(236, 72, 153, 0.4)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Estudiar
                      </Button>
                      <IconButton
                        sx={{
                          color: '#ec4899',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                    </Stack>
                  </Box>

                  {/* Expanded Content */}
                  <Collapse in={isExpanded} timeout={400}>
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                        pt: 0,
                        background: 'rgba(0,0,0,0.2)',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      {lesson.content}
                    </Box>
                  </Collapse>
                </Card>
              </Fade>
            );
          })}
        </Box>

        {/* CTA */}
        <Fade in timeout={1500}>
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
            }}
          >
            <MusicNote sx={{ fontSize: 48, color: '#ec4899', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Â¿Listo para practicar?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
              Comienza tu sesiÃ³n de prÃ¡ctica y aplica lo que has aprendido
            </Typography>
            <Button
              component={Link}
              href="/dashboard/practice"
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                fontWeight: 700,
                boxShadow: '0 10px 40px rgba(236, 72, 153, 0.4)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 50px rgba(236, 72, 153, 0.5)',
                },
              }}
            >
              Iniciar PrÃ¡ctica
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}



