// react.js (ESM)
/// <reference types="eslint" />
/** @type {import("eslint").Linter.Config[]} */

import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const reactConfig = tseslint.config(
  {
    ignores: ['**/dist/**', '**/build/**'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],

      // Import sorting
      'no-duplicate-imports': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Code formatting
      'max-len': [
        'error',
        {
          code: 720,
          ignoreRegExpLiterals: true,
          tabWidth: 2,
        },
      ],
      'linebreak-style': 'off',

      // Console and logging
      'no-console': [1],

      // React specific
      'react/jsx-one-expression-per-line': [
        0,
        {
          allow: 'literal',
        },
      ],
      'react/jsx-filename-extension': [0],
      'react/jsx-fragments': [0],
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

      // General rules
      'no-case-declarations': 'off',
      'no-undef': 'off',
      'no-restricted-globals': 'off',
      'no-async-promise-executor': 'off',
      'max-classes-per-file': 0,
      'no-useless-catch': 0,
      'no-misleading-character-class': 0,
      'import/no-extraneous-dependencies': 0,
      'prefer-object-spread': 0,
      camelcase: 'off',
      'import/prefer-default-export': 'off',
      'no-underscore-dangle': 'off',
      'no-plusplus': 'off',
      'no-unused-vars': 'off',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages react related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put .. last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and . last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
);
