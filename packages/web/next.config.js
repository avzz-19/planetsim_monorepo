const withTM = require('next-transpile-modules')(['core', 'components'], {
  resolveSymlinks: true,
})

module.exports = withTM({
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = ['.web.js', ...config.resolve.extensions]
    return config
  },
})
