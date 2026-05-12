'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Grid,
  Stack,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { studyPathData } from './drumStudyPathData';
import { DrumNotationContent } from './drumNotationData';

interface DrumLessonsProps {
  lessonId?: string;
}

export default function DrumLessons({ lessonId }: DrumLessonsProps) {
  const [expandedSection, setExpandedSection] = useState<number | false>(false);
  const [expandedBook, setExpandedBook] = useState<string | false>(false);

  const handleSectionChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedSection(isExpanded ? panel : false);
  };

  const handleBookChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedBook(isExpanded ? panel : false);
  };

  // Si es la lección de notación, mostrar el contenido especial
  if (lessonId === 'drums-notacion-1') {
    return <DrumNotationContent />;
  }

  // Si no, mostrar el contenido de libros
  return (
    <Box>
      {studyPathData.map((section) => (
        <Accordion
          key={section.id}
          expanded={expandedSection === section.id}
          onChange={handleSectionChange(section.id)}
          sx={{
            mb: 2,
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)',
            border: `2px solid ${section.color}40`,
            borderRadius: '12px !important',
            overflow: 'hidden',
            '&:before': { display: 'none' },
          }}
        >

          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: section.color }} />}
            sx={{
              background: `linear-gradient(135deg, ${section.color}15 0%, ${section.color}05 100%)`,
              color: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', flexWrap: 'wrap' }}>
              <Chip
                label={`Paso ${section.id}`}
                sx={{
                  backgroundColor: section.color,
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: section.color }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {section.subtitle}
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.3)', color: '#fff' }}>
            <Paper
              sx={{
                p: 3,
                mb: 3,
                background: `linear-gradient(135deg, ${section.color}15 0%, ${section.color}05 100%)`,
                borderLeft: `4px solid ${section.color}`,
                borderRadius: 2,
              }}
            >
              {typeof section.description === 'string' ? (
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#fff' }}>{section.description}</Typography>
              ) : section.id === 1 ? (
                /* Contenido especial para Técnica de Manos */
                <Box>
                  {/* Introducción al Control de Rebotes */}
                  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                    {section.description.intro}
                  </Typography>

                  {/* Fundamentos del Control de Rebotes */}
                  <Stack spacing={4} sx={{ mb: 4 }}>
                    {section.description.fundamentals.map((fundamental: any, idx: number) => (
                      <Paper
                        key={idx}
                        sx={{
                          overflow: 'hidden',
                          background: 'rgba(255,255,255,0.05)',
                          border: `2px solid ${section.color}30`,
                          borderRadius: 2,
                        }}
                      >
                        <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                            {fundamental.title}
                          </Typography>
                        </Box>

                        <Box
                          component="img"
                          src={fundamental.image}
                          alt={fundamental.title}
                          sx={{
                            width: '100%',
                            height: 200,
                            objectFit: 'cover',
                          }}
                        />

                        <Box sx={{ p: 3 }}>
                          <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                            {fundamental.content}
                          </Typography>

                          <Stack spacing={2}>
                            {fundamental.points.map((point: any, i: number) => (
                              <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                                <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                  {point.label}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                  {point.text}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </Paper>
                    ))}
                  </Stack>

                  {/* Rutina de Práctica */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                      mb: 4,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.practiceRoutine.title}
                      </Typography>
                    </Box>

                    <Box
                      component="img"
                      src={section.description.practiceRoutine.image}
                      alt="Rutina de Práctica"
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                        {section.description.practiceRoutine.intro}
                      </Typography>

                      <Stack spacing={2}>
                        {section.description.practiceRoutine.exercises.map((exercise: any, i: number) => (
                          <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08`, borderLeft: `4px solid ${section.color}` }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: section.color, mb: 0.5 }}>
                              {exercise.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', mb: 0.5 }}>
                              {exercise.description}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                              Objetivo: {exercise.objective}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Paper>

                  {/* Tips de Oro */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                      mb: 4,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.proTips.title}
                      </Typography>
                    </Box>

                    <Box
                      component="img"
                      src={section.description.proTips.image}
                      alt="Tips de Oro"
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        {section.description.proTips.tips.map((tip: any, i: number) => (
                          <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                              💡 {tip.label}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                              {tip.text}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Paper>

                  {/* Introducción a Rudimentos */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 3, 
                      fontWeight: 700,
                      color: section.color,
                      fontSize: '1.5rem',
                      textAlign: 'center',
                      pb: 2,
                      borderBottom: `2px solid ${section.color}40`,
                    }}
                  >
                    🥁 Rudimentos
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)' }}>
                    {section.description.rudimentsIntro}
                  </Typography>
                  {section.description.sections?.map((subsection: any, idx: number) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        mt: 3,
                        p: 2.5,
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 2,
                        border: `1px solid ${section.color}30`,
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 2, 
                          fontWeight: 700,
                          color: section.color,
                          fontSize: '1.3rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        {subsection.title}
                      </Typography>
                      
                      {/* Si tiene intro (como Moeller) */}
                      {subsection.intro && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            mb: 2,
                            lineHeight: 1.7,
                            fontSize: '0.95rem',
                            color: 'rgba(255,255,255,0.85)',
                            fontStyle: 'italic',
                          }}
                        >
                          {subsection.intro}
                        </Typography>
                      )}
                      
                      {/* Contenido de subsecciones */}
                      {subsection.subsections && (
                        <Box sx={{ mt: 2 }}>
                          {subsection.subsections.map((sub: any, subIdx: number) => (
                            <Box key={subIdx} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
                              <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                  mb: 1.5,
                                  fontWeight: 600,
                                  color: 'rgba(255,255,255,0.95)',
                                  fontSize: '1rem',
                                }}
                              >
                                {sub.subtitle}
                              </Typography>
                              {sub.text && (
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    lineHeight: 1.7,
                                    fontSize: '0.95rem',
                                    color: 'rgba(255,255,255,0.85)',
                                    mb: 1,
                                  }}
                                >
                                  {sub.text}
                                </Typography>
                              )}
                              {sub.items && (
                                <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                                  {sub.items.map((item: string, itemIdx: number) => (
                                    <Box
                                      key={itemIdx}
                                      sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        mb: 1.5,
                                        '&:last-child': { mb: 0 },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 6,
                                          height: 6,
                                          borderRadius: '50%',
                                          bgcolor: section.color,
                                          mt: 1,
                                          mr: 1.5,
                                          flexShrink: 0,
                                        }}
                                      />
                                      <Typography 
                                        variant="body2" 
                                        sx={{ 
                                          lineHeight: 1.7,
                                          fontSize: '0.95rem',
                                          color: 'rgba(255,255,255,0.85)',
                                        }}
                                      >
                                        {item}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      )}
                      
                      {/* Items normales */}
                      {subsection.items && !subsection.subsections && (
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                          {subsection.items.map((item: string, itemIdx: number) => (
                            <Box
                              key={itemIdx}
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                mb: 1.5,
                                '&:last-child': { mb: 0 },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  bgcolor: section.color,
                                  mt: 1,
                                  mr: 1.5,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  lineHeight: 1.7,
                                  fontSize: '0.95rem',
                                  color: 'rgba(255,255,255,0.85)',
                                }}
                              >
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              ) : section.id === 2 ? (
                <Box>
                  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)' }}>
                    {section.description.intro}
                  </Typography>

                  {/* Pilares del Fraseo */}
                  <Stack spacing={4} sx={{ mb: 4 }}>
                    {section.description.sections.map((concept: any, idx: number) => (
                      <Paper
                        key={idx}
                        sx={{
                          overflow: 'hidden',
                          background: 'rgba(255,255,255,0.05)',
                          border: `2px solid ${section.color}30`,
                          borderRadius: 2,
                        }}
                      >
                        <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                            {concept.title}
                          </Typography>
                        </Box>

                        <Box
                          component="img"
                          src={concept.image}
                          alt={concept.title}
                          sx={{
                            width: '100%',
                            height: 200,
                            objectFit: 'cover',
                          }}
                        />

                        <Box sx={{ p: 3 }}>
                          <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                            {concept.content}
                          </Typography>

                          <Stack spacing={2}>
                            {concept.points.map((point: any, i: number) => (
                              <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                                <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                  {point.label}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                  {point.text}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </Paper>
                    ))}
                  </Stack>

                  {/* Ejercicio Práctico */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.exercise.title}
                      </Typography>
                    </Box>

                    <Box
                      component="img"
                      src={section.description.exercise.image}
                      alt="Ejercicio"
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                        {section.description.exercise.intro}
                      </Typography>

                      <Stack spacing={2} sx={{ mb: 3 }}>
                        {section.description.exercise.steps.map((step: any, i: number) => (
                          <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08`, borderLeft: `4px solid ${section.color}` }}>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                              {step.step}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                              {step.description}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>

                      <Box sx={{ p: 2, borderRadius: 1, background: `${section.color}15`, textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.95)' }}>
                          {section.description.exercise.conclusion}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              ) : section.id === 5 ? (
                /* Contenido especial para Polirritmias */
                <Box>
                  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                    {section.description.intro}
                  </Typography>

                  {/* Conceptos de Polirritmia */}
                  <Stack spacing={4} sx={{ mb: 4 }}>
                    {section.description.concepts.map((concept: any, idx: number) => (
                      <Paper
                        key={idx}
                        sx={{
                          overflow: 'hidden',
                          background: 'rgba(255,255,255,0.05)',
                          border: `2px solid ${section.color}30`,
                          borderRadius: 2,
                        }}
                      >
                        <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                            {concept.title}
                          </Typography>
                        </Box>

                        <Box sx={{ p: 3 }}>
                          <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                            {concept.content}
                          </Typography>

                          {/* Ejemplos de ratios */}
                          {concept.examples && (
                            <Stack spacing={2}>
                              {concept.examples.map((example: any, i: number) => (
                                <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08`, borderLeft: `4px solid ${section.color}` }}>
                                  <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                    {example.ratio}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                    {example.description}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          )}

                          {/* Puntos */}
                          {concept.points && (
                            <Stack spacing={2}>
                              {concept.points.map((point: any, i: number) => (
                                <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                                  <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                    {point.label}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                    {point.text}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          )}

                          {/* Tabla de frases mnemotécnicas */}
                          {concept.table && (
                            <Box sx={{ overflowX: 'auto', mt: 2 }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                  <tr style={{ borderBottom: `2px solid ${section.color}40` }}>
                                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Polirritmia</th>
                                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Frase Sugerida</th>
                                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Ritmo resultante</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {concept.table.map((row: any, i: number) => (
                                    <tr key={i} style={{ borderBottom: `1px solid ${section.color}20` }}>
                                      <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>{row.polyrhythm}</td>
                                      <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{row.phrase}</td>
                                      <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{row.rhythm}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </Box>
                          )}
                        </Box>
                      </Paper>
                    ))}
                  </Stack>

                  {/* Ejercicios de Práctica */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                      mb: 4,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.exercises.title}
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                        {section.description.exercises.intro}
                      </Typography>

                      <Stack spacing={3}>
                        {section.description.exercises.levels.map((level: any, i: number) => (
                          <Box key={i} sx={{ p: 3, borderRadius: 2, background: `${section.color}08`, border: `1px solid ${section.color}30` }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: section.color, mb: 2 }}>
                              {level.level}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0, mb: 2 }}>
                              {level.steps.map((step: string, j: number) => (
                                <Box key={j} component="li" sx={{ mb: 1, color: 'rgba(255,255,255,0.85)' }}>
                                  <Typography variant="body2">{step}</Typography>
                                </Box>
                              ))}
                            </Box>
                            <Box sx={{ p: 2, borderRadius: 1, background: `${section.color}15` }}>
                              <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                El reto:
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                {level.challenge}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Paper>

                  {/* Tips de Práctica */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.tips.title}
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Stack spacing={2} sx={{ mb: 3 }}>
                        {section.description.tips.advice.map((tip: any, i: number) => (
                          <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                              💡 {tip.label}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                              {tip.text}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>

                      <Box sx={{ p: 3, borderRadius: 2, background: `${section.color}15`, textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: section.color, mb: 1 }}>
                          🎯 Dato Pro
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', fontStyle: 'italic' }}>
                          {section.description.tips.proTip}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              ) : section.id === 6 ? (
                /* Contenido especial para Groove y Tiempo */
                <Box>
                  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)' }}>
                    {section.description.intro}
                  </Typography>

                  {/* Conceptos: Tiempo y Groove */}
                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    {section.description.sections.map((concept: any, idx: number) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <Paper
                          sx={{
                            overflow: 'hidden',
                            background: 'rgba(255,255,255,0.05)',
                            border: `2px solid ${section.color}30`,
                            borderRadius: 2,
                          }}
                        >
                          <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: section.color, mb: 1 }}>
                              {concept.title}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                              {concept.subtitle}
                            </Typography>
                          </Box>

                          <Box
                            component="img"
                            src={concept.image}
                            alt={concept.title}
                            sx={{
                              width: '100%',
                              height: 200,
                              objectFit: 'cover',
                            }}
                          />

                          <Box sx={{ p: 3 }}>
                            <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
                              {concept.content}
                            </Typography>

                            <Stack spacing={2}>
                              {concept.points.map((point: any, i: number) => (
                                <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                                  <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                    {point.label}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                    {point.text}
                                  </Typography>
                                  {point.subtypes && (
                                    <Box sx={{ mt: 1.5, ml: 2 }}>
                                      {point.subtypes.map((subtype: any, j: number) => (
                                        <Box key={j} sx={{ mb: 1 }}>
                                          <Typography variant="caption" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                                            • {subtype.name}
                                          </Typography>
                                          <Typography variant="caption" sx={{ display: 'block', ml: 2, color: 'rgba(255,255,255,0.7)' }}>
                                            {subtype.description}
                                          </Typography>
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Tabla comparativa */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                      mb: 4,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.comparison.title}
                      </Typography>
                    </Box>

                    <Box
                      component="img"
                      src={section.description.comparison.image}
                      alt="Comparación"
                      sx={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Box sx={{ overflowX: 'auto', mb: 3 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                          <thead>
                            <tr style={{ borderBottom: `2px solid ${section.color}40` }}>
                              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Concepto</th>
                              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Pregunta que responde</th>
                              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Se mide con...</th>
                              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Objetivo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.description.comparison.table.map((row: any, idx: number) => (
                              <tr key={idx} style={{ borderBottom: `1px solid ${section.color}20` }}>
                                <td style={{ padding: '12px' }}>
                                  <Chip
                                    label={row.concept}
                                    size="small"
                                    sx={{
                                      backgroundColor: idx === 0 ? '#3b82f6' : '#f59e0b',
                                      color: '#fff',
                                      fontWeight: 700,
                                    }}
                                  />
                                </td>
                                <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{row.question}</td>
                                <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{row.measurement}</td>
                                <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{row.objective}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </Box>

                      <Box sx={{ p: 2, borderRadius: 1, background: `${section.color}10` }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: section.color }}>
                          Un ejemplo famoso:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                          {section.description.comparison.example}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>

                  {/* Métodos de desarrollo */}
                  <Paper
                    sx={{
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      border: `2px solid ${section.color}30`,
                      borderRadius: 2,
                      mb: 4,
                    }}
                  >
                    <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                        {section.description.development.title}
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Grid container spacing={3} sx={{ mb: 3 }}>
                        {section.description.development.methods.map((method: any, idx: number) => (
                          <Grid item xs={12} md={6} key={idx}>
                            <Box
                              sx={{
                                p: 3,
                                borderRadius: 2,
                                border: `2px solid ${idx === 0 ? '#3b82f6' : '#f59e0b'}`,
                                background: 'rgba(255,255,255,0.02)',
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: 700,
                                  mb: 2,
                                  color: idx === 0 ? '#3b82f6' : '#f59e0b',
                                }}
                              >
                                {method.skill}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                                {method.practice}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>

                      <Box sx={{ p: 3, borderRadius: 2, background: `${section.color}10`, textAlign: 'center' }}>
                        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1, color: 'rgba(255,255,255,0.95)' }}>
                          "{section.description.development.quote.split(': "')[1]?.replace('"', '') || section.description.development.quote}"
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: section.color }}>
                          — Jeff Porcaro
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>

                  {/* Rutina de Aplicación */}
                  {section.description.practiceRoutine && (
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        background: 'rgba(255,255,255,0.05)',
                        border: `2px solid ${section.color}30`,
                        borderRadius: 2,
                        mb: 4,
                      }}
                    >
                      <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                          {section.description.practiceRoutine.title}
                        </Typography>
                      </Box>

                      <Box sx={{ p: 3 }}>
                        <Box sx={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                              <tr style={{ borderBottom: `2px solid ${section.color}40` }}>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Ejercicio</th>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Descripción</th>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: section.color }}>Objetivo</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.description.practiceRoutine.exercises.map((exercise: any, idx: number) => (
                                <tr key={idx} style={{ borderBottom: `1px solid ${section.color}20` }}>
                                  <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.95)', fontWeight: 700 }}>
                                    {exercise.name}
                                  </td>
                                  <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                                    {exercise.description}
                                  </td>
                                  <td style={{ padding: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                                    {exercise.objective}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Box>
                      </Box>
                    </Paper>
                  )}

                  {/* Tips de Oro */}
                  {section.description.goldTips && (
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        background: 'rgba(255,255,255,0.05)',
                        border: `2px solid ${section.color}30`,
                        borderRadius: 2,
                        mb: 4,
                      }}
                    >
                      <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: section.color }}>
                          {section.description.goldTips.title}
                        </Typography>
                      </Box>

                      <Box sx={{ p: 3 }}>
                        <Stack spacing={2} sx={{ mb: 3 }}>
                          {section.description.goldTips.tips.map((tip: any, i: number) => (
                            <Box key={i} sx={{ p: 2, borderRadius: 1, background: `${section.color}08` }}>
                              <Typography variant="caption" sx={{ fontWeight: 700, color: section.color, display: 'block', mb: 0.5 }}>
                                💎 {tip.label}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                {tip.text}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>

                        <Box sx={{ p: 3, borderRadius: 2, background: `${section.color}15`, textAlign: 'center' }}>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: section.color, mb: 1 }}>
                            🎯 Reflexión
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', fontStyle: 'italic' }}>
                            {section.description.goldTips.reflection}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  )}
                </Box>
              ) : (
                <Box>
                  {/* Título principal solo para Técnica de Manos */}
                  {section.id === 1 && (
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 3, 
                        fontWeight: 700,
                        color: section.color,
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        pb: 2,
                        borderBottom: `2px solid ${section.color}40`,
                      }}
                    >
                      🥁 Rudimentos
                    </Typography>
                  )}
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)' }}>
                    {section.description.intro}
                  </Typography>
                  {section.description.sections?.map((subsection: any, idx: number) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        mt: 3,
                        p: 2.5,
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 2,
                        border: `1px solid ${section.color}30`,
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 2, 
                          fontWeight: 700,
                          color: section.color,
                          fontSize: '1.3rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        {subsection.title}
                      </Typography>
                      
                      {/* Si tiene intro (como Moeller) */}
                      {subsection.intro && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            mb: 2,
                            lineHeight: 1.7,
                            fontSize: '0.95rem',
                            color: 'rgba(255,255,255,0.85)',
                            fontStyle: 'italic',
                          }}
                        >
                          {subsection.intro}
                        </Typography>
                      )}
                      
                      {/* Si tiene subsecciones (como Moeller) */}
                      {subsection.subsections ? (
                        <Box sx={{ mt: 2 }}>
                          {subsection.subsections.map((sub: any, subIdx: number) => (
                            <Box key={subIdx} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
                              <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                  mb: 1.5,
                                  fontWeight: 600,
                                  color: 'rgba(255,255,255,0.95)',
                                  fontSize: '1rem',
                                }}
                              >
                                {sub.subtitle}
                              </Typography>
                              {sub.text && (
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    lineHeight: 1.7,
                                    fontSize: '0.95rem',
                                    color: 'rgba(255,255,255,0.85)',
                                    mb: 1,
                                  }}
                                >
                                  {sub.text}
                                </Typography>
                              )}
                              {sub.items && (
                                <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                                  {sub.items.map((item: string, itemIdx: number) => (
                                    <Box
                                      key={itemIdx}
                                      sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        mb: 1.5,
                                        '&:last-child': { mb: 0 },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 6,
                                          height: 6,
                                          borderRadius: '50%',
                                          bgcolor: section.color,
                                          mt: 1,
                                          mr: 1.5,
                                          flexShrink: 0,
                                        }}
                                      />
                                      <Typography 
                                        variant="body2" 
                                        sx={{ 
                                          lineHeight: 1.7,
                                          fontSize: '0.95rem',
                                          color: 'rgba(255,255,255,0.85)',
                                        }}
                                      >
                                        {item}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      ) : (
                        /* Items normales */
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                          {subsection.items?.map((item: string, itemIdx: number) => (
                            <Box
                              key={itemIdx}
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                mb: 1.5,
                                '&:last-child': { mb: 0 },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  bgcolor: section.color,
                                  mt: 1,
                                  mr: 1.5,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  lineHeight: 1.7,
                                  fontSize: '0.95rem',
                                  color: 'rgba(255,255,255,0.85)',
                                }}
                              >
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Paper>

            {/* Books */}
            {section.books?.map((book: any) => (
              <Accordion
                key={book.id}
                expanded={expandedBook === book.id}
                onChange={handleBookChange(book.id)}
                sx={{
                  mb: 2,
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${section.color}30`,
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: section.color }} />}
                  sx={{
                    background: `linear-gradient(90deg, ${section.color}08 0%, ${section.color}03 100%)`,
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: section.color }}>
                      📚 {book.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      {book.subtitle}
                    </Typography>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ p: 3, background: 'rgba(0,0,0,0.2)' }}>
                  <Paper
                    sx={{
                      p: 2,
                      mb: 3,
                      background: `${section.color}08`,
                      borderLeft: `4px solid ${section.color}`,
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                      {book.description}
                    </Typography>
                  </Paper>

                  {/* How To Use Section (for The New Breed) */}
                  {book.howToUse && (
                    <Paper
                      sx={{
                        mb: 3,
                        background: 'rgba(255,255,255,0.05)',
                        border: `2px solid ${section.color}40`,
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <Box sx={{ p: 3, borderBottom: `2px solid ${section.color}30`, background: `${section.color}15` }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: section.color }}>
                          {book.howToUse.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,0.85)' }}>
                          {book.howToUse.intro}
                        </Typography>
                      </Box>

                      <Box sx={{ p: 3 }}>
                        <Stack spacing={3}>
                          {book.howToUse.sections.map((howSection: any, hsIdx: number) => (
                            <Paper
                              key={hsIdx}
                              sx={{
                                p: 3,
                                background: `${section.color}08`,
                                border: `1px solid ${section.color}30`,
                                borderRadius: 2,
                              }}
                            >
                              <Typography variant="h6" sx={{ fontWeight: 700, color: section.color, mb: 2 }}>
                                {howSection.title}
                              </Typography>
                              
                              {howSection.content && (
                                <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.85)' }}>
                                  {howSection.content}
                                </Typography>
                              )}

                              {/* Points */}
                              {howSection.points && (
                                <Stack spacing={2}>
                                  {howSection.points.map((point: any, pIdx: number) => (
                                    <Box key={pIdx} sx={{ p: 2, borderRadius: 1, background: 'rgba(255,255,255,0.05)' }}>
                                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: section.color, mb: 0.5 }}>
                                        {point.label}
                                      </Typography>
                                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                        {point.text}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Stack>
                              )}

                              {/* Steps */}
                              {howSection.steps && (
                                <Stack spacing={2}>
                                  {howSection.steps.map((step: any, sIdx: number) => (
                                    <Box key={sIdx} sx={{ p: 2, borderRadius: 1, background: 'rgba(255,255,255,0.05)', borderLeft: `4px solid ${section.color}` }}>
                                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: section.color, mb: 0.5 }}>
                                        {step.step}
                                      </Typography>
                                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                        {step.description}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Stack>
                              )}

                              {/* Rules */}
                              {howSection.rules && (
                                <Stack spacing={2}>
                                  {howSection.rules.map((rule: any, rIdx: number) => (
                                    <Box key={rIdx} sx={{ p: 2, borderRadius: 1, background: 'rgba(255,255,255,0.05)' }}>
                                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: section.color, mb: 0.5 }}>
                                        ⚡ {rule.rule}
                                      </Typography>
                                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                                        {rule.description}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Stack>
                              )}
                            </Paper>
                          ))}
                        </Stack>
                      </Box>
                    </Paper>
                  )}

                  {/* Tiers */}
                  {book.tiers?.map((tier: any, idx: number) => (
                    <Box
                      key={idx}
                      sx={{
                        mb: 3,
                        border: `2px solid ${tier.color}`,
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          background: `linear-gradient(135deg, ${tier.color}15 0%, ${tier.color}05 100%)`,
                          borderBottom: `2px solid ${tier.color}`,
                        }}
                      >
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Chip
                            label={tier.tier}
                            sx={{
                              backgroundColor: tier.color,
                              color: '#fff',
                              fontWeight: 'bold',
                            }}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 'bold', color: tier.color }}>
                            {tier.level}
                          </Typography>
                        </Stack>
                      </Box>
                      <Box sx={{ p: 2 }}>
                        <Grid container spacing={1.5}>
                          {tier.sections.map((item: any, i: number) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                              <Paper
                                sx={{
                                  p: 1.5,
                                  background: `${tier.color}05`,
                                  border: `1px solid ${tier.color}20`,
                                  transition: 'all 0.2s',
                                  '&:hover': {
                                    background: `${tier.color}10`,
                                    transform: 'translateY(-2px)',
                                  },
                                }}
                              >
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5, color: 'rgba(255,255,255,0.95)' }}>
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{ color: tier.color, fontWeight: 'bold', display: 'block', mb: 0.5 }}
                                >
                                  {item.pages}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                  {item.description}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  ))}

                  {/* Levels */}
                  {book.levels?.map((level: any, idx: number) => (
                    <Box
                      key={idx}
                      sx={{
                        mb: 3,
                        border: `2px solid ${level.color}`,
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          p: 2.5,
                          background: `linear-gradient(135deg, ${level.color}15 0%, ${level.color}05 100%)`,
                          borderBottom: `2px solid ${level.color}`,
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: level.color, mb: 1, fontSize: '1.5rem' }}>
                          {level.level}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, mb: 1.5, fontSize: '1.1rem' }}>
                          {level.subtitle}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                          {level.description}
                        </Typography>
                      </Box>
                      <Box sx={{ p: 2 }}>
                        <Grid container spacing={1.5}>
                          {level.lessons.map((lesson: any, i: number) => (
                            <Grid item xs={12} sm={6} key={i}>
                              <Paper
                                sx={{
                                  p: 2,
                                  background: `${level.color}05`,
                                  border: `1px solid ${level.color}20`,
                                  transition: 'all 0.2s',
                                  '&:hover': {
                                    background: `${level.color}10`,
                                    transform: 'translateY(-2px)',
                                  },
                                }}
                              >
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: 'rgba(255,255,255,0.95)', fontSize: '1rem' }}>
                                  {lesson.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ color: level.color, fontWeight: 'bold', display: 'block', mb: 1, fontSize: '0.85rem' }}
                                >
                                  {lesson.pages}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                  {lesson.description}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  ))}

                  {/* Exercises */}
                  {book.exercises && (
                    <Grid container spacing={2}>
                      {book.exercises.map((exercise: any, idx: number) => (
                        <Grid item xs={12} md={6} key={idx}>
                          <Paper
                            sx={{
                              p: 2.5,
                              background: 'rgba(255,255,255,0.05)',
                              border: `1px solid ${section.color}30`,
                              transition: 'all 0.3s',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                borderColor: section.color,
                              },
                            }}
                          >
                            <Stack spacing={1.5}>
                              <Box display="flex" alignItems="center" gap={1}>
                                <Box
                                  sx={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: '50%',
                                    backgroundColor: section.color,
                                  }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                  {exercise.name}
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  fontFamily: 'monospace',
                                  fontSize: '1.1rem',
                                  backgroundColor: '#1a1a1a',
                                  color: section.color,
                                  p: 1.5,
                                  borderRadius: 1,
                                  textAlign: 'center',
                                  fontWeight: 'bold',
                                }}
                              >
                                {exercise.pattern}
                              </Box>

                              <Box
                                sx={{
                                  p: 1.5,
                                  background: `${section.color}10`,
                                  borderRadius: 1,
                                }}
                              >
                                <Typography variant="caption" sx={{ color: section.color, fontWeight: 'bold' }}>
                                  ENFOQUE:
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  {exercise.focus}
                                </Typography>
                              </Box>

                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                {exercise.description}
                              </Typography>

                              <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                  BPM: {exercise.bpm}
                                </Typography>
                              </Box>
                            </Stack>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}

            {/* Section Exercises (without books) */}
            {section.exercises && !section.books && section.id !== 6 && (
              <Grid container spacing={2}>
                {section.exercises.map((exercise: any, idx: number) => (
                  <Grid item xs={12} md={6} key={idx}>
                    <Paper
                      sx={{
                        p: 2.5,
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${section.color}30`,
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: section.color,
                        },
                      }}
                    >
                      <Stack spacing={1.5}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: '50%',
                              backgroundColor: section.color,
                            }}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {exercise.name}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            fontFamily: 'monospace',
                            fontSize: '1.1rem',
                            backgroundColor: '#1a1a1a',
                            color: section.color,
                            p: 1.5,
                            borderRadius: 1,
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}
                        >
                          {exercise.pattern}
                        </Box>

                        <Box
                          sx={{
                            p: 1.5,
                            background: `${section.color}10`,
                            borderRadius: 1,
                          }}
                        >
                          <Typography variant="caption" sx={{ color: section.color, fontWeight: 'bold' }}>
                            ENFOQUE:
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {exercise.focus}
                          </Typography>
                        </Box>

                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          {exercise.description}
                        </Typography>

                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            BPM: {exercise.bpm}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
