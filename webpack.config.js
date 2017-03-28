var path = require('path');

module.exports = [
  {
    entry: {
      bundle: './client/src/index.js',
    },
    output: {
      path: path.resolve('./client/dist'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            plugins: [
              'transform-decorators-legacy',
            ],
          }
        },
      ]
    },
    externals: {
      'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    }
  }, {
    entry: {
      test: './test/client/index.js',
    },
    output: {
      path: path.resolve('./client/dist'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            plugins: [
              'transform-decorators-legacy',
            ],
          }
        },
      ],
    },
    externals: {
      'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    }
  }
]
