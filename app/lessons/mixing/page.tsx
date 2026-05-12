'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import MixingCourse from '@/components/lessons/MixingCourse';

export default function MixingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
        color: '#ffffff',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <MixingCourse />
      </Container>
    </Box>
  );
}
