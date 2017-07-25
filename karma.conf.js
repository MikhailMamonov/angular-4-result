var webpack = require("webpack");
module.exports = function(config) {

  var appBase    = 'src/';       // transpiled app JS and map files
  var appSrcBase = appBase;      // app source TS files

  // Testing helpers (optional) are conventionally in a folder called `testing`
  var testingBase    = '/'; // transpiled test JS and map files
  var testingSrcBase = '/'; // test source TS files
  var path = require('path');
  var webpackConfig = require('./webpackhbjjh.config');
  var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
  var preprocessors = {};
  preprocessors[entry] = ['webpack'];
  var es2015 = require('babel-preset-es2017');

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      'karma-babel-preprocessor',
      require('karma-webpack'),
      'babelify',
      require('karma-jasmine'),
      require('babelify'),
      require('browserify'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    },
    client: {
      builtPaths: [appBase, testingBase], // add more spec base paths as needed
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
      'node_modules/karma-typescript-angular2-transform/src/test/transform.spec.ts',
      'node_modules/angular-2-local-storage/dist/**/*.js',
     'node_modules/moment/**/*.js',
      '**/*.spec.ts',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: appBase + '/systemjs.config.js', included: false, watched: false },
      { pattern: appBase + '/systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels

      // transpiled application & spec code paths loaded via module imports
      { pattern: appBase + '**/*.js', included: false, watched: true },
      { pattern: testingBase + '**/*.js', included: false, watched: true },


      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: appBase + '**/*.html', included: false, watched: true },
      { pattern: appBase + '**/*.css', included: false, watched: true },

      // Paths for debugging with source maps in dev tools
      { pattern: appBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false },
      { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: testingBase + '**/*.js.map', included: false, watched: false}
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for modules fetched by SystemJS
      '/base/src/node_modules/': '/base/node_modules/'
    },
    preprocessors: {
      '**/*.spec.ts': ['webpack']
    },
    exclude: [],
    reporters: ['progress', 'kjhtml'],
    browserify: {
        debug: true,
        extensions: ['.js', '.json', '.ts'],
        transform: [['babelify',{presets: [es2015]},{presets: ["es6"]}
        ]],
      plugin: ['tsify']
        },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
