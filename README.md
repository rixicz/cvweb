# Patrik Šmidoch — CV Website & Portfolio

A modern, responsive, executive personal CV and portfolio single-page application built with **React**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features
- **Executive & Clean UI**: Styled with modern typography, subtle slate/zinc neutral tones, and responsive cards.
- **Dual Language Support (EN / CZ)**: Instant toggle between English and Czech for international and domestic recruiters.
- **Dark & Light Mode**: Seamless theme switching with automatic system preference detection and localStorage persistence.
- **Structured Sections**:
  - Executive Profile & Hero
  - Professional Experience (Conectio Group, NPÚ, ORLEN S.A.)
  - Education (Gymnázium Říčany)
  - Featured Projects (Nand2Tetris, MicrosoftTechLearn, JavaScript30, Calculator, etc.)
  - Categorized Competencies & Languages
  - Certifications & Honors (Linux Unhatched, MOOC.fi Python 2026, AP Psychology, Best in English, Biomechaton)
- **Interactive Utilities**:
  - One-click copy email button with feedback toast
  - Direct PDF CV download / view button ([Profile.pdf](./public/Profile.pdf))
  - Responsive navigation with mobile menu drawer
- **Automated Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) ready for GitHub Pages.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
The compiled static assets will be in the `dist/` directory.

### Preview Build Locally
```bash
npm run preview
```

## 🌐 Deployment to GitHub Pages
A GitHub Actions workflow is included in `.github/workflows/deploy.yml`.
To activate GitHub Pages for this repository:
1. Go to your repository settings on GitHub (`Settings` -> `Pages`).
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. Push changes to `main` (or `master`), and GitHub will automatically build and publish your site.
