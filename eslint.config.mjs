// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// @ts-expect-error this doesn't have types :(
import qwikPlugin from 'eslint-plugin-qwik';

export default tseslint.config(
  {
    ignores: [
      // Build and cache
      'dist/**',
      'dist-dev/**',
      'build/**',
      '.cache/**',
      'node_modules/**',
      
      // System and IDE
      '**/*.log',
      '**/.DS_Store',
      '.history/**',
      '.vscode/**',
      
      // Lock files (except pnpm)
      'yarn.lock',
      'package-lock.json',
      
      // Test files (if you want to ignore them)
      '**/*.spec.tsx',
      '**/*.spec.ts',

      // Config files
      'tailwind.config.js'
    ]
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Add browser globals
        window: 'readonly',
        document: 'readonly',
        // Add Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'qwik': qwikPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'prefer-spread': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
    },
  },
);