module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["react-app", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        arrowFunctions: true,
        modules: true,
      },
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["babel", "react", "prettier"],
  rules: {
    "import/no-named-as-default": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn",
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1,
  },
};
