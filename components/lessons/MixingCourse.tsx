'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Card,
  Breadcrumbs,
  Fade,
  Stack,
} from '@mui/material';
import {
  ExpandMore,
  GraphicEq,
  Home,
  School,
  CheckCircle,
} from '@mui/icons-material';
import Link from 'next/link';
import { mixingCourseData } from './mixingCourseData';

export default function MixingCourse() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#06b6d4' }}>
            <GraphicEq sx={{ fontSize: 18 }} />
            Sonido Profesional
          </Box>
        </Breadcrumbs>
      </Fade>

      {/* Header */}
      <Fade in timeout={700}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box
            sx={{
              width: { xs: 80, md: 100 },
              height: { xs: 80, md: 100 },
              borderRadius: 3,
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)',
            }}
          >
            <GraphicEq sx={{ fontSize: { xs: 48, md: 60 }, color: '#fff' }} />
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            El Arte de la Mezcla
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '900px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            Guía visual para mezcla, ingeniería y producción musical profesional
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
            }}
          >
            Basado en los conceptos de "The Art of Mixing" de David Gibson
          </Typography>
        </Box>
      </Fade>

      {/* Course Sections */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {mixingCourseData.map((section, index) => (
          <Fade in timeout={800 + index * 100} key={section.id}>
            <Accordion
              expanded={expanded === section.id}
              onChange={handleChange(section.id)}
              sx={{
                mb: 2,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.08)',
                borderRadius: '16px !important',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  border: `2px solid ${section.color}`,
                  boxShadow: `0 8px 32px ${section.color}40`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: section.color }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Chip
                    label={section.id}
                    sx={{
                      bgcolor: `${section.color}20`,
                      color: section.color,
                      fontWeight: 700,
                      fontSize: '1rem',
                      minWidth: 45,
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#fff',
                        mb: 0.5,
                        fontSize: { xs: '1.1rem', md: '1.4rem' },
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                      }}
                    >
                      {section.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, pb: 4, px: { xs: 2, md: 4 } }}>
                <Box>
                  {/* Intro */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      mb: 4,
                      lineHeight: 1.8,
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      borderLeft: `4px solid ${section.color}`,
                      pl: 3,
                      py: 2,
                      background: `${section.color}10`,
                      borderRadius: 2,
                    }}
                  >
                    {section.description.intro}
                  </Typography>

                  {/* Fundamentals */}
                  {section.description.fundamentals?.map((fundamental, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        mb: 3,
                        p: 3,
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: section.color,
                          mb: 2,
                          fontSize: '1.2rem',
                        }}
                      >
                        {fundamental.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {fundamental.content}
                      </Typography>
                      <Stack spacing={2}>
                        {fundamental.points.map((point, pointIdx) => (
                          <Box key={pointIdx} sx={{ display: 'flex', gap: 2 }}>
                            <CheckCircle sx={{ fontSize: 20, color: section.color, mt: 0.3, flexShrink: 0 }} />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  fontWeight: 700,
                                  color: '#fff',
                                  mb: 0.5,
                                }}
                              >
                                {point.label}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'rgba(255,255,255,0.6)',
                                  lineHeight: 1.6,
                                }}
                              >
                                {point.text}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Card>
                  ))}

                  {/* Sections */}
                  {section.description.sections?.map((sec, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        mb: 3,
                        p: 3,
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: section.color,
                          mb: 2,
                          fontSize: '1.2rem',
                        }}
                      >
                        {sec.title}
                      </Typography>
                      {sec.content && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            mb: 3,
                            lineHeight: 1.7,
                          }}
                        >
                          {sec.content}
                        </Typography>
                      )}
                      <Stack spacing={2}>
                        {sec.points?.map((point, pointIdx) => (
                          <Box key={pointIdx} sx={{ display: 'flex', gap: 2 }}>
                            <CheckCircle sx={{ fontSize: 20, color: section.color, mt: 0.3, flexShrink: 0 }} />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  fontWeight: 700,
                                  color: '#fff',
                                  mb: 0.5,
                                }}
                              >
                                {point.label}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'rgba(255,255,255,0.6)',
                                  lineHeight: 1.6,
                                }}
                              >
                                {point.text}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Card>
                  ))}

                  {/* Concepts */}
                  {section.description.concepts?.map((concept, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        mb: 3,
                        p: 3,
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: section.color,
                          mb: 2,
                          fontSize: '1.2rem',
                        }}
                      >
                        {concept.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {concept.content}
                      </Typography>
                      <Stack spacing={2}>
                        {concept.examples?.map((example, exIdx) => (
                          <Box
                            key={exIdx}
                            sx={{
                              p: 2,
                              background: `${section.color}10`,
                              borderRadius: 2,
                              borderLeft: `3px solid ${section.color}`,
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 700,
                                color: '#fff',
                                mb: 0.5,
                              }}
                            >
                              {example.element || example.ratio}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: section.color,
                                fontWeight: 600,
                                mb: 0.5,
                              }}
                            >
                              {example.position || example.description}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '0.9rem',
                              }}
                            >
                              {example.reason}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Card>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Fade>
        ))}
      </Box>
    </Box>
  );
}
