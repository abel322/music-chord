'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Fade,
  Slide,
  Button,
  Breadcrumbs,
  Card,
  Stack,
  Chip,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  GraphicEq,
  PlayArrow,
  Home,
  School,
  MusicNote,
  KeyboardArrowDown,
} from '@mui/icons-material';
import Link from 'next/link';
import BassLessons from '@/components/lessons/BassLessons';
import { bassPracticeBooks } from './bassPracticeBooks';

interface LessonCard {
  id: string;
  title: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  description: string;
  duration: string;
  topics: number;
}

export default function BassLessonsPage() {
  const [expandedLesson, setExpandedLesson] = useState<string | false>(false);

  const handleToggle = (lessonId: string) => {
    setExpandedLesson(expandedLesson === lessonId ? false : lessonId);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico': return { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '#10b981' };
      case 'Intermedio': return { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '#f59e0b' };
      case 'Avanzado': return { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '#ef4444' };
      default: return { bg: 'rgba(107, 114, 128, 0.15)', color: '#6b7280', border: '#6b7280' };
    }
  };

  const lessons: LessonCard[] = [
    {
      id: 'bass-practice-books',
      title: 'Biblioteca de Práctica Profesional',
      level: 'Básico',
      description: 'Colección completa de métodos especializados: Bass Fitness, Slap Bass, Funk & Disco',
      duration: 'Progresivo',
      topics: 10,
    },
    {
      id: 'bass-techniques',
      title: 'Técnicas de Bajo Eléctrico',
      level: 'Básico',
      description: 'Guía completa de técnicas desde fundamentos hasta nivel profesional',
      duration: '90 min',
      topics: 18,
    },
    {
      id: 'bass-1',
      title: 'Fundamentos del Bajo Eléctrico',
      level: 'Básico',
      description: 'Aprende la notación básica y técnicas fundamentales del bajo',
      duration: '40 min',
      topics: 5,
    },
    {
      id: 'bass-2',
      title: 'Walking Bass y Líneas Melódicas',
      level: 'Intermedio',
      description: 'Domina el arte del walking bass y construcción de líneas',
      duration: '50 min',
      topics: 6,
    },
    {
      id: 'bass-3',
      title: 'Slap & Pop Avanzado',
      level: 'Avanzado',
      description: 'Técnicas avanzadas de slap, pop y groove funky',
      duration: '60 min',
      topics: 8,
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#10b981' }}>
              <GraphicEq sx={{ fontSize: 18 }} />
              Bajo
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
                background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <GraphicEq sx={{ fontSize: { xs: 48, md: 60 }, color: '#fff' }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Bajo Eléctrico: Biblioteca Completa
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Métodos profesionales de Bass Fitness, Slap Bass, Funk & Disco. De principiante a nivel profesional con los mejores libros especializados.
            </Typography>
          </Box>
        </Slide>

        {/* Lessons Cards */}
        <Box sx={{ mb: 6 }}>
          {lessons.map((lesson, index) => {
            const levelStyle = getLevelColor(lesson.level);
            const isExpanded = expandedLesson === lesson.id;
            
            return (
              <Fade in timeout={800 + index * 150} key={lesson.id}>
                <Card
                  sx={{
                    mb: 3,
                    background: isExpanded 
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(20, 184, 166, 0.08) 100%)'
                      : 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(20px)',
                    border: isExpanded 
                      ? '2px solid rgba(16, 185, 129, 0.4)'
                      : '2px solid rgba(255,255,255,0.08)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      border: '2px solid rgba(16, 185, 129, 0.3)',
                      boxShadow: '0 20px 60px rgba(16, 185, 129, 0.15)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)',
                      opacity: isExpanded ? 1 : 0,
                      transition: 'opacity 0.3s',
                    },
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      flexWrap: 'wrap',
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: { xs: 60, md: 70 },
                        height: { xs: 60, md: 70 },
                        minWidth: { xs: 60, md: 70 },
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
                        transition: 'all 0.3s ease',
                        transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <GraphicEq sx={{ fontSize: { xs: 32, md: 40 }, color: '#fff' }} />
                    </Box>

                    {/* Content */}
                    <Box 
                      onClick={() => handleToggle(lesson.id)}
                      sx={{ 
                        flexGrow: 1, 
                        minWidth: { xs: '100%', sm: '300px' },
                        cursor: 'pointer',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    >
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
                            bgcolor: 'rgba(16, 185, 129, 0.15)',
                            color: '#10b981',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
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
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                      >
                        {lesson.description}
                      </Typography>
                    </Box>

                    {/* Actions */}
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        onClick={() => handleToggle(lesson.id)}
                        variant="contained"
                        size="small"
                        startIcon={<PlayArrow />}
                        sx={{
                          borderRadius: '50px',
                          px: 3,
                          py: 1,
                          background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
                          '&:hover': {
                            boxShadow: '0 6px 24px rgba(16, 185, 129, 0.4)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Estudiar
                      </Button>
                      <IconButton
                        onClick={() => handleToggle(lesson.id)}
                        sx={{
                          color: '#10b981',
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
                      {lesson.id === 'bass-practice-books' ? bassPracticeBooks.content : <BassLessons />}
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
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}
          >
            <MusicNote sx={{ fontSize: 48, color: '#10b981', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              ¿Listo para practicar?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
              Comienza tu sesión de práctica y aplica lo que has aprendido
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
                background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                fontWeight: 700,
                boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 50px rgba(16, 185, 129, 0.5)',
                },
              }}
            >
              Iniciar Práctica
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
