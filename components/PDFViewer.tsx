'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
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

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurar worker de PDF.js usando import dinámico
if (typeof window !== 'undefined') {
  import('pdfjs-dist/build/pdf.worker.min.mjs').then((pdfjsWorker) => {
    const pdfjs = require('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  }).catch(() => {
    // Fallback a CDN si falla la importación local
    const pdfjs = require('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  });
}

interface PDFViewerProps {
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

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl, onClose, pageRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [allowedPages, setAllowedPages] = useState<number[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInputValue, setPageInputValue] = useState<string>('1');
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setContainerWidth(node.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (pageRange) {
      const pages = parsePageRange(pageRange);
      setAllowedPages(pages);
      if (pages.length > 0) {
        setPageNumber(pages[0]);
        setCurrentPageIndex(0);
        setPageInputValue(pages[0].toString());
      }
    } else {
      setAllowedPages([]);
      setCurrentPageIndex(0);
    }
  }, [pageRange]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error al cargar PDF:', error);
    setError('No se pudo cargar el PDF. Por favor, intenta de nuevo.');
    setLoading(false);
  };

  const goToPreviousPage = () => {
    if (allowedPages.length > 0) {
      if (currentPageIndex > 0) {
        const newIndex = currentPageIndex - 1;
        const newPage = allowedPages[newIndex];
        setCurrentPageIndex(newIndex);
        setPageNumber(newPage);
        setPageInputValue(newPage.toString());
      }
    } else {
      if (pageNumber > 1) {
        const newPage = pageNumber - 1;
        setPageNumber(newPage);
        setPageInputValue(newPage.toString());
      }
    }
  };

  const goToNextPage = () => {
    if (allowedPages.length > 0) {
      if (currentPageIndex < allowedPages.length - 1) {
        const newIndex = currentPageIndex + 1;
        const newPage = allowedPages[newIndex];
        setCurrentPageIndex(newIndex);
        setPageNumber(newPage);
        setPageInputValue(newPage.toString());
      }
    } else {
      if (pageNumber < numPages) {
        const newPage = pageNumber + 1;
        setPageNumber(newPage);
        setPageInputValue(newPage.toString());
      }
    }
  };

  const goToPage = (page: number) => {
    if (allowedPages.length > 0) {
      const index = allowedPages.indexOf(page);
      if (index !== -1) {
        setCurrentPageIndex(index);
        setPageNumber(page);
        setPageInputValue(page.toString());
      }
    } else {
      if (page >= 1 && page <= numPages) {
        setPageNumber(page);
        setPageInputValue(page.toString());
      }
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInputValue(e.target.value);
  };

  const handlePageInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const page = parseInt(pageInputValue, 10);
      if (!isNaN(page)) {
        goToPage(page);
      } else {
        setPageInputValue(pageNumber.toString());
      }
    }
  };

  const handlePageInputBlur = () => {
    const page = parseInt(pageInputValue, 10);
    if (!isNaN(page)) {
      goToPage(page);
    } else {
      setPageInputValue(pageNumber.toString());
    }
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  const fitToWidth = () => {
    if (containerWidth > 0) {
      const newScale = (containerWidth - 40) / 600;
      setScale(Math.max(0.5, Math.min(newScale, 3.0)));
    }
  };

  const handleRetry = () => {
    setError(null);
    setLoading(true);
  };

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
              disabled={
                loading || 
                (allowedPages.length > 0 ? currentPageIndex <= 0 : pageNumber <= 1)
              }
              size={isMobile ? 'small' : 'medium'}
              title="Página anterior"
            >
              <NavigateBeforeIcon />
            </IconButton>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                value={pageInputValue}
                onChange={handlePageInputChange}
                onKeyPress={handlePageInputKeyPress}
                onBlur={handlePageInputBlur}
                size="small"
                disabled={loading}
                sx={{ width: isMobile ? 50 : 60 }}
                inputProps={{
                  style: { textAlign: 'center' },
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {allowedPages.length > 0 
                  ? `/ ${allowedPages.length} (${allowedPages[0]}-${allowedPages[allowedPages.length - 1]})`
                  : `/ ${numPages || '?'}`
                }
              </Typography>
            </Box>

            <IconButton
              onClick={goToNextPage}
              disabled={
                loading || 
                (allowedPages.length > 0 
                  ? currentPageIndex >= allowedPages.length - 1 
                  : pageNumber >= numPages)
              }
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
          p: 0.5,
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.200',
        }}
      >
        {loading && !error && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <CircularProgress />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Cargando PDF...
            </Typography>
          </Box>
        )}

        {error && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, px: 2 }}>
            <Typography variant="h6" color="error" gutterBottom>
              Error al cargar el PDF
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
              {error}
            </Typography>
            <Button variant="contained" onClick={handleRetry}>
              Reintentar
            </Button>
          </Box>
        )}

        {!error && (
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading=""
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              loading={
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                  <CircularProgress />
                </Box>
              }
            />
          </Document>
        )}
      </Box>
    </Box>
  );
};

export default PDFViewer;
