const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const path = require('path');


const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'client');


module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: DIST,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: SRC
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2']
        }

      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.png|jpg$/,
        use: [{ loader: 'url-loader' }],
        exclude: /node_modules/
      },
    ]
  },
};
