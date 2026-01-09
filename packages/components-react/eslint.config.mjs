import reactHooks from 'eslint-plugin-react-hooks';
import tselint from 'typescript-eslint';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{ts,tsx,mjs}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: globals.browser,
        },
        extends: [
            tselint.configs.recommended,
        ],
        ...stylistic.configs.customize({
            indent: 4,
            semi: true,
            braceStyle: '1tbs',
        }),
    },
    {
        files: ['**/*.{ts,tsx,mjs}'],
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@stylistic/space-unary-ops': ['error', { words: false, nonwords: true }],
        },
    },
    reactHooks.configs.flat.recommended,
]);
