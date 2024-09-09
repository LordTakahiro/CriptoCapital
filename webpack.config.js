const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules\/react-marquee-slider/,
        use: ['source-map-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      "path": require.resolve("path-browserify")
    } 
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
