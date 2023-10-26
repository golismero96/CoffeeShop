module.exports = {
  plugins: [
    'react', 'react-hooks', 'sonarjs',
    'react-native'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  extends: ['eslint:recommended', '@react-native', 'eslint-config-prettier', 'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:sonarjs/recommended','prettier'],
  parserOptions: {
    project: './tsconfig.json',
      ecmaVersion: 2021,
      ecmaFeatures: {
          jsx: true,
      },
      sourceType: 'module',
  },
  // overrides: [
  //   {
  //       files: ['**/__tests__/**'],
  //       env: { jest: true },
  //       plugins: ['jest', 'testing-library'],
  //       extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  //       rules: {
  //           'sonarjs/no-duplicate-string': 'warn',
  //           '@typescript-eslint/no-var-requires': 'warn',
  //           'sonarjs/no-identical-functions': 'warn',
  //       },
  //   },
  // ],
  rules: {
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
};
