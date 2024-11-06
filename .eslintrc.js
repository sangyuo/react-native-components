module.exports = {
  root: true,
  extends: '@react-native',
  plugins: {
    prettier: true,
  },
  rules: {
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
