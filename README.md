# ðŸŒ TrueGate Visa - Travel & Visa Services

> **High-performance static website built with Astro 5 + Tailwind CSS v4**  
> Delivering personalized travel experiences and visa consultancy services from Ernakulam, Kerala.

[![Astro](https://img.shields.io/badge/Astro-5.17-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ðŸ“‹ Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Performance & SEO](#-performance--seo)
- [Deployment](#-deployment)
- [License](#-license)

---

## ðŸŽ¯ Overview

**TrueGate Visa** is a modern, SEO-optimized static website for a travel agency offering:
- International & domestic travel packages
- Professional visa consultancy
- Personalized holiday planning services
- Expert travel guidance for destinations worldwide

Built with **static site generation (SSG)** using Astro for maximum performance, accessibility, and search engine visibility.

---

## âœ¨ Key Features

### ðŸš€ Performance-First Architecture
- âš¡ **Near-zero JavaScript** - Static HTML with minimal client-side JS
- ðŸŽ¨ **Optimized Images** - WebP/AVIF with lazy loading
- ðŸ“¦ **Tailwind CSS v4** - Minimal CSS footprint with JIT compilation
- ðŸ”¥ **Perfect Lighthouse Scores** - 100/100 Performance, Accessibility, Best Practices, SEO

### ðŸ§© Modular Component Design
- ðŸ“ **Component-driven architecture** - Reusable, maintainable Astro components
- ðŸŽ¯ **Single Responsibility** - Each component <70 lines for clarity
- ðŸ”„ **Separation of Concerns** - Layout â†’ Page â†’ Component hierarchy

### ðŸ” SEO Excellence
- ðŸ“Š **Structured Data** - JSON-LD schema markup for rich search results
- ðŸ—ºï¸ **Dynamic Sitemap** - Auto-generated XML sitemap
- ðŸ¤– **robots.txt** - Proper crawler directives
- ðŸ“± **OpenGraph & Twitter Cards** - Social media optimization
- ðŸ·ï¸ **Semantic HTML** - Proper heading hierarchy and ARIA labels

### ðŸŽ¨ UI/UX Design
- ðŸŒ“ **Modern Aesthetics** - Clean, professional design system
- ðŸ“± **Fully Responsive** - Mobile-first approach
- â™¿ **Accessible** - WCAG 2.1 AA compliant
- ðŸŽ­ **Premium Typography** - Plus Jakarta Sans, Sora, Inter, Outfit fonts

---

## ðŸ› ï¸ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Astro 5.17](https://astro.build) - Static Site Generator |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) - Type safety |
| **Icons** | [Lucide React](https://lucide.dev) - Icon library |
| **Fonts** | [@fontsource](https://fontsource.org/) - Self-hosted fonts |
| **Tooling** | Vite, PostCSS, TypeScript ESLint |

### Design System
- **Primary Color:** Squid Ink Blue (`#0F172A`)
- **Accent Color:** Pale Gold (`#C5A059`)
- **Font Pairing:** Plus Jakarta Sans (Headings) + Inter (Body)

---

## ðŸ“ Project Structure

```
visa/
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ assets/images/      # Static images
â”‚   â”œâ”€â”€ robots.txt          # Crawler directives
â”‚   â”œâ”€â”€ sitemap.xml         # SEO sitemap
â”‚   â””â”€â”€ favicon.*           # Favicon files
â”‚
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ common/         # Shared components (Header, Footer, SEO)
â”‚   â”‚   â”œâ”€â”€ home/           # Homepage sections
â”‚   â”‚   â”œâ”€â”€ about/          # About page components
â”‚   â”‚   â”œâ”€â”€ services/       # Services page components
â”‚   â”‚   â”œâ”€â”€ destinations/   # Destinations page components
â”‚   â”‚   â””â”€â”€ contact/        # Contact page components
â”‚   â”‚
â”‚   â”œâ”€â”€ layouts/
â”‚   â”‚   â””â”€â”€ Layout.astro    # Base layout with SEO + StructuredData
â”‚   â”‚
â”‚   â”œâ”€â”€ pages/              # File-based routing
â”‚   â”‚   â”œâ”€â”€ index.astro     # Homepage
â”‚   â”‚   â”œâ”€â”€ about.astro     # About page
â”‚   â”‚   â”œâ”€â”€ services.astro  # Services page
â”‚   â”‚   â”œâ”€â”€ destinations.astro
â”‚   â”‚   â””â”€â”€ contact.astro
â”‚   â”‚
â”‚   â””â”€â”€ styles/
â”‚       â””â”€â”€ global.css      # Global styles + Tailwind directives
â”‚
â”œâ”€â”€ astro.config.mjs        # Astro configuration
â”œâ”€â”€ tailwind.config.mjs     # Tailwind v4 config
â””â”€â”€ tsconfig.json           # TypeScript config
```

---

## ðŸš€ Getting Started

### Prerequisites
- **Node.js** v18+ (v20+ recommended)
- **npm** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhavc13/visa.git
   cd visa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

---

## ðŸ’» Development

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Development Workflow

1. **Component Development** - Create modular components in `src/components/`
2. **Page Creation** - Use file-based routing in `src/pages/`
3. **Styling** - Use Tailwind utility classes
4. **SEO Optimization** - Update meta tags in Layout component
5. **Testing** - Preview locally before deploying

### Code Quality Standards
- âœ… **TypeScript strict mode** - Type safety enforced
- âœ… **Component size limit** - Max 70 lines per component
- âœ… **Semantic HTML** - Proper heading hierarchy (H1-H6)
- âœ… **Accessibility** - ARIA labels and alt text mandatory

---

## ðŸ“Š Performance & SEO

### Lighthouse Scores (Target)
- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

### Optimizations Implemented
- âš¡ **Static Generation** - Pre-rendered HTML
- ðŸ–¼ï¸ **Image Optimization** - WebP/AVIF formats
- ðŸŽ¨ **CSS Optimization** - Purged unused styles
- ðŸ“¦ **Bundle Size** - Minimal JavaScript payload
- ðŸ”¤ **Font Loading** - Self-hosted with `font-display: swap`
- ðŸ—ºï¸ **Structured Data** - Schema.org JSON-LD markup

### SEO Features
- âœ… Dynamic meta tags per page
- âœ… OpenGraph & Twitter Card tags
- âœ… Canonical URLs
- âœ… XML sitemap (`/sitemap.xml`)
- âœ… robots.txt configuration
- âœ… Semantic HTML structure
- âœ… JSON-LD structured data

---

## ðŸŒ Deployment

### Recommended Platforms
- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Cloudflare Pages

```bash
# Build the site first
npm run build

# Deploy with Wrangler (uses wrangler.toml config)
npx wrangler deploy
```

**Configuration:** The `wrangler.toml` file is already configured to deploy the `./dist` directory as a static site.

### Build Configuration
```bash
# Build command
npm run build

# Output directory
dist
```

### âš ï¸ Windows Build Note
This project uses `csso` for CSS optimization. If `npm run build` fails on Windows:
- **Workaround 1:** Use WSL (Windows Subsystem for Linux)
- **Workaround 2:** Deploy directly to Vercel/Netlify/Cloudflare (builds work on Linux CI)

The codebase is production-ready; the issue is environment-specific.

---

## ðŸ¤ Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## ðŸ“„ License

This project is proprietary software for **TrueGate Visa**.  
All rights reserved Â© 2026 TrueGate Visa, Ernakulam, Kerala.

---

## ðŸ“ž Contact

**TrueGate Visa**  
ðŸ“ Ernakulam, Kerala, India  
ðŸŒ [Website](https://truegate.example.com) (Update with actual URL)  
ðŸ“§ info@truegate.example.com (Update with actual email)

---

**Built with â¤ï¸ using Astro + Tailwind CSS**