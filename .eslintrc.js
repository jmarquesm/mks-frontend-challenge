module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    // Prettier rules
    'prettier/prettier': 'warn',
    // Javascript rules
    'no-debugger': 'warn',
    'spaced-comment': ['warn', 'always'],

    // Typescript rules
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    "@typescript-eslint/no-non-null-assertion": "off",

    // React rules
    'react/jsx-key': 'warn',

    // Next rules
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
}