'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Button,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  FitScreen as FitScreenIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

interface PDFViewerWithPagesProps {
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

const PDFViewerWithPages: React.FC<PDFViewerWithPagesProps> = ({ fileUrl, onClose, pageRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(true);
  const [allowedPages, setAllowedPages] = useState<number[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);

  useEffect(() => {
    if (pageRange) {
      const pages = parsePageRange(pageRange);
      setAllowedPages(pages);
      setCurrentPageIndex(0);
    }
  }, [pageRange]);

  const handleLoad = () => {
    setLoading(false);
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < allowedPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  const resetZoom = () => {
    setScale(1.0);
  };

  // Construir URL con página específica
  const currentPage = allowedPages.length > 0 ? allowedPages[currentPageIndex] : 1;
  const pdfUrl = `${fileUrl}#page=${currentPage}&zoom=${Math.round(scale * 100)}`;

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
            flexWrap: 'wrap',
            gap: 0.5,
            minHeight: 40,
            py: 0.5,
            px: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={goToPreviousPage}
              disabled={loading || currentPageIndex <= 0}
              size={isMobile ? 'small' : 'medium'}
              title="Página anterior"
            >
              <NavigateBeforeIcon />
            </IconButton>
            
            <Typography variant="body2" color="text.secondary">
              {allowedPages.length > 0 
                ? `Página ${currentPage} (${currentPageIndex + 1} de ${allowedPages.length})`
                : 'Todas las páginas'
              }
            </Typography>

            <IconButton
              onClick={goToNextPage}
              disabled={loading || currentPageIndex >= allowedPages.length - 1}
              size={isMobile ? 'small' : 'medium'}
              title="Página siguiente"
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={zoomOut}
              disabled={scale <= 0.5 || loading}
              size={isMobile ? 'small' : 'medium'}
              title="Alejar"
            >
              <ZoomOutIcon />
            </IconButton>
            
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 50, textAlign: 'center' }}>
              {Math.round(scale * 100)}%
            </Typography>

            <IconButton
              onClick={zoomIn}
              disabled={scale >= 3.0 || loading}
              size={isMobile ? 'small' : 'medium'}
              title="Acercar"
            >
              <ZoomInIcon />
            </IconButton>

            <IconButton
              onClick={resetZoom}
              disabled={loading}
              size={isMobile ? 'small' : 'medium'}
              title="Restablecer zoom"
            >
              <FitScreenIcon />
            </IconButton>
          </Box>

          {onClose && (
            <IconButton
              onClick={onClose}
              size={isMobile ? 'small' : 'medium'}
              title="Cerrar"
            >
              <CloseIcon />
            </IconButton>
          )}
        </Toolbar>
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          position: 'relative',
          overflow: 'auto',
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

        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <iframe
            key={`${fileUrl}-${currentPage}-${scale}`}
            src={`${fileUrl}#page=${currentPage}&zoom=${Math.round(scale * 100)}&toolbar=0&navpanes=0&scrollbar=0`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: 'white',
            }}
            onLoad={handleLoad}
            title="PDF Viewer"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PDFViewerWithPages;
