# web-platform

A modern monorepo for web applications, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm turbo run dev --filter=@collexworld/ui
pnpm --filter ./apps/web-app dev
```

## 📁 Project Structure

### Apps

- **`apps/web-app/`** - web-app website built with Next.js
  - Modern landing page with hero section
  - Responsive design with custom animations
  - Built with shared UI components and assets

### Packages

- **`@collexworld/ui`** - Shared React component library
- **`@collexworld/assets`** - Shared CSS, fonts, and Tailwind configs
- **`@collexworld/eslint-config`** - Shared ESLint configuration
- **`@collexworld/jest`** - Shared Jest testing configuration

## 🛠️ Development

For detailed development instructions, package documentation, and best practices, see the **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)**.

### Key Commands

```bash
# Build all packages and apps
pnpm turbo run build

# Run development server for specific app
pnpm turbo run dev --filter=web-app

# Lint and typecheck
pnpm turbo run lint
pnpm turbo run typecheck

# Run tests
pnpm turbo run test
```

## 🏗️ Architecture

This monorepo uses:

- **pnpm workspaces** for dependency management
- **Turborepo** for build orchestration and caching
- **Next.js** for the web-app app
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** for accessible components

## 📖 Documentation

- **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** - Complete development guide
- **[apps/web-app/README.md](./apps/web-app/README.md)** - web-app app specific docs
