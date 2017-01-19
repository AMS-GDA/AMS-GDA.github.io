
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    },
};
