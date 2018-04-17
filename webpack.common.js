const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');


const paths = {
  DIST: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'client/src'),
  JS: path.resolve(__dirname, 'client/src/js'),
};

// Configuration
module.exports = {
  entry: [
    path.join(paths.JS, 'index.js')
  ],
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    // extract css to its own bundled file
    new ExtractTextPlugin('style.bundle.css'),
    new cleanWebpackPlugin(['build']),
    new TransferWebpackPlugin([
      { from: 'client/src/assets' }
    ])
  ],
  // use bael loader for js and jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // set up css loaders
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
    ],
  },
  // Enable importation of JS files without adding extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
