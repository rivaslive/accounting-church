module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@assets': './assets',
        },
      },
    ],
  ],
};
