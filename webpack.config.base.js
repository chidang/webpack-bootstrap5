const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['./app/src/app.js', './app/src/scss/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {
          partialResolver: function(partial, callback){
              // should pass the partial's path on disk
              // to the callback. Callback accepts (err, locationOnDisk)
          }
        }
      }
    }), 
    new HtmlWebpackPlugin({
      title: 'My awesome service',
      template: './app/src/index.hbs',
      inject: "body",
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      minify: false
    })
  ]
};
