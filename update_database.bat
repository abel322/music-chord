@echo off
echo Deteniendo procesos de Node...
taskkill /F /IM node.exe 2>nul

echo Esperando 2 segundos...
timeout /t 2 /nobreak >nul

echo Generando cliente de Prisma...
call npx prisma generate

echo Aplicando migracion...
call npx prisma db push

echo Listo!
pause
