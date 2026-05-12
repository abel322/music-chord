'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Paper, 
  Card,
  Stack,
  Chip,
  Avatar,
  Rating,
} from '@mui/material';
import {
  PlayArrow,
  MusicNote,
  Piano,
  GraphicEq,
  Headphones,
  School,
  TrendingUp,
  Speed,
  CheckCircle,
  Star,
  Album,
  Audiotrack,
  LibraryMusic,
  EmojiEvents,
} from '@mui/icons-material';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
          color: '#ffffff',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
      {/* Elementos decorativos animados */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          animation: 'float 20s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(50px, 50px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />

      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: { xs: 6, sm: 10, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Chip
                label="🎵 Plataforma Todo-en-Uno"
                sx={{
                  mb: { xs: 2, md: 3 },
                  bgcolor: 'rgba(99, 102, 241, 0.15)',
                  color: '#818cf8',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
                  height: { xs: 28, md: 36 },
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem', lg: '6rem' },
                  lineHeight: 1.1,
                  mb: { xs: 2, md: 3 },
                  background: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Domina Cualquier Instrumento
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.75)',
                  mb: { xs: 3, md: 5 },
                  fontWeight: 400,
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.4rem', lg: '1.6rem' },
                }}
              >
                La plataforma definitiva para músicos. Aprende piano, guitarra, batería y bajo con 
                lecciones interactivas, seguimiento de progreso y herramientas profesionales.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 2, md: 3 }} sx={{ mb: { xs: 3, md: 5 } }}>
                <Button
                  component={Link}
                  href="/register"
                  variant="contained"
                  size="large"
                  endIcon={<PlayArrow sx={{ fontSize: { xs: 20, md: 28 } }} />}
                  sx={{
                    borderRadius: '50px',
                    px: { xs: 3, sm: 4, md: 6 },
                    py: { xs: 1.3, sm: 1.6, md: 2 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem' },
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)',
                    transition: 'all 0.3s ease',
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: '200px', md: '240px' },
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 50px rgba(99, 102, 241, 0.5)',
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
                    px: { xs: 3, sm: 4, md: 6 },
                    py: { xs: 1.3, sm: 1.6, md: 2 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem' },
                    fontWeight: 700,
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: 2,
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: '200px', md: '240px' },
                    '&:hover': {
                      borderColor: '#fff',
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Stack>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 5 }} 
                sx={{ 
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                <Box>
                  <Typography variant="h4" fontWeight="800" color="#6366f1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' } }}>
                    10K+
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.6)" sx={{ fontSize: { xs: '0.8rem', sm: '0.95rem', md: '1.1rem' } }}>
                    Músicos Activos
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight="800" color="#ec4899" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' } }}>
                    500+
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.6)" sx={{ fontSize: { xs: '0.8rem', sm: '0.95rem', md: '1.1rem' } }}>
                    Lecciones
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight="800" color="#10b981" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' } }}>
                    4.9★
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.6)" sx={{ fontSize: { xs: '0.8rem', sm: '0.95rem', md: '1.1rem' } }}>
                    Valoración
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                height: { md: '600px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'fadeIn 1.5s ease-out',
                '@keyframes fadeIn': {
                  from: { opacity: 0 },
                  to: { opacity: 1 },
                },
              }}
            >
              {/* Dashboard Preview */}
              <Paper
                elevation={24}
                sx={{
                  width: '90%',
                  height: '85%',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(30, 30, 50, 0.9) 0%, rgba(20, 20, 35, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(99, 102, 241, 0.3)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(99, 102, 241, 0.2)',
                  p: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)',
                  },
                }}
              >
                {/* Window Controls */}
                <Stack direction="row" spacing={1} mb={3}>
                  <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                  <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                  <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#27c93f' }} />
                </Stack>

                {/* Dashboard Content */}
                <Grid container spacing={2} sx={{ height: 'calc(100% - 40px)' }}>
                  <Grid item xs={4}>
                    <Stack spacing={2} sx={{ height: '100%' }}>
                      {[Piano, GraphicEq, Album, Audiotrack].map((Icon, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            bgcolor: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: 2,
                            p: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                          }}
                        >
                          <Icon sx={{ fontSize: 20, color: '#818cf8' }} />
                          <Box sx={{ width: '60%', height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }} />
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={8}>
                    <Stack spacing={2} sx={{ height: '100%' }}>
                      <Box
                        sx={{
                          height: '45%',
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                          borderRadius: 3,
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          p: 2,
                        }}
                      >
                        <Box sx={{ width: '40%', height: 10, bgcolor: 'rgba(255,255,255,0.3)', borderRadius: 1, mb: 2 }} />
                        <Box sx={{ width: '70%', height: 8, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1, mb: 1 }} />
                        <Box sx={{ width: '60%', height: 8, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />
                      </Box>
                      <Box
                        sx={{
                          height: '55%',
                          bgcolor: 'rgba(255,255,255,0.03)',
                          borderRadius: 3,
                          border: '1px solid rgba(255,255,255,0.1)',
                          p: 2,
                        }}
                      >
                        <Grid container spacing={1}>
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Grid item xs={6} key={i}>
                              <Box sx={{ height: 40, bgcolor: 'rgba(99, 102, 241, 0.1)', borderRadius: 1.5 }} />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Instrumentos Section */}
      <Box sx={{ bgcolor: 'rgba(0,0,0,0.3)', py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, px: { xs: 2, sm: 0 } }}>
            <Typography
              variant="overline"
              sx={{
                color: '#818cf8',
                letterSpacing: 3,
                fontWeight: 700,
                fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.05rem' },
              }}
            >
              INSTRUMENTOS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 2,
                mb: 2,
                fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3.5rem', lg: '4rem' },
              }}
            >
              Aprende a Tu Ritmo
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255,255,255,0.6)', 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.3rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Domina múltiples instrumentos con lecciones estructuradas y ejercicios progresivos
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {[
              {
                icon: <Piano sx={{ fontSize: { xs: 50, md: 70 } }} />,
                title: 'Piano',
                desc: 'Desde escalas básicas hasta piezas clásicas complejas',
                color: '#6366f1',
                gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                features: ['88 teclas virtuales', 'Teoría musical', 'Partituras interactivas'],
              },
              {
                icon: <MusicNote sx={{ fontSize: { xs: 50, md: 70 } }} />,
                title: 'Guitarra',
                desc: 'Acordes, escalas y técnicas de fingerpicking',
                color: '#ec4899',
                gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                features: ['Tablaturas', 'Afinador integrado', 'Biblioteca de acordes'],
              },
              {
                icon: <Album sx={{ fontSize: { xs: 50, md: 70 } }} />,
                title: 'Batería',
                desc: 'Ritmos, rudimentos y coordinación avanzada',
                color: '#f59e0b',
                gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                features: ['Metrónomo', 'Patrones rítmicos', 'Ejercicios de técnica'],
              },
              {
                icon: <GraphicEq sx={{ fontSize: { xs: 50, md: 70 } }} />,
                title: 'Bajo',
                desc: 'Líneas de bajo, slap y técnicas de groove',
                color: '#10b981',
                gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                features: ['Walking bass', 'Slap & Pop', 'Teoría armónica'],
              },
            ].map((instrument, idx) => (
              <Grid item xs={12} sm={6} lg={3} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '320px', sm: '380px', md: '450px' },
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid rgba(255,255,255,0.08)`,
                    borderRadius: { xs: 3, md: 4 },
                    p: { xs: 2.5, sm: 3, md: 4 },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: { xs: 'translateY(-4px)', md: 'translateY(-12px)' },
                      border: `2px solid ${instrument.color}`,
                      boxShadow: `0 20px 60px ${instrument.color}40`,
                      '& .icon-box': {
                        background: instrument.gradient,
                        transform: { xs: 'scale(1.05)', md: 'scale(1.1) rotate(5deg)' },
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
                      width: { xs: 60, sm: 70, md: 90 },
                      height: { xs: 60, sm: 70, md: 90 },
                      borderRadius: { xs: 2, md: 3 },
                      background: `${instrument.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: instrument.color,
                      mb: { xs: 2, md: 3 },
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {instrument.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    fontWeight="700" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.6rem' } }}
                  >
                    {instrument.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.6)', 
                      mb: { xs: 2, md: 3 }, 
                      lineHeight: 1.7,
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' }
                    }}
                  >
                    {instrument.desc}
                  </Typography>
                  <Stack spacing={1}>
                    {instrument.features.map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: instrument.color }} />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* DAW & Producción Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 280, sm: 330, md: 450 },
                borderRadius: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                border: '2px solid rgba(99, 102, 241, 0.2)',
                p: { xs: 2.5, sm: 3, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Stack spacing={{ xs: 2, md: 3 }}>
                {[
                  { label: 'Ableton Live', value: 85 },
                  { label: 'FL Studio', value: 92 },
                  { label: 'Logic Pro', value: 78 },
                  { label: 'Pro Tools', value: 88 },
                ].map((daw, idx) => (
                  <Box key={idx}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography 
                        variant="body2" 
                        fontWeight="600"
                        sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.15rem' } }}
                      >
                        {daw.label}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="rgba(255,255,255,0.6)"
                        sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.15rem' } }}
                      >
                        {daw.value}%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: { xs: 6, sm: 8, md: 12 },
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${daw.value}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
                          borderRadius: 1,
                          animation: 'slideIn 1.5s ease-out',
                          '@keyframes slideIn': {
                            from: { width: 0 },
                            to: { width: `${daw.value}%` },
                          },
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box sx={{ px: { xs: 2, sm: 0 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#818cf8',
                  letterSpacing: 3,
                  fontWeight: 700,
                  fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.05rem' },
                }}
              >
                PRODUCCIÓN MUSICAL
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mt: 2,
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3.5rem', lg: '4rem' },
                }}
              >
                Integración con DAWs
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  mb: { xs: 3, md: 4 }, 
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.3rem' }
                }}
              >
                Conecta tu práctica con las herramientas profesionales de producción musical. 
                Aprende a usar los DAWs más populares y lleva tus composiciones al siguiente nivel.
              </Typography>
              <Stack spacing={{ xs: 1.5, md: 2 }}>
                {[
                  { icon: <Headphones />, title: 'Mezcla y Masterización', desc: 'Técnicas profesionales de audio' },
                  { icon: <Audiotrack />, title: 'MIDI & Secuenciación', desc: 'Programación y edición avanzada' },
                  { icon: <LibraryMusic />, title: 'Biblioteca de Samples', desc: 'Miles de sonidos y loops' },
                ].map((feature, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      gap: { xs: 1.5, sm: 2 },
                      p: { xs: 1.5, sm: 2, md: 2.5 },
                      borderRadius: 2,
                      bgcolor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        transform: { xs: 'translateX(4px)', md: 'translateX(8px)' },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, sm: 44, md: 56 },
                        height: { xs: 40, sm: 44, md: 56 },
                        minWidth: { xs: 40, sm: 44, md: 56 },
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          fontSize: { xs: 20, sm: 22, md: 28 },
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight="700"
                        sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.35rem' } }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="rgba(255,255,255,0.6)"
                        sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1.05rem' } }}
                      >
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Cursos y Lecciones Section */}
      <Box sx={{ bgcolor: 'rgba(0,0,0,0.3)', py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, px: { xs: 2, sm: 0 } }}>
            <Typography
              variant="overline"
              sx={{
                color: '#818cf8',
                letterSpacing: 3,
                fontWeight: 700,
                fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.05rem' },
              }}
            >
              EDUCACIÓN
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 2,
                mb: 2,
                fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3.5rem', lg: '4rem' },
              }}
            >
              Cursos Estructurados
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255,255,255,0.6)', 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.3rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Programas completos diseñados por músicos profesionales
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {[
              {
                title: 'Fundamentos de Teoría Musical',
                level: 'Principiante',
                duration: '8 semanas',
                lessons: 32,
                rating: 4.9,
                students: '12.5K',
                color: '#6366f1',
                topics: ['Escalas', 'Acordes', 'Ritmo', 'Armonía'],
              },
              {
                title: 'Técnica Avanzada de Piano',
                level: 'Avanzado',
                duration: '12 semanas',
                lessons: 48,
                rating: 4.8,
                students: '8.3K',
                color: '#ec4899',
                topics: ['Digitación', 'Velocidad', 'Expresión', 'Repertorio'],
              },
              {
                title: 'Producción Musical Moderna',
                level: 'Intermedio',
                duration: '10 semanas',
                lessons: 40,
                rating: 5.0,
                students: '15.2K',
                color: '#10b981',
                topics: ['Mezcla', 'Mastering', 'Síntesis', 'Sampling'],
              },
            ].map((course, idx) => (
              <Grid item xs={12} sm={6} lg={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '420px', sm: '480px', md: '550px' },
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.08)',
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: { xs: 'translateY(-4px)', md: 'translateY(-8px)' },
                      border: `2px solid ${course.color}`,
                      boxShadow: `0 20px 60px ${course.color}40`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 140, sm: 160, md: 200 },
                      background: `linear-gradient(135deg, ${course.color}40 0%, ${course.color}20 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <School sx={{ fontSize: { xs: 60, sm: 70, md: 90 }, color: course.color, opacity: 0.3 }} />
                    <Chip
                      label={course.level}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: { xs: 12, md: 16 },
                        right: { xs: 12, md: 16 },
                        bgcolor: course.color,
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' },
                        height: { xs: 24, md: 28 },
                      }}
                    />
                  </Box>
                  <Box sx={{ p: { xs: 2.5, sm: 3, md: 3.5 } }}>
                    <Typography 
                      variant="h5" 
                      fontWeight="700" 
                      gutterBottom
                      sx={{ fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' } }}
                    >
                      {course.title}
                    </Typography>
                    <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Star sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: '#fbbf24' }} />
                        <Typography 
                          variant="body2" 
                          fontWeight="600"
                          sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' } }}
                        >
                          {course.rating}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        color="rgba(255,255,255,0.6)"
                        sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' } }}
                      >
                        {course.students} estudiantes
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={3} mb={3}>
                      <Box>
                        <Typography 
                          variant="caption" 
                          color="rgba(255,255,255,0.5)"
                          sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' } }}
                        >
                          Duración
                        </Typography>
                        <Typography 
                          variant="body2" 
                          fontWeight="600"
                          sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' } }}
                        >
                          {course.duration}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography 
                          variant="caption" 
                          color="rgba(255,255,255,0.5)"
                          sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' } }}
                        >
                          Lecciones
                        </Typography>
                        <Typography 
                          variant="body2" 
                          fontWeight="600"
                          sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' } }}
                        >
                          {course.lessons}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        variant="caption" 
                        color="rgba(255,255,255,0.5)" 
                        gutterBottom
                        sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' } }}
                      >
                        Temas principales:
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mt={1}>
                        {course.topics.map((topic, i) => (
                          <Chip
                            key={i}
                            label={topic}
                            size="small"
                            sx={{
                              bgcolor: `${course.color}20`,
                              color: course.color,
                              border: `1px solid ${course.color}40`,
                              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' },
                              height: { xs: 24, md: 28 },
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderColor: course.color,
                        color: course.color,
                        fontWeight: 700,
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' },
                        py: { xs: 1, sm: 1.2, md: 1.4 },
                        '&:hover': {
                          borderColor: course.color,
                          bgcolor: `${course.color}20`,
                        },
                      }}
                    >
                      Ver Curso
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="xl" id="features" sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, px: { xs: 2, sm: 0 } }}>
          <Typography
            variant="overline"
            sx={{
              color: '#818cf8',
              letterSpacing: 3,
              fontWeight: 700,
              fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.05rem' },
            }}
          >
            CARACTERÍSTICAS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mt: 2,
              mb: 2,
              fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3.5rem', lg: '4rem' },
            }}
          >
            Todo lo que Necesitas
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {[
            {
              icon: <TrendingUp fontSize="large" />,
              title: 'Seguimiento de Progreso',
              desc: 'Visualiza tu evolución con gráficos detallados y estadísticas en tiempo real',
              color: '#6366f1',
            },
            {
              icon: <Speed fontSize="large" />,
              title: 'Práctica Inteligente',
              desc: 'Algoritmos que adaptan los ejercicios a tu nivel y objetivos',
              color: '#ec4899',
            },
            {
              icon: <EmojiEvents fontSize="large" />,
              title: 'Sistema de Logros',
              desc: 'Mantén la motivación con metas, desafíos y recompensas',
              color: '#f59e0b',
            },
            {
              icon: <LibraryMusic fontSize="large" />,
              title: 'Biblioteca Extensa',
              desc: 'Miles de partituras, ejercicios y recursos educativos',
              color: '#10b981',
            },
          ].map((feature, idx) => (
            <Grid item xs={12} sm={6} lg={3} key={idx}>
              <Box
                sx={{
                  p: { xs: 3, sm: 3, md: 4 },
                  height: '100%',
                  minHeight: { xs: 'auto', md: '280px' },
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'translateY(-4px)', md: 'translateY(-8px)' },
                    '& .feature-icon': {
                      transform: { xs: 'scale(1.1)', md: 'scale(1.2) rotate(5deg)' },
                      color: feature.color,
                    },
                  },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: { xs: 60, sm: 70, md: 90 },
                    height: { xs: 60, sm: 70, md: 90 },
                    borderRadius: '50%',
                    background: `${feature.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: feature.color,
                    mx: 'auto',
                    mb: { xs: 2, md: 3 },
                    transition: 'all 0.3s ease',
                    '& svg': {
                      fontSize: { xs: 32, sm: 36, md: 48 },
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  fontWeight="700" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.4rem' } }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="rgba(255,255,255,0.6)" 
                  sx={{ 
                    lineHeight: 1.7,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' }
                  }}
                >
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box id="testimonials" sx={{ bgcolor: 'rgba(0,0,0,0.3)', py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, px: { xs: 2, sm: 0 } }}>
            <Typography
              variant="overline"
              sx={{
                color: '#818cf8',
                letterSpacing: 3,
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '0.95rem' },
              }}
            >
              TESTIMONIOS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              }}
            >
              Lo Que Dicen Nuestros Usuarios
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 3, md: 4 }}>
            {[
              {
                name: 'María González',
                role: 'Pianista Profesional',
                avatar: 'M',
                rating: 5,
                text: 'Esta plataforma transformó completamente mi forma de practicar. El seguimiento de progreso es increíble.',
                color: '#6366f1',
              },
              {
                name: 'Carlos Ruiz',
                role: 'Productor Musical',
                avatar: 'C',
                rating: 5,
                text: 'Las lecciones de producción son de nivel profesional. He mejorado mis mezclas significativamente.',
                color: '#ec4899',
              },
              {
                name: 'Ana Martínez',
                role: 'Estudiante de Guitarra',
                avatar: 'A',
                rating: 5,
                text: 'Aprender guitarra nunca fue tan fácil. Los ejercicios progresivos son perfectos para principiantes.',
                color: '#10b981',
              },
            ].map((testimonial, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    p: { xs: 3, sm: 3, md: 4 },
                    height: '100%',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.08)',
                    borderRadius: { xs: 3, md: 4 },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: `2px solid ${testimonial.color}`,
                      transform: { xs: 'translateY(-2px)', md: 'translateY(-4px)' },
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} mb={2}>
                    <Avatar
                      sx={{
                        width: { xs: 48, sm: 52, md: 56 },
                        height: { xs: 48, sm: 52, md: 56 },
                        bgcolor: testimonial.color,
                        fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' },
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight="700"
                        sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="rgba(255,255,255,0.6)"
                        sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    sx={{ 
                      mb: 2,
                      '& .MuiRating-icon': {
                        fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }
                      }
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      lineHeight: 1.8,
                      fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' }
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Final */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, sm: 5, md: 8 },
            borderRadius: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            border: '2px solid rgba(99, 102, 241, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem', lg: '4.5rem' },
            }}
          >
            Comienza Tu Viaje Musical Hoy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              mb: { xs: 3, md: 5 },
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.3rem' },
              px: { xs: 2, sm: 0 }
            }}
          >
            Únete a miles de músicos que ya están mejorando sus habilidades. 
            Prueba gratis durante 14 días, sin tarjeta de crédito.
          </Typography>
          <Button
            component={Link}
            href="/register"
            variant="contained"
            size="large"
            endIcon={<PlayArrow sx={{ fontSize: { xs: 20, md: 28 } }} />}
            sx={{
              borderRadius: '50px',
              px: { xs: 4, sm: 5, md: 7 },
              py: { xs: 1.8, sm: 2, md: 2.5 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              boxShadow: '0 10px 40px rgba(99, 102, 241, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: { xs: 'translateY(-2px) scale(1.02)', md: 'translateY(-3px) scale(1.05)' },
                boxShadow: '0 15px 50px rgba(99, 102, 241, 0.6)',
              },
            }}
          >
            Empezar Ahora Gratis
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          py: 6,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="700" gutterBottom>
                MusicPractice
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.6)" sx={{ mb: 2 }}>
                La plataforma definitiva para músicos que buscan la excelencia.
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" fontWeight="700" gutterBottom>
                Producto
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Características
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Precios
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Cursos
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" fontWeight="700" gutterBottom>
                Recursos
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Blog
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Tutoriales
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Soporte
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" fontWeight="700" gutterBottom>
                Compañía
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Sobre Nosotros
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Contacto
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Privacidad
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" fontWeight="700" gutterBottom>
                Social
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Twitter
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  Instagram
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                  YouTube
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <Typography variant="body2" color="rgba(255,255,255,0.5)">
              © 2024 MusicPractice. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
    </>
  );
}
