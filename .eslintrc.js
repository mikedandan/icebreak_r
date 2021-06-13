module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['off'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'error',
    'react/no-did-update-set-state': ['off'],
  },
}
