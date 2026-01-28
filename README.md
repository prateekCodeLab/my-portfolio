# Prateek Kumar — Portfolio

**A cinematic, premium personal portfolio built with Next.js and Tailwind CSS.**

A high-end developer portfolio showcasing expertise through immersive storytelling, sophisticated glassmorphism design, and smooth micro-interactions. Built with performance and precision in mind.

---

## 📸 Preview

> [Live Demo](#) | [Design Inspiration](#inspiration)

_Screenshots and live preview coming soon._

---

## ✨ Features

### Currently Implemented
- **Cinematic Hero Section** — Animated role text, particle effects, cosmic gradients, and glow accents
- **Premium Sticky Navbar** — Glassmorphic design with scroll-aware effects and responsive behavior
- **About Section** — Glass cards with particles, soft animations, and refined typography
- **Modular Component Architecture** — Clean, reusable UI components (Button, Card, Badge, etc.)
- **Dark Cosmic Theme** — Deep space gradients with cyan-blue glow throughout
- **Tailwind CSS** — Production-ready styling with custom configuration
- **TypeScript** — Type-safe React development

### Planned Features (Roadmap)
- **Skills Section** — Glass cards with animated reveals and category filtering
- **Experience Timeline** — Interactive timeline with cinematic transitions
- **Projects Showcase** — Project cards with hover previews and case study links
- **Smooth Scroll Integration** — Lenis-powered scroll effects for cinematic feel
- **Advanced Micro-interactions** — Refined hover states and motion polish
- **Performance Optimization** — Image optimization, code splitting, and lazy loading
- **SEO & Accessibility** — Semantic HTML, ARIA labels, meta tags optimization
- **Contact Section** — Functional contact form with validation

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|---|
| **Framework** | [Next.js](https://nextjs.org) 15+ (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) + [PostCSS](https://postcss.org) |
| **Animation** | [Framer Motion](https://www.framer.com/motion) |
| **Smooth Scrolling** | [Lenis](https://lenis.studiofreight.com) |
| **Package Manager** | npm / yarn / pnpm |

---

## 📂 Project Structure

```
my-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page entry point
│   └── globals.css              # Global styles
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx           # Sticky navigation with glassmorphism
│   │   ├── Footer.tsx           # Footer component
│   │   └── Container.tsx        # Content wrapper
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx             # Hero with particles and animations
│   │   ├── About.tsx            # About me section
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Projects.tsx         # Portfolio projects
│   │   └── Contact.tsx          # Contact form
│   │
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Button component
│       ├── Card.tsx             # Card wrapper
│       ├── Badge.tsx            # Tag/badge component
│       ├── Particles.tsx        # Particle effect component
│       └── SectionTitle.tsx     # Section title styling
│
├── data/
│   └── portfolioData.ts         # Static portfolio content (projects, skills, etc.)
│
├── lib/
│   └── utils.ts                 # Utility functions and helpers
│
├── public/                      # Static assets (images, icons)
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tailwind.config.js           # Additional Tailwind config
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint rules
└── package.json                 # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (or latest LTS)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Changes auto-reload as you edit files

---

## 💻 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Run ESLint
npm run lint

# Format code (if configured)
npm run format
```

---

## 🎨 Customization

### Update Portfolio Content
Edit [data/portfolioData.ts](data/portfolioData.ts) to update:
- About section text
- Skills list
- Work experience
- Project listings
- Contact information

### Modify Colors & Theme
Tailwind CSS configuration is in [tailwind.config.ts](tailwind.config.ts). Adjust:
- Color palette
- Spacing scale
- Font families
- Custom animations

### Adjust Components
All reusable components are in `components/`. Modify individual sections in `components/sections/`.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel is the optimal choice for Next.js projects.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel auto-detects Next.js and configures settings
   - Deploy with one click

3. **Custom Domain**
   - Add your domain in Vercel project settings
   - Update DNS records (instructions provided by Vercel)

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Connect GitHub & Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Import your repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Deploy

### Deploy to Other Platforms

For Heroku, Railway, or self-hosted solutions, refer to [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📋 Code Quality

- **ESLint** — Code linting for consistency
- **TypeScript** — Static type checking
- **Tailwind CSS** — Utility-first CSS without duplication

Run linting:
```bash
npm run lint
```

---

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit changes (`git commit -m 'Add enhancement'`)
4. Push to branch (`git push origin feature/enhancement`)
5. Open a Pull Request

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🎬 Design Inspiration

This portfolio was inspired by [Brittany Chiang's](https://brittanychiang.com) portfolio — a masterclass in cinematic web design, smooth animations, and effective personal branding.

---

## 👤 Author

**Prateek Kumar**

- GitHub: [@prateekCodeLab](https://github.com/prateekCodeLab)
- LinkedIn: [prateekkmr3151](https://linkedin.com/in/prateekkmr3151)
- Email: [your.prateekkmr3151@gmail.com](mailto:your.prateekkmr3151@gmail.com)

---

**Made with ✨ and precision.**
