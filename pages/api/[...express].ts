import express from 'express';
import cors from 'cors';

import { sanitizeInput } from '@/lib/middleware/sanitize.middleware';
import { apiLimiter } from '@/lib/middleware/rate-limit.middleware';
import { errorHandler } from '@/lib/middleware/error-handler.middleware';


import bookRoutes from '@/lib/routes/book.routes';
import userRoutes from '@/lib/routes/user.routes';
import exerciseRoutes from '@/lib/routes/exercise.routes';
import sessionRoutes from '@/lib/routes/session.routes';
import levelRoutes from '@/lib/routes/level.routes';
import dashboardRoutes from '@/lib/routes/dashboard.routes';
import goalRoutes from '@/lib/routes/goal.routes';
import recommendationRoutes from '@/lib/routes/recommendation.routes';
import predictionRoutes from '@/lib/routes/prediction.routes';
import exportRoutes from '@/lib/routes/export.routes';
import exerciseProgressRoutes from '@/lib/routes/exercise-progress.routes';
import authRoutes from '@/lib/routes/auth.routes';


const app = express();

app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ],
  credentials: true,
}));

// Setup req parsers since Next bodyParser is manually disabled
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.use(sanitizeInput);
  app.use(apiLimiter);
} catch (e) {
  // Ignore missing middlewares
}

// Prefijo real para las rutas antiguas en Express API router.
// Renombrado 'auth' a 'auth_express' para no chocar con Next-Auth de la app base actual
app.use('/api/auth_express', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/export', exportRoutes);
app.use('/api/exercise-progress', exerciseProgressRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta antigua no encontrada en Express Wrapper' });
});

app.use(errorHandler);

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default function handler(req: any, res: any) {
  return app(req, res);
}
