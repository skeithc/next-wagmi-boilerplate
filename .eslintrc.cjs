module.exports = {
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
