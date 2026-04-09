-- Agregar campo category a la tabla Exercise
ALTER TABLE "Exercise" ADD COLUMN IF NOT EXISTS "category" TEXT;

-- Crear índice para mejorar el rendimiento de búsquedas por categoría
CREATE INDEX IF NOT EXISTS "Exercise_category_idx" ON "Exercise"("category");

-- Verificar que se agregó correctamente
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'Exercise' AND column_name = 'category';
