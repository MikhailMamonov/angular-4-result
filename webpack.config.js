var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
var path = require('path');

var config = {
  context:  path.join(__dirname, '/src/app'),
  devtool: 'inline-source-map',
  entry: './app.module.ts',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },

  plugins:[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === "test"
    })
  ],
  externals: [nodeExternals()],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader:"babel-loader",
        query:{
          presets:["env"]
        }
      }
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ng-annotate-loader',
},
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader?' + JSON.stringify({
          transpileOnly: true
        }) },
      { test: /\.js?$/, loader: "amdi18n-loader" },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'raw-loader!sass-loader' },
      { test: /\.js$/, exclude: /node_modules/, loaders:['ng-annotate','babel?presets=es2015'],exclude: /node_modules/},
      { test: /\.html$/,exclude: /node_modules/, loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/,exclude: /node_modules/, loader: 'style!css',exclude: /node_modules/}
    ]
  }
};
if(process.env.NODE_ENV === "production"){
  config.output.path = __dirname + "/dist";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = 'source-map';
}
module.exports = config;

