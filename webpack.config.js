var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './frontend/entry.jsx'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: true
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|public)/
      }
    ],
    loaders: [
      { test: /\.jsx$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, 'frontend'),
        exclude: /node_modules/},
      { test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'frontend'),
        exclude: /node_modules/},
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
      { test: /\.css$/,
        loader: 'style!css' }
    ]
  }
}
