import path from 'path';

import webpack from 'webpack';

import packageData from './package.json';

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.jsx',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
