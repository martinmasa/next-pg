const OFF = 0
// const WARN = 1
const ERROR = 2

module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [ERROR],
    'arrow-body-style': OFF,
    'prefer-arrow-callback': OFF,
  },
}
