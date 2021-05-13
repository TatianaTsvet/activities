module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        modules: true,
      },
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 0,
  },
};
