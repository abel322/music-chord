'use client';

import dynamic from 'next/dynamic';
import { CircularProgress, Box } from '@mui/material';

// Importar SimplePDFIframe - versión ultra simple que funciona
const PDFViewer = dynamic(
  () => import('./SimplePDFIframe'),
  {
    ssr: false,
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    ),
  }
);

export default PDFViewer;
