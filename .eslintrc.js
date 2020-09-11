module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-var": 0,
    'semi': 0,
    "indent": ["off", 2],
    "comma-dangle": [2, "never"],
    "global-require": 0,
    "linebreak-style": [0 ,"error", "windows"],
    "array-bracket-spacing": ["error","always"],
    "object-curly-spacing": ["error","always"],
    "@typescript-eslint/member-delimiter-style": "off"
  }
};
