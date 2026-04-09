'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  Close as CloseIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

interface EmbedPDFViewerProps {
  fileUrl: string;
  onClose?: () => void;
  pageRange?: string;
}

const parsePageRange = (range: string): number[] => {
  if (!range || range.trim() === '') return [];
  
  const pages: number[] = [];
  const parts = range.split(',').map(p => p.trim());
  
  for (const part of parts) {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(n => parseInt(n.trim()));
      if (!isNaN(start) && !isNaN(end)) {
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }
    } else {
      const page = parseInt(part);
      if (!isNaN(page)) {
        pages.push(page);
      }
    }
  }
  
  return [...new Set(pages)].sort((a, b) => a - b);
};

const EmbedPDFViewer: React.FC<EmbedPDFViewerProps> = ({ fileUrl, onClose, pageRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [loading, setLoading] = useState(true);
  const [allowedPages, setAllowedPages] = useState<number[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  useEffect(() => {
    if (pageRange) {
      const pages = parsePageRange(pageRange);
      setAllowedPages(pages);
      setCurrentPageIndex(0);
    }
  }, [pageRange]);

  useEffect(() => {
    // Ocultar loading después de 2 segundos
    console.log('PDF Viewer: Iniciando carga de página', currentPageIndex);
    setLoading(true);
    const timer = setTimeout(() => {
      console.log('PDF Viewer: Carga completada');
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPageIndex]);

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setLoading(true);
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < allowedPages.length - 1) {
      setLoading(true);
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handleDownload = () => {
    window.open(fileUrl, '_blank');
  };

  const currentPage = allowedPages.length > 0 ? allowedPages[currentPageIndex] : 1;
  
  // Construir URL con página específica y sin controles
  const pdfUrl = `${fileUrl}#page=${currentPage}&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Paper elevation={1} sx={{ borderRadius: 0 }}>
        <Toolbar
          variant="dense"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: 48,
            px: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {allowedPages.length > 1 && (
              <>
                <IconButton
                  onClick={goToPreviousPage}
                  disabled={currentPageIndex <= 0}
                  size={isMobile ? 'small' : 'medium'}
                  title="Página anterior"
                >
                  <NavigateBeforeIcon />
                </IconButton>
                
                <Typography variant="body2" color="text.secondary">
                  Página {currentPage} ({currentPageIndex + 1}/{allowedPages.length})
                </Typography>

                <IconButton
                  onClick={goToNextPage}
                  disabled={currentPageIndex >= allowedPages.length - 1}
                  size={isMobile ? 'small' : 'medium'}
                  title="Página siguiente"
                >
                  <NavigateNextIcon />
                </IconButton>
              </>
            )}
            {allowedPages.length === 1 && (
              <Typography variant="body2" color="text.secondary">
                Página {currentPage}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              onClick={handleDownload}
              size={isMobile ? 'small' : 'medium'}
              title="Abrir PDF completo"
            >
              <DownloadIcon />
            </IconButton>

            {onClose && (
              <IconButton
                onClick={onClose}
                size={isMobile ? 'small' : 'medium'}
                title="Cerrar"
              >
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          position: 'relative',
          overflow: 'hidden',
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.200',
        }}
      >
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        <iframe
          key={`pdf-${currentPage}`}
          src={pdfUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title={`PDF - Página ${currentPage}`}
        />
      </Box>
    </Box>
  );
};

export default EmbedPDFViewer;
