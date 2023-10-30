module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "@react-native",
      "eslint-config-prettier",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:sonarjs/recommended",
      "prettier"
  ],
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
      "react", 'react-hooks', 'sonarjs', 'react-native'
  ],
  "rules": {
        // قوانین TypeScript
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
    
        // قوانین React Native
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'react-native/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react-native/prop-types': 'off', // غیرفعال کردن پروپ‌تایپ‌ها به خاطر استفاده از TypeScript
        'react-native/jsx-uses-vars': 1,
    
        // قوانین کلی جاوااسکریپت
        'indent': ['error', 2], // اجبار به تورفتگی با اندازه 2 فضای خالی
        'semi': ['error', 'always'], // اجبار به استفاده از ویرگول (;) برای پایان توکن‌ها
      }
}