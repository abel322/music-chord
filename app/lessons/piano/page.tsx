'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, Chip, Card, Stack, Fade, Slide, Button, Breadcrumbs, IconButton, Collapse } from '@mui/material';
import { Piano, PlayArrow, Home, School, MusicNote, KeyboardArrowDown } from '@mui/icons-material';
import Link from 'next/link';
import { pianoLessonsData } from './pianoLessonsData';

export default function PianoLessonsPage() {
  const [expandedLesson, setExpandedLesson] = useState<string | false>(false);

  const handleToggle = (lessonId: string) => {
    setExpandedLesson(expandedLesson === lessonId ? false : lessonId);
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, any> = {
      'Principiante': { bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', border: '#22c55e' },
      'Básico': { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '#10b981' },
      'Intermedio': { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '#f59e0b' },
      'Avanzado': { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '#ef4444' },
      'Profesional': { bg: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', border: '#a855f7' },
    };
    return colors[level] || { bg: 'rgba(107, 114, 128, 0.15)', color: '#6b7280', border: '#6b7280' };
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)', color: '#ffffff', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Fade in timeout={500}>
          <Breadcrumbs sx={{ mb: 3, '& .MuiBreadcrumbs-separator': { color: 'rgba(255,255,255,0.5)' } }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Home sx={{ fontSize: 18 }} />
              Inicio
            </Link>
            <Link href="/lessons" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <School sx={{ fontSize: 18 }} />
              Cursos
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6366f1' }}>
              <Piano sx={{ fontSize: 18 }} />
              Piano
            </Box>
          </Breadcrumbs>
        </Fade>

        <Slide direction="down" in timeout={700}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box sx={{ width: { xs: 80, md: 100 }, height: { xs: 80, md: 100 }, borderRadius: 3, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.4)', animation: 'float 3s ease-in-out infinite', '@keyframes float': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } } }}>
              <Piano sx={{ fontSize: { xs: 48, md: 60 }, color: '#fff' }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, background: 'linear-gradient(135deg, #ffffff 0%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Piano: De Principiante a Profesional
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', mx: 'auto', fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Un camino completo y estructurado desde los fundamentos hasta la interpretación profesional. Aprende técnica, teoría, armonía y expresión musical.
            </Typography>
          </Box>
        </Slide>

        <Fade in timeout={900}>
          <Box sx={{ mb: 6, p: { xs: 3, md: 4 }, borderRadius: 4, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)', border: '2px solid rgba(99, 102, 241, 0.3)' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: '#6366f1' }}>
              🎯 Tu Camino de Aprendizaje
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
              <Card sx={{ p: 2, background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#22c55e', fontWeight: 'bold', mb: 1 }}>Nivel 1-2</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Fundamentos y Lectura</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>5-7 meses</Typography>
              </Card>
              <Card sx={{ p: 2, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#f59e0b', fontWeight: 'bold', mb: 1 }}>Nivel 3-4</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Técnica y Armonía</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>10-14 meses</Typography>
              </Card>
              <Card sx={{ p: 2, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#ef4444', fontWeight: 'bold', mb: 1 }}>Nivel 5-6</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Repertorio e Interpretación</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>14-24 meses</Typography>
              </Card>
              <Card sx={{ p: 2, background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#a855f7', fontWeight: 'bold', mb: 1 }}>Nivel 7-8</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Maestría Profesional</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>14-22 meses</Typography>
              </Card>
            </Box>
            <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
              💡 Tiempo total estimado: 3-5 años de práctica dedicada para alcanzar nivel profesional
            </Typography>
          </Box>
        </Fade>

        <Box>
          {pianoLessonsData.map((lesson, index) => {
            const levelStyle = getLevelColor(lesson.level);
            const isExpanded = expandedLesson === lesson.id;
            
            return (
              <Fade in timeout={800 + index * 150} key={lesson.id}>
                <Card sx={{ mb: 3, background: isExpanded ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)' : 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: isExpanded ? '2px solid rgba(99, 102, 241, 0.4)' : '2px solid rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', '&:hover': { transform: 'translateY(-4px)', border: '2px solid rgba(99, 102, 241, 0.3)', boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)' }, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)', opacity: isExpanded ? 1 : 0, transition: 'opacity 0.3s' } }}>
                  <Box onClick={() => handleToggle(lesson.id)} sx={{ p: { xs: 3, md: 4 }, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', '&:hover': { background: 'rgba(99, 102, 241, 0.05)' } }}>
                    <Box sx={{ width: { xs: 60, md: 70 }, height: { xs: 60, md: 70 }, minWidth: { xs: 60, md: 70 }, borderRadius: 3, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)', transition: 'all 0.3s ease', transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }}>
                      <Piano sx={{ fontSize: { xs: 32, md: 40 }, color: '#fff' }} />
                    </Box>

                    <Box sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: '300px' } }}>
                      <Stack direction="row" spacing={1} alignItems="center" mb={1} flexWrap="wrap">
                        <Chip label={lesson.level} size="small" sx={{ bgcolor: levelStyle.bg, color: levelStyle.color, border: `1px solid ${levelStyle.border}`, fontWeight: 700, fontSize: '0.75rem', height: 24 }} />
                        <Chip label={`${lesson.topics} temas`} size="small" sx={{ bgcolor: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.3)', fontWeight: 600, fontSize: '0.7rem', height: 22 }} />
                        <Chip label={lesson.duration} size="small" icon={<MusicNote sx={{ fontSize: 14 }} />} sx={{ bgcolor: 'rgba(99, 102, 241, 0.15)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.3)', fontWeight: 600, fontSize: '0.7rem', height: 22 }} />
                      </Stack>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', mb: 1, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                        {lesson.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        {lesson.description}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button variant="contained" size="small" startIcon={<PlayArrow />} sx={{ borderRadius: '50px', px: 3, py: 1, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', fontWeight: 700, fontSize: '0.85rem', boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)', '&:hover': { boxShadow: '0 6px 24px rgba(99, 102, 241, 0.4)', transform: 'translateY(-2px)' } }}>
                        Estudiar
                      </Button>
                      <IconButton sx={{ color: '#6366f1', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                        <KeyboardArrowDown />
                      </IconButton>
                    </Stack>
                  </Box>

                  <Collapse in={isExpanded} timeout={400}>
                    <Box sx={{ p: { xs: 3, md: 4 }, pt: 0, background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {lesson.content}
                    </Box>
                  </Collapse>
                </Card>
              </Fade>
            );
          })}
        </Box>

        <Fade in timeout={1500}>
          <Box sx={{ mt: 6, p: { xs: 3, md: 5 }, textAlign: 'center', borderRadius: 4, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            <MusicNote sx={{ fontSize: 48, color: '#6366f1', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              ¿Listo para practicar?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
              Comienza tu sesión de práctica y aplica lo que has aprendido
            </Typography>
            <Button component={Link} href="/dashboard/practice" variant="contained" size="large" startIcon={<PlayArrow />} sx={{ borderRadius: '50px', px: 4, py: 1.5, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', fontWeight: 700, boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 15px 50px rgba(99, 102, 241, 0.5)' } }}>
              Iniciar Práctica
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
