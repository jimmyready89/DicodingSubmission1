const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [{
        urlPattern: /https:\/\/restaurant-api\.dicoding\.dev\/(list|detail)/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'restaurant-api-dicoding-dev',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24,
          },
          cacheableResponse: { statuses: [200] },
        },
      },
      {
        urlPattern: /https:\/\/restaurant-api\.dicoding\.dev\/images/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'restaurant-api-dicoding-dev-images',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24,
          },
        },
      }],
    }),
  ],
};
