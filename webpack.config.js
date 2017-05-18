const wepback = require('webpack');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
    ]
  }
}