module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // http://eslint.org/docs/rules/
    // 0 = ignore, 1 = warn, 2 = error
    'consistent-return': 'warn',
    'dot-notation': 'warn',
    'dot-location': ['error', 'property'],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'one-var': ['error', 'never'],
    'no-lonely-if': 'error',
    'no-new-object': 'error',
    'comma-style': ['error', 'last'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'spaced-comment': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': ['error', {multiline: true}],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'space-in-parens': ['warn', 'never'],
    'no-plusplus': 'off', // explicitely allow x++
    'no-param-reassign': 'warn',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prettier/prettier': ['error'],
  },
};
