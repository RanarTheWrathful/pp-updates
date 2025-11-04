@echo off
REM =========================
REM Foolproof Git update + fresh npm + run server
REM =========================

REM Paths
set NODE_PATH=C:\Users\elusi\Downloads\RPG Maker Stuff\RaPr\The Prophecy Paradox\Nodejs\Node.exe
set GIT_PATH=C:\Users\elusi\Downloads\RPG Maker Stuff\RaPr\The Prophecy Paradox\Git\cmd\git.exe
set REPO_URL=https://github.com/RanarTheWrathful/pp-updates.git
set FOLDER_PATH=C:\Users\elusi\Downloads\RPG Maker Stuff\RaPr\The Prophecy Paradox\pp-updates

REM Clone repo if missing
if not exist "%FOLDER_PATH%" (
    echo Folder not found. Cloning repo...
    "%GIT_PATH%" clone "%REPO_URL%" "%FOLDER_PATH%"
)

REM Enter repo folder safely
pushd "%FOLDER_PATH%" || (
    echo Failed to enter folder: %FOLDER_PATH%
    pause
    exit /b
)

REM Force update from GitHub
echo Updating repo from GitHub...
"%GIT_PATH%" fetch origin
"%GIT_PATH%" reset --hard origin/main
"%GIT_PATH%" clean -fd

REM Fresh install of Node dependencies
echo Installing/updating Node dependencies...
npm ci

REM Run server
echo Starting server...
"%NODE_PATH%" --trace-warnings ".\server\server.js"

REM Return to original folder
popd
pause
