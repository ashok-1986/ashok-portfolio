@echo off
REM Ashok Portfolio - Next.js Setup Script
REM Run this from: d:\Projects\Personal_Projects\Websites\Ashok

echo ========================================
echo  Ashok Portfolio - Next.js Setup
echo ========================================
echo.

REM Step 1: Create Next.js project
echo [1/5] Creating Next.js project...
npx create-next-app@latest ashok-portfolio --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"
if errorlevel 1 (
    echo ERROR: Failed to create Next.js project
    pause
    exit /b 1
)

cd ashok-portfolio

REM Step 2: Install dependencies
echo.
echo [2/5] Installing dependencies...
npm install gsap @studio-freight/lenis three @types/three @react-three/fiber @react-three/drei lucide-react clsx tailwind-merge
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

REM Step 3: Create directory structure
echo.
echo [3/5] Creating directory structure...
mkdir src\components\sections
mkdir src\components\canvas
mkdir src\components\ui
mkdir src\components\providers
mkdir src\hooks
mkdir src\lib
mkdir src\types
mkdir public\fonts
mkdir public\images

REM Step 4: Copy fonts
echo.
echo [4/5] Copying Galgo fonts...
copy "..\Fonts\Galgo Condensed Variable\WOFF2\GalgoVF.woff2" "public\fonts\galgo-var.woff2"
copy "..\Fonts\Galgo Condensed Variable\WOFF\GalgoVF.woff" "public\fonts\galgo-var.woff"
copy "..\Fonts\Galgo\WOFF2\Galgo-Regular.woff2" "public\fonts\galgo-regular.woff2"
copy "..\Fonts\Galgo\WOFF2\Galgo-Bold.woff2" "public\fonts\galgo-bold.woff2"
copy "..\Fonts\Galgo\WOFF2\Galgo-Light.woff2" "public\fonts\galgo-light.woff2"

echo.
echo [5/5] Setup complete!
echo.
echo ========================================
echo  Next Steps:
echo ========================================
echo  1. cd ashok-portfolio
echo  2. Copy font files manually if any failed above
echo  3. Update src/app/globals.css with @font-face
echo  4. Update src/app/layout.tsx with font config
echo  5. npm run dev -- -p 3307
echo.
echo See SETUP_GUIDE.md for detailed instructions.
echo ========================================
pause
