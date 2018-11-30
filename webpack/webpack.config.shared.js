const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const alias = require('./alias');

const processEnv = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 80,
};

const styledComponentsTransformer = createStyledComponentsTransformer();

const publicPath = '/';
const outputPath = path.join(__dirname, '..', 'dist');
const rootDir = path.resolve(__dirname, '..');
const srcPath = path.join(__dirname, '..', 'src');
const entryPoint = path.join(__dirname, '..', 'src', 'index.tsx');

module.exports = {
  publicPath,
  outputPath,
  rootDir,
  srcPath,
  entryPoint,
  processEnv,
  target: 'web',
  output: {
    path: outputPath,
    publicPath: publicPath,
    filename: '[name].js',
  },
  module: {
    noParse: [
      /proj4\/dist\/proj4.js/,
      /openlayers\/dist\/ol.js/,
    ],
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      },
      { test: /\.(a?png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|otf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      srcPath,
    ],
    alias: alias,
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Automatically resolve certain extensions
    enforceExtension: false, // If true, it will not allow extension-less files
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        host: JSON.stringify(processEnv.host),
        port: JSON.stringify(processEnv.port),
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      hash: true,
    }),
  ],
}
