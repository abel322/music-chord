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
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  FitScreen as FitScreenIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

interface SinglePagePDFViewerProps {
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

const SinglePagePDFViewer: React.FC<SinglePagePDFViewerProps> = ({ fileUrl, onClose, pageRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [loading, setLoading] = useState(true);
  const [allowedPages, setAllowedPages] = useState<number[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [Document, setDocument] = useState<any>(null);
  const [Page, setPage] = useState<any>(null);

  useEffect(() => {
    // Cargar react-pdf dinámicamente solo en el cliente
    const loadReactPdf = async () => {
      try {
        if (typeof window === 'undefined') return;
        
        const reactPdf = await import('react-pdf');
        // Usar pdfjs desde react-pdf para asegurar compatibilidad
        const pdfjs = reactPdf.pdfjs;
        
        // Configurar worker
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
        
        setDocument(() => reactPdf.Document);
        setPage(() => reactPdf.Page);
      } catch (error) {
        console.error('Error loading react-pdf:', error);
        setDocument(null);
        setPage(null);
      }
    };

    loadReactPdf();
  }, []);

  useEffect(() => {
    if (pageRange) {
      const pages = parsePageRange(pageRange);
      setAllowedPages(pages);
      setCurrentPageIndex(0);
    }
  }, [pageRange]);

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

  const currentPage = allowedPages.length > 0 ? allowedPages[currentPageIndex] : 1;

  if (!Document || !Page) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

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
                ? `Página ${currentPage} (${currentPageIndex + 1}/${allowedPages.length})`
                : 'Cargando...'
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
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          p: 2,
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.200',
        }}
      >
        {loading && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <CircularProgress />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Cargando PDF...
            </Typography>
          </Box>
        )}

        <Document
          file={fileUrl}
          onLoadSuccess={(doc) => {
            console.log('PDF loaded!', doc.numPages);
            setLoading(false);
          }}
          onLoadError={(error: Error) => {
            console.error('Error loading PDF with Document:', error);
            setLoading(false);
            if (onClose) {
              // Fallback o mensaje
            }
          }}
          loading={
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 1 }}>Cargando PDF...</Typography>
            </Box>
          }
          noData={<Typography color="error">No se encontró el archivo del libro</Typography>}
        >
          <Page
            pageNumber={currentPage}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            }
          />
        </Document>
      </Box>
    </Box>
  );
};

export default SinglePagePDFViewer;
