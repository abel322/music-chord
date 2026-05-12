'use client';

import React from 'react';
import { Box } from '@mui/material';

interface SimplePDFIframeProps {
  fileUrl: string;
  onClose?: () => void;
  pageRange?: string;
}

const SimplePDFIframe: React.FC<SimplePDFIframeProps> = ({ fileUrl, pageRange }) => {
  // Parsear solo el primer número de la página
  const pageNumber = pageRange ? parseInt(pageRange.split(/[-,]/)[0]) : 1;
  
  // Construir URL con parámetros para el visor nativo al 80% de zoom sin barra lateral
  const pdfUrl = `${fileUrl}#page=${pageNumber}&zoom=80&toolbar=1&navpanes=0&scrollbar=1`;
  
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <iframe
        src={pdfUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="PDF Viewer"
      />
    </Box>
  );
};

export default SimplePDFIframe;
