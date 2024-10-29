const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    root: true,
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 'off',
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        // eslint-plugin-prettier by default looks into .prettierrc and "merge" rules with eslint
        // however we must explicitly set level of warning
        'prettier/prettier': 'error',
        // we want namespace
        '@typescript-eslint/no-namespace': 'off',
        // we want to throw new Error
        '@typescript-eslint/no-throw-literal': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/button-has-type': 'error',
        'react/boolean-prop-naming': 'error',
        'react/destructuring-assignment': 'warn',
        // due to React >= 17
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        eqeqeq: 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
});
