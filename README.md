# Nilavan A — Developer Portfolio

A modern, responsive, professional personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features
- 🌙 Dark / Light mode toggle
- 🎉 Particle background in Hero section
- ⌨️ Typing animation
- 🎞️ Framer Motion scroll animations
- 📱 Fully responsive (mobile-first)
- 🚀 Fast — Vite bundler
- 🔍 SEO optimized meta tags

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Achievements.jsx
│   ├── GitHubStats.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHelpers.jsx
├── context/
│   └── ThemeContext.jsx
├── data/
│   └── portfolioData.js   ← Edit all content here
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
Install **Node.js** (v18+) from https://nodejs.org

### Install & Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

### Build for Production
```bash
npm run build
npm run preview
```

## 🔧 Customisation
- All portfolio content (name, skills, projects, etc.) is in `src/data/portfolioData.js`
- Update `githubUsername` in `portfolioData.js` to load your real GitHub stats
- Place your resume as `public/resume.pdf` to enable the Download Resume button
- Update LinkedIn and GitHub URLs in `portfolioData.js`

## 🛠 Tech Stack
- React 18
- Tailwind CSS 3
- Framer Motion 11
- tsParticles (particle background)
- react-type-animation (typing effect)
- react-scroll (smooth navigation)
- react-icons
- Vite 5
