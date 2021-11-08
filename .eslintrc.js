module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
  },
  "parser": "@babel/eslint-parser",
  "rules": {
    "indent": [
      "warn",
      2,
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "semi": [
      "warn",
      "never"
    ]
  },
}