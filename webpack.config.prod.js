const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssPresetEnv = require('postcss-preset-env')({
  features: {
    autoprefixer: false,
  },
});
const webpack = require('webpack');
require('file-loader');
require('url-loader');

module.exports = {
  entry: [require.resolve('./config/polyfills'), './src/index.js'],
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('typings-for-css-modules-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              namedExport: true,
              localIdentName: '[folder]-[local]-[hash:base64:5]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssImport,
                postcssMixins,
                postcssPresetEnv,
                postcssFlexbugsFixes,
                autoprefixer(),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
