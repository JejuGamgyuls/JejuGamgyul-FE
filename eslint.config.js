import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import'; // 플러그인 추가
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintPluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': ['warn'],
      // import 순서 강제
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // 내장 모듈과 외부 모듈을 먼저
            ['internal'], // 내부 모듈
            ['parent', 'sibling', 'index'], // 상위/형제/인덱스 모듈 순서로
          ],
          'newlines-between': 'always', // 그룹 간 줄바꿈을 강제
          alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순으로 정렬
        },
      ],
    },
  },
];
