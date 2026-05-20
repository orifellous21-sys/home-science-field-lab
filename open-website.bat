@echo off
cd /d "%~dp0"
set "URL=http://127.0.0.1:5173/?final=1"
set "PYTHON=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PYTHON%" set "PYTHON=C:\Users\zivfe\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PYTHON%" set "PYTHON=python"

powershell.exe -NoProfile -Command "try { $r = Invoke-WebRequest -UseBasicParsing '%URL%' -TimeoutSec 1; if ($r.StatusCode -eq 200) { exit 0 } } catch { exit 1 }"
if errorlevel 1 (
  start "Home Science Field Lab Server" /min "%PYTHON%" "%~dp0no-cache-server.py"
)

powershell.exe -NoProfile -Command "$url = '%URL%'; for ($i = 0; $i -lt 20; $i++) { try { $r = Invoke-WebRequest -UseBasicParsing $url -TimeoutSec 1; if ($r.StatusCode -eq 200) { exit 0 } } catch {}; Start-Sleep -Milliseconds 250 }; exit 1"
if errorlevel 1 (
  echo The website server did not start.
  echo Opening the standalone website file instead.
  start "" "%~dp0home-science-field-lab.html"
  exit /b 0
)

start "" "%URL%"
