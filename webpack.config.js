const webpack = require('webpack');
const Uglify = webpack.optimize.UglifyJsPlugin;
const Html = require('html-webpack-plugin');
module.exports =  {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.js$/, exclude: /(node_modules)/, use: ['babel-loader'] }
    ]
  },
  plugins: [ new Uglify(), new Html() ]
}