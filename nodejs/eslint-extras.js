module.exports = {
  // rules that are covered by prettier,
  // but should be added if prettier is not used
  coveredByPrettier: {
    'max-len': ['warn', 100],
    indent: ['error', 2, {SwitchCase: 1, MemberExpression: 0}],
    'no-tabs': 2,
    semi: 2,
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
  },
  // rules to consider, but not currently part of the official TG coding guide
  thingsToConsider: {
    'no-console': 'error',
    camelcase: 'error',
  },
};
