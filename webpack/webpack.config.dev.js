const webpack = require('webpack');

const sharedConfig = require('./webpack.config.shared');

module.exports = {
  mode: 'development',
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
      NODE_ENV: 'development',
      DEBUG: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: sharedConfig.outputPath,
    port: 3000,
    compress: true, // Enable gzip compression for everything served
    hot: true,
    historyApiFallback: true,
    publicPath: sharedConfig.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};
