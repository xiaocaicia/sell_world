module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren':0,
    'no-useless-return':0,
    'no-undef':0,
    'comma-spacing':0,
    'no-unused-vars':0,
    'no-trailing-spaces':0,
    'indent':0,
    'no-multiple-empty-lines':0,
    'comma-dangle':0,
    'semi':0,
    'space-before-blocks':0,
    'padded-blocks':0,
    'key-spacing':0,
    'spaced-comment':0,
    'vue/no-unused-vars':0,
    'object-curly-spacing':0,
    'no-unreachable':0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
