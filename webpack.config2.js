var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


var config = {
  entry:{
    app: './src/main.ts'},
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },

  plugins:[
    new ngAnnotatePlugin({
      add: true,
      // other ng-annotate options here
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === "test"
    })
  ],
  externals: [nodeExternals()],
  target: 'web',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        loader:"babel-loader",
        query:{
          presets:["env"]
        }
      }
    ],
    loaders: [// loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /src.*\.js$/,
        use: [{ loader: 'ng-annotate-loader' }],
      },
      { test: /\.js?$/, loader: "amdi18n-loader" },
      {
        test: /\.json$/,
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

module.exports = config;
// if(process.env.NODE_ENV === "production"){
//   config.output.path = __dirname + "/dist";
//   config.plugins.push(new webpack.optimize.UglifyJsPlugin());
//   config.devtool = 'source-map';
// }


