var webpack = require('webpack')
module.exports = {
  entry: ['./src/index.js', './src/style.css'],
  output: {
    path: './dist/',
    filename: 'index.js'
  },
  module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
        }]
    }
}