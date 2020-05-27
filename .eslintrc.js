module.exports = {
  "root": [
    'plugin:vue/essential',
    'eslint:recommended'
  ],

  "env": {
    "node": true
  },

  "extends": [
    "plugin:vue/essential",
    // "eslint:recommended"
  ],

  "parserOptions": {
    "parser": "babel-eslint"
  },

  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-undef': 'off',
    'vue/no-unused-vars': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}