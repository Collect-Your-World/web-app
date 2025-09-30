import { reactConfig } from '@collexworld/eslint-config/react';
import nextPlugin from '@next/eslint-plugin-next';

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];
