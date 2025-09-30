# @collexworld/ui

A comprehensive UI component library for the Collexworld Platform, built with React, TypeScript, and Tailwind CSS.

## Features

- 🌙 **Dark mode support** for all components
- 📱 **Fully responsive** with mobile-first design
- ⚡ **TypeScript-first** with comprehensive type definitions
- 🎯 **Atomic design** pattern (atoms, molecules, organisms)
- 🔧 **Customizable** with variant props and className support

## Installation

The UI package is already included in the workspace. For external projects:

```bash
pnpm add @collexworld/ui
```

## Development

### Adding New Components

1. Create the component in the appropriate folder:
   - `src/components/atoms/` for basic elements
   - `src/components/molecules/` for compound components
   - `src/components/organisms/` for complex components

2. Export from the component's `index.ts`:

   ```tsx
   export * from './ComponentName';
   ```

3. Export from the category's `index.ts`:

   ```tsx
   export * from './ComponentName';
   ```

4. Export from the main `index.ts`:
   ```tsx
   export * from './components';
   ```

### Styling Guidelines

- Use Tailwind CSS classes
- Include dark mode variants
- Follow the Bitcoin theme color palette
- Add hover and transition effects
- Make components responsive
- Use the `cn` utility for conditional classes

### TypeScript Guidelines

- Define comprehensive interfaces for props
- Use descriptive type names
- Export types from component files
- Use React.FC sparingly, prefer explicit typing

## Contributing

1. Follow the atomic design pattern
2. Include TypeScript interfaces
3. Add dark mode support
4. Make components responsive
5. Include hover effects and transitions
6. Follow the Bitcoin theme
7. Export through index files
8. Add comprehensive documentation

## License

ISC
