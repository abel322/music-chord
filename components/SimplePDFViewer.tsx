'use client';

import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Paper,
  Toolbar,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Typography,
} from '@mui/material';
import {
  Close as CloseIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

interface SimplePDFViewerProps {
  fileUrl: string;
  onClose?: () => void;
  pageRange?: string;
}

const SimplePDFViewer: React.FC<SimplePDFViewerProps> = ({ fileUrl, onClose, pageRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleDownload = () => {
    window.open(fileUrl, '_blank');
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
            minHeight: 48,
            px: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Visor de PDF
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              onClick={handleDownload}
              size={isMobile ? 'small' : 'medium'}
              title="Descargar PDF"
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
          src={`${fileUrl}#toolbar=1&navpanes=1&scrollbar=1`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          onLoad={handleLoad}
          title="PDF Viewer"
        />
      </Box>
    </Box>
  );
};

export default SimplePDFViewer;
