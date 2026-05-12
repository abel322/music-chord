'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Fade,
  Slide,
  Button,
  Breadcrumbs,
  Stack,
  Chip,
} from '@mui/material';
import {
  Piano,
  MusicNote,
  Album,
  GraphicEq,
  Home,
  School,
  PlayArrow,
  CheckCircle,
} from '@mui/icons-material';
import Link from 'next/link';

export default function LessonsPage() {
  const instruments = [
    {
      name: 'Piano',
      icon: <Piano sx={{ fontSize: { xs: 50, md: 70 } }} />,
      href: '/lessons/piano',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      description: 'Domina el piano desde escalas básicas hasta piezas clásicas complejas',
      lessons: 12,
      duration: '8 semanas',
      features: ['Pentagrama y claves', 'Figuras musicales', 'Acordes en partitura', 'Inversiones'],
    },
    {
      name: 'Guitarra',
      icon: <MusicNote sx={{ fontSize: { xs: 50, md: 70 } }} />,
      href: '/lessons/guitar',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      description: 'Aprende tablatura, acordes y técnicas de fingerpicking',
      lessons: 15,
      duration: '10 semanas',
      features: ['Tablatura vs Partitura', 'Acordes abiertos', 'Escalas', 'Alteraciones'],
    },
    {
      name: 'Batería',
      icon: <Album sx={{ fontSize: { xs: 50, md: 70 } }} />,
      href: '/lessons/drums',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      description: 'Ritmos, rudimentos y coordinación avanzada',
      lessons: 18,
      duration: '12 semanas',
      features: ['Notación percusiva', 'Grooves', 'Fills', 'Dinámicas'],
    },
    {
      name: 'Bajo',
      icon: <GraphicEq sx={{ fontSize: { xs: 50, md: 70 } }} />,
      href: '/lessons/bass',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
      description: 'Líneas de bajo, slap y técnicas de groove',
      lessons: 14,
      duration: '9 semanas',
      features: ['Walking bass', 'Slap & Pop', 'Teoría armónica', 'Groove'],
    },
    {
      name: 'Sonido Profesional',
      icon: <GraphicEq sx={{ fontSize: { xs: 50, md: 70 } }} />,
      href: '/lessons/mixing',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      description: 'Mezcla y producción musical: volumen, paneo, EQ y efectos',
      lessons: 20,
      duration: '14 semanas',
      features: ['Visualización 3D', 'EQ y Compresión', 'Efectos y Reverb', 'Mezcla profesional'],
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
      <Container maxWidth="xl">
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#8b5cf6' }}>
              <School sx={{ fontSize: 18 }} />
              Cursos
            </Box>
          </Breadcrumbs>
        </Fade>

        {/* Header */}
        <Slide direction="down" in timeout={700}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Box
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <School sx={{ fontSize: { xs: 48, md: 60 }, color: '#fff' }} />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
                background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cursos de Música
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.3rem' },
                lineHeight: 1.7,
              }}
            >
              Aprende a tocar tu instrumento favorito con lecciones estructuradas y contenido profesional
            </Typography>
          </Box>
        </Slide>

        {/* Instruments Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {instruments.slice(0, 4).map((instrument, index) => (
            <Grid item xs={12} sm={6} lg={3} key={instrument.name}>
              <Fade in timeout={800 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '420px', md: '500px' },
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.08)',
                    borderRadius: 4,
                    p: { xs: 3, md: 4 },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      border: `2px solid ${instrument.color}`,
                      boxShadow: `0 20px 60px ${instrument.color}40`,
                      '& .icon-box': {
                        background: instrument.gradient,
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: instrument.gradient,
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      width: { xs: 80, md: 100 },
                      height: { xs: 80, md: 100 },
                      borderRadius: 3,
                      background: `${instrument.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: instrument.color,
                      mb: 3,
                      mx: 'auto',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {instrument.icon}
                  </Box>

                  <Typography
                    variant="h4"
                    fontWeight="700"
                    gutterBottom
                    textAlign="center"
                    sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }}
                  >
                    {instrument.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      mb: 3,
                      lineHeight: 1.7,
                      textAlign: 'center',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {instrument.description}
                  </Typography>

                  <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
                    <Chip
                      label={`${instrument.lessons} lecciones`}
                      size="small"
                      sx={{
                        bgcolor: `${instrument.color}20`,
                        color: instrument.color,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                    <Chip
                      label={instrument.duration}
                      size="small"
                      sx={{
                        bgcolor: `${instrument.color}20`,
                        color: instrument.color,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Stack>

                  <Stack spacing={1} mb={3} sx={{ flexGrow: 1 }}>
                    {instrument.features.map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle sx={{ fontSize: 18, color: instrument.color }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem',
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    component={Link}
                    href={instrument.href}
                    variant="contained"
                    fullWidth
                    endIcon={<PlayArrow />}
                    sx={{
                      borderRadius: '50px',
                      py: 1.5,
                      background: instrument.gradient,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      boxShadow: `0 8px 24px ${instrument.color}40`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 32px ${instrument.color}60`,
                      },
                    }}
                  >
                    Ver Lecciones
                  </Button>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Featured Course - Sonido Profesional */}
        <Fade in timeout={1600}>
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  border: '2px solid #06b6d4',
                  boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                },
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={3}>
                  <Box
                    sx={{
                      width: { xs: 100, md: 120 },
                      height: { xs: 100, md: 120 },
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: { xs: 'auto', md: 0 },
                      boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)',
                    }}
                  >
                    <GraphicEq sx={{ fontSize: { xs: 60, md: 70 }, color: '#fff' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Chip
                    label="NUEVO CURSO"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(6, 182, 212, 0.2)',
                      color: '#06b6d4',
                      fontWeight: 700,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h3"
                    fontWeight="700"
                    gutterBottom
                    sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
                  >
                    Sonido Profesional
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                    }}
                  >
                    El Arte de la Mezcla
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      mb: 3,
                      lineHeight: 1.7,
                    }}
                  >
                    Aprende mezcla y producción musical profesional con visualización 3D del sonido. 
                    Domina volumen, paneo, EQ, compresión y efectos basados en "The Art of Mixing" de David Gibson.
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Chip
                      label="20 lecciones"
                      size="small"
                      sx={{
                        bgcolor: 'rgba(6, 182, 212, 0.2)',
                        color: '#06b6d4',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label="14 semanas"
                      size="small"
                      sx={{
                        bgcolor: 'rgba(6, 182, 212, 0.2)',
                        color: '#06b6d4',
                        fontWeight: 600,
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button
                    component={Link}
                    href="/lessons/mixing"
                    variant="contained"
                    fullWidth
                    endIcon={<PlayArrow />}
                    sx={{
                      borderRadius: '50px',
                      py: 1.8,
                      background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(6, 182, 212, 0.6)',
                      },
                    }}
                  >
                    Comenzar Curso
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Fade>
        <Fade in timeout={1500}>
          <Box
            sx={{
              mt: 10,
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              ¿Listo para comenzar tu viaje musical?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Regístrate gratis y accede a todas nuestras lecciones y herramientas de práctica
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/register"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: '50px',
                  px: 5,
                  py: 1.8,
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 15px 50px rgba(139, 92, 246, 0.5)',
                  },
                }}
              >
                Comenzar Gratis
              </Button>
              <Button
                component={Link}
                href="/login"
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: '50px',
                  px: 5,
                  py: 1.8,
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#fff',
                    borderWidth: 2,
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                Iniciar Sesión
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
