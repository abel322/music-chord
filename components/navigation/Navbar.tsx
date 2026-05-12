'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useScrollTrigger,
  Slide,
  Fade,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  MusicNote,
  School,
  KeyboardArrowDown,
  Login,
  PersonAdd,
  Piano,
  GraphicEq,
  Album,
  LibraryMusic,
  Equalizer,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

interface Props {
  window?: () => Window;
}

function HideOnScroll(props: Props & { children: React.ReactElement }) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesAnchor, setCoursesAnchor] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCoursesClick = (event: React.MouseEvent<HTMLElement>) => {
    setCoursesAnchor(event.currentTarget);
  };

  const handleCoursesClose = () => {
    setCoursesAnchor(null);
  };

  const courses = [
    { name: 'Piano', icon: <Piano sx={{ fontSize: 20 }} />, href: '/lessons/piano', color: '#6366f1' },
    { name: 'Guitarra', icon: <MusicNote sx={{ fontSize: 20 }} />, href: '/lessons/guitar', color: '#ec4899' },
    { name: 'Batería', icon: <Album sx={{ fontSize: 20 }} />, href: '/lessons/drums', color: '#f59e0b' },
    { name: 'Bajo', icon: <GraphicEq sx={{ fontSize: 20 }} />, href: '/lessons/bass', color: '#10b981' },
    { name: 'Sonido Profesional', icon: <Equalizer sx={{ fontSize: 20 }} />, href: '/lessons/mixing', color: '#06b6d4' },
    { name: 'Todos los Cursos', icon: <LibraryMusic sx={{ fontSize: 20 }} />, href: '/lessons', color: '#8b5cf6' },
  ];

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Cursos', href: '/lessons', dropdown: true },
    { name: 'Características', href: '/#features' },
    { name: 'Testimonios', href: '/#testimonials' },
  ];

  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MusicNote sx={{ fontSize: 24, color: '#fff' }} />
          </Box>
          <Box>
            <Box sx={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>MusicPractice</Box>
            <Box sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)' }}>Tu academia musical</Box>
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2, py: 3 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(99, 102, 241, 0.1)',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: pathname === item.href ? 700 : 500,
                  color: pathname === item.href ? '#818cf8' : '#fff',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        
        {/* Cursos en móvil */}
        <Box sx={{ mt: 3, mb: 2, px: 2 }}>
          <Box sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', mb: 1, fontWeight: 700 }}>
            CURSOS POR INSTRUMENTO
          </Box>
        </Box>
        {courses.map((course) => (
          <ListItem key={course.name} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              href={course.href}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                py: 1.2,
                '&:hover': {
                  bgcolor: `${course.color}20`,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: course.color }}>
                {course.icon}
                <ListItemText
                  primary={course.name}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}

        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            <ThemeToggle />
          </Box>
          <Button
            component={Link}
            href="/login"
            variant="outlined"
            fullWidth
            startIcon={<Login />}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: '50px',
              py: 1.3,
              borderColor: 'rgba(255,255,255,0.3)',
              color: '#fff',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#fff',
                bgcolor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Iniciar Sesión
          </Button>
          <Button
            component={Link}
            href="/register"
            variant="contained"
            fullWidth
            startIcon={<PersonAdd />}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: '50px',
              py: 1.3,
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              fontWeight: 700,
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            }}
          >
            Registrarse
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled
              ? 'rgba(10, 14, 39, 0.95)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1 }}>
              {/* Logo */}
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  color: '#fff',
                  flexGrow: { xs: 1, md: 0 },
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 40, md: 44 },
                    height: { xs: 40, md: 44 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                    animation: 'pulse 3s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)' },
                      '50%': { boxShadow: '0 4px 30px rgba(236, 72, 153, 0.6)' },
                    },
                  }}
                >
                  <MusicNote sx={{ fontSize: { xs: 24, md: 28 }, color: '#fff' }} />
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Box sx={{ fontWeight: 900, fontSize: { sm: '1.2rem', md: '1.3rem' }, lineHeight: 1 }}>
                    MusicPractice
                  </Box>
                  <Box sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    Tu academia musical
                  </Box>
                </Box>
              </Box>

              {/* Desktop Navigation */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  item.dropdown ? (
                    <Box key={item.name}>
                      <Button
                        onClick={handleCoursesClick}
                        endIcon={<KeyboardArrowDown />}
                        sx={{
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          px: 2.5,
                          py: 1,
                          borderRadius: '50px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(99, 102, 241, 0.15)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      key={item.name}
                      component={Link}
                      href={item.href}
                      sx={{
                        color: pathname === item.href ? '#818cf8' : '#fff',
                        fontWeight: pathname === item.href ? 700 : 600,
                        fontSize: '0.95rem',
                        px: 2.5,
                        py: 1,
                        borderRadius: '50px',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(99, 102, 241, 0.15)',
                          transform: 'translateY(-2px)',
                        },
                        '&::after': pathname === item.href ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '60%',
                          height: 2,
                          background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
                          borderRadius: 1,
                        } : {},
                      }}
                    >
                      {item.name}
                    </Button>
                  )
                ))}
              </Box>

              {/* Desktop Auth Buttons */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                <ThemeToggle />
                <Button
                  component={Link}
                  href="/login"
                  variant="outlined"
                  startIcon={<Login sx={{ fontSize: 18 }} />}
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#fff',
                      bgcolor: 'rgba(255,255,255,0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  component={Link}
                  href="/register"
                  variant="contained"
                  startIcon={<PersonAdd sx={{ fontSize: 18 }} />}
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 6px 30px rgba(99, 102, 241, 0.5)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Registrarse
                </Button>
              </Box>

              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: 'none' },
                  color: '#fff',
                  bgcolor: 'rgba(99, 102, 241, 0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.3)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Courses Dropdown Menu */}
      <Menu
        anchorEl={coursesAnchor}
        open={Boolean(coursesAnchor)}
        onClose={handleCoursesClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 280,
            background: 'rgba(10, 14, 39, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: 3,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <School sx={{ fontSize: 20, color: '#818cf8' }} />
            <Box sx={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Cursos Disponibles</Box>
          </Box>
          <Box sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            Elige tu instrumento favorito
          </Box>
        </Box>
        {courses.map((course, idx) => (
          <MenuItem
            key={course.name}
            component={Link}
            href={course.href}
            onClick={handleCoursesClose}
            sx={{
              py: 1.5,
              px: 2.5,
              color: '#fff',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.3s ease ${idx * 0.05}s both`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(10px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              '&:hover': {
                bgcolor: `${course.color}20`,
                transform: 'translateX(8px)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: `${course.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: course.color,
                }}
              >
                {course.icon}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{course.name}</Box>
              </Box>
              {course.name === 'Todos los Cursos' && (
                <Chip
                  label="Ver todo"
                  size="small"
                  sx={{
                    bgcolor: `${course.color}30`,
                    color: course.color,
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    height: 22,
                  }}
                />
              )}
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer */}
      <Toolbar />
    </>
  );
}
