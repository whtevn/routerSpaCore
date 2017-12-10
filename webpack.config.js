const webpack = require('webpack');
const path = require('path');

const srcPath  = path.join(__dirname, `/src`);
const distPath = path.join(__dirname, '/build');

const defaultApiBase = "http://localhost:3000";
const defaultWebsocketBase = "ws://localhost:28080";

module.exports = {
  devtool: '#source-map',
  context: srcPath,
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: distPath,
    filename: `index.js`,
		libraryTarget: "commonjs"
  },
  resolve: {
    modules: ["node_modules"],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env', 'react'],
						plugins: ['transform-object-rest-spread'],

					}
        }
      }
    ]
  }
};
