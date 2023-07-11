@echo off

REM Lanzador para sietecolores-sys

REM Ejecutar "npm run dev" en la carpeta server
cd /d "%~dp0server"
start cmd /k npm run dev

REM Esperar unos segundos para que el servidor se inicie
timeout /t 5

REM Ejecutar "npm run dev" en la carpeta client
cd /d "%~dp0client"
start cmd /k npm run start

REM Abrir el navegador en "localhost:3000"
start "" "http://localhost:3000"