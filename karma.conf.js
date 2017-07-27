// var webpack = require("webpack");
module.exports = function(config) {

  var appBase    = 'src/';       // transpiled app JS and map files
  var appSrcBase = appBase;      // app source TS files

  // // Testing helpers (optional) are conventionally in a folder called `testing`
  // var testingBase    = '/'; // transpiled test JS and map files
  // var testingSrcBase = '/'; // test source TS files
  // var path = require('path');
  // var webpackConfig = require('./webpack3.config');
  // var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
  // var preprocessors = {};
  // preprocessors[entry] = ['webpack'];
  var es2015 = require('babel-preset-es2017');

  config.set({
    basePath: '',
    frameworks: ['jasmine','@angular/cli'],

    plugins: [
      'karma-babel-preprocessor',
      // require('karma-webpack'),

      'babelify',
      require('karma-jasmine'),
      require('babelify'),
      require('browserify'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('@angular/cli/plugins/karma'),
      require('karma-jasmine-html-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'test-main.js',
      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      // optionally extend SystemJS mapping e.g., with barrels

      // transpiled application & spec code paths loaded via module imports

    ],

    preprocessors: {
      './src/**/*spec.ts': ['@angular/cli']
      // './src/**/*.js': ['webpack'],
      // './src/**/*.ts': ['webpack']
      // 'node-modules/moment*/**/*.js': ['webpack'],
      // 'node-modules/babel*/**/*.js': ['webpack'],
      // 'node-modules/karma*/**/*.js': ['webpack'],
      // 'node-modules/rxjs/**/*.js': ['webpack'],
      // 'node-modules/ts*/**/*.js': ['webpack'],
      // 'node-modules/uuid*/**/*.js': ['webpack'],
      // 'node-modules/node-uuid/**/*.js': ['webpack'],
    },
    exclude: [],
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    reporters: ['progress', 'kjhtml'],
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    browserify: {
        debug: true,
        extensions: ['.js', '.json', '.ts'],
        transform: [['babelify',{presets: [es2015]},{presets: ["es6"]}
        ]],
      plugin: ['tsify']
        },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'coverage-istanbul']
      : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
