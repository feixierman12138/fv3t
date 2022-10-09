module.exports = {
  root: true,
  env: { node: true, 'vue/setup-compiler-macros': true },
  parser: 'vue-eslint-parser', // 所有文件的入口解析器
  parserOptions: {
    parser: '@typescript-eslint/parser', // ts解析器，vue解析器在遇到ts时使用ts解析器
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // "plugin:vue/recommended" // vue2使用
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-undef': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
  },
}
