var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    mode: "development",
    watch: true,
    target: 'node',
    externals: nodeModules,
    entry: "./server.js",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
      publicPath : '/'
    },
    resolve: {
      extensions: [".jsx", ".js", ".json"]
    },
    devtool: "source-map",
    module: {
      rules: [
        { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        { test: /\.css$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    }
  };