const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PagesConfig = require('./configs/pages_config.js');

const pages_config = PagesConfig.page_options.map(
  page_option => new HtmlWebpackPlugin({
      title: page_option.title,
      template: path.resolve(__dirname, page_option.template),
      filename: page_option.filename,
      inject: true,
      minify: false,
      chunks: ['core_js', 'core_css'].concat(page_option.chunks)
    })
);

module.exports = {
  mode: 'development',
  entry: PagesConfig.entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
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
    ...pages_config,
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      minify: false
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
