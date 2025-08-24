import html from '@html-eslint/eslint-plugin';

export default [
  {
    ...html.configs['flat/recommended'],
    files: ['src/**/*.njk', 'src/**/*.twig'],
    rules: {
      '@html-eslint/quotes': ['error', 'single'],
      '@html-eslint/indent': ['error', 2],
      // Disable rules that conflict with Prettier's Twig formatting
      '@html-eslint/no-extra-spacing-attrs': 'off',
      '@html-eslint/element-newline': 'off',
      '@html-eslint/indent-style': 'off',
    },
  },
];
