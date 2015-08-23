/* eslint-env node */
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtools: 'eval',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: process.env.NODE_ENV === 'development'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
  },
  eslint: {
    emitError: false,
    failOnError: false,
    failOnWarning: false,
    quiet: true
  }
};
