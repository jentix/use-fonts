const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const sharedConfig = require('./webpack.config.shared');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: sharedConfig.target,
  context: sharedConfig.rootDir, // the home directory for webpack the entry and module.rules.loader option
  entry: {
    app: [
      sharedConfig.entryPoint,
    ],
  },
  output: sharedConfig.output,
  module: sharedConfig.module,
  resolve: sharedConfig.resolve,
  plugins: [
    ...sharedConfig.plugins,
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false,
    }),
    new CleanWebpackPlugin(['dist'], { root: sharedConfig.rootDir }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap: true })],
  },
};
