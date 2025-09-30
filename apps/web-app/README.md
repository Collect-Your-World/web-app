# web-app

The web-app website, built with Next.js 15 and the App Router.

## 🚀 Quick Start

```bash
# From the monorepo root
pnpm install
pnpm turbo run dev --filter=@collexworld/ui
pnpm --filter ./apps/web-app dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── modules/
│   └── home/              # Home page module
│       ├── components/    # Home-specific components
│       └── data.ts        # Home page data
└── shared/                # Shared utilities and components
    ├── components/        # Reusable components
    ├── styles/           # Global styles
    └── utils/            # Utility functions
```

## 🎨 Features

- **Modern Hero Section** with animated elements
- **Responsive Design** optimized for all devices
- **Custom Animations** including blinking cursor effects
- **Shared UI Components** from `@collexworld/ui`
- **Custom Fonts** (Bebas Neue, BLMelodyMono, Fractul)
- **Video Background** support

## 🛠️ Development

This app uses:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shared packages** from the monorepo

### Key Components

- `HeroSection` - Main landing page hero
- `Header` - Navigation and branding
- `Footer` - Company capabilities showcase
- `Content` - Main content area

## 📦 Dependencies

- Uses shared packages: `@collexworld/ui`, `@collexworld/assets`
- See [DEVELOPMENT_GUIDE.md](../../DEVELOPMENT_GUIDE.md) for detailed setup

## 🚀 Deployment

Built for deployment on Vercel or any Next.js-compatible platform.

```bash
pnpm build
```
