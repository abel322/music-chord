'use client';

import React, { useState, useEffect, useRef } from 'react';
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

interface PDFPageViewerProps {
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

const PDFPageViewer: React.FC<PDFPageViewerProps> = ({ fileUrl, onClose, pageRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allowedPages, setAllowedPages] = useState<number[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.5);
  const [pdfDoc, setPdfDoc] = useState<any>(null);

  useEffect(() => {
    if (pageRange) {
      const pages = parsePageRange(pageRange);
      setAllowedPages(pages);
      setCurrentPageIndex(0);
    }
  }, [pageRange]);

  useEffect(() => {
    let isMounted = true;
    let loadedPdf: any = null;

    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        if (typeof window === 'undefined') return;

        // Usar la versión de pdfjs
        const pdfjs = await import('pdfjs-dist');
        const version = pdfjs.version || '4.4.168'; // Fallback a una versión compatible
        
        // Configurar worker
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjs.getDocument({
          url: fileUrl,
          cMapUrl: `https://unpkg.com/pdfjs-dist@${version}/cmaps/`,
          cMapPacked: true,
          standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${version}/standard_fonts/`,
          withCredentials: false,
        });
        
        loadedPdf = await loadingTask.promise;

        if (isMounted) {
          setPdfDoc(loadedPdf);
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Error loading PDF:', err);
        if (isMounted) {
          setError(`Error al cargar el PDF: ${err.message || 'Desconocido'}`);
          setLoading(false);
        }
      }
    };

    loadPDF();

    return () => {
      isMounted = false;
      if (loadedPdf) {
        try {
          loadedPdf.destroy();
        } catch (e) {
          console.error('Error destroying PDF:', e);
        }
      }
    };
  }, [fileUrl]);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current || allowedPages.length === 0) return;

    const renderPage = async () => {
      try {
        const pageNumber = allowedPages[currentPageIndex];
        const page = await pdfDoc.getPage(pageNumber);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } catch (err) {
        console.error('Error rendering page:', err);
      }
    };

    renderPage();
  }, [pdfDoc, currentPageIndex, scale, allowedPages]);

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

  const fitToWidth = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      // Asumiendo un ancho de página PDF estándar de ~600px
      const newScale = (containerWidth - 40) / 400;
      setScale(Math.max(0.5, Math.min(newScale, 3.0)));
    }
  };

  const currentPage = allowedPages.length > 0 ? allowedPages[currentPageIndex] : 1;

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
              onClick={fitToWidth}
              disabled={loading}
              size={isMobile ? 'small' : 'medium'}
              title="Ajustar a ancho"
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
        ref={containerRef}
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

        {error && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <Typography variant="h6" color="error">
              {error}
            </Typography>
          </Box>
        )}

        {!loading && !error && (
          <canvas
            ref={canvasRef}
            style={{
              maxWidth: '100%',
              height: 'auto',
              boxShadow: theme.shadows[3],
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default PDFPageViewer;
