const webpack = require('webpack');
const path = require('path');


const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'client/src');


module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: SRC_DIR
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2']
        }

      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'scss-loader' }, { loader: 'sass-loader' }]
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
