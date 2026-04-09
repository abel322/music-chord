'use client';

import { useState } from 'react';
import { Container, Typography, Button, Box, Alert } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

export default function ClearCachePage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const clearCache = async () => {
    setLoading(true);
    try {
      // Limpiar localStorage
      localStorage.clear();
      
      // Limpiar sessionStorage
      sessionStorage.clear();
      
      // Limpiar IndexedDB
      const databases = await indexedDB.databases();
      for (const db of databases) {
        if (db.name) {
          indexedDB.deleteDatabase(db.name);
        }
      }
      
      setMessage('✅ Caché limpiada exitosamente. Recargando página...');
      
      // Recargar después de 2 segundos
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      setMessage('❌ Error al limpiar la caché');
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Limpiar Caché
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Esto eliminará todos los datos almacenados localmente en tu navegador,
          incluyendo ejercicios, libros y sesiones en caché.
        </Typography>

        {message && (
          <Alert severity={message.includes('✅') ? 'success' : 'error'} sx={{ mb: 3 }}>
            {message}
          </Alert>
        )}

        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<DeleteIcon />}
          onClick={clearCache}
          disabled={loading}
        >
          {loading ? 'Limpiando...' : 'Limpiar Caché'}
        </Button>
      </Box>
    </Container>
  );
}
