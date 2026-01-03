import reactHooks from 'eslint-plugin-react-hooks';
import tselint from 'typescript-eslint';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';


export default tselint.config(
    {
        name: '1',
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: globals.browser
        },
        extends: [
            tselint.configs.recommended
        ],
        ...stylistic.configs.customize({
            indent: 4,
            semi: true,
            braceStyle: '1tbs'
        })
    },
    reactHooks.configs.flat.recommended,
);
