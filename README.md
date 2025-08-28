# BZJ Jakar - Premium Jacquard Fabrics

A sophisticated React website for BZJ Jakar, showcasing premium jacquard fabrics for B2B wholesale buyers and designers worldwide.

## 🌟 Features

- **Modern React 18.3.1** with TypeScript
- **Responsive Design** - Fully mobile-optimized
- **Tailwind CSS** with custom pastel color palette
- **React Router v6** with smooth navigation
- **Premium UI Components** from Radix UI
- **Optimized Performance** with Vite build system

## 🚀 Vercel Deployment

### Option 1: Deploy via GitHub (Recommended)

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BZJ Jakar website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `bzj-jakar-website` or similar
   - Don't initialize with README (we already have one)

3. **Connect to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bzj-jakar-website.git
   git push -u origin main
   ```

4. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the settings:
     - **Framework Preset:** Vite
     - **Build Command:** `pnpm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `pnpm install`
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, etc.
│   └── ScrollToTop.tsx  # Navigation scroll utility
├── pages/               # Route components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── CollectionsPage.tsx
│   ├── SustainabilityPage.tsx
│   ├── WholesalePage.tsx
│   └── ContactPage.tsx
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

## 🎨 Design System

- **Typography:** Playfair Display (serif), Inter (sans-serif)
- **Color Palette:** Soft pastels with professional contrast
- **Components:** Radix UI with custom styling
- **Animations:** Smooth transitions and micro-interactions

## 🔧 Tech Stack

- **Frontend:** React 18.3.1 + TypeScript
- **Build Tool:** Vite 6.0.1
- **Styling:** Tailwind CSS 3.4.16
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly interfaces
- Mobile-optimized hero backgrounds
- Smooth scroll-to-top navigation

## 🌍 Deployment Configuration

The project includes:
- `vercel.json` - Vercel-specific configuration
- Optimized build scripts
- SPA routing support
- Asset caching strategies

## 📄 License

Proprietary - BZJ Jakar

---

**Built with ❤️ for premium textile manufacturing**
