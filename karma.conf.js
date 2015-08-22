var path = require('path');
var webpackConfig = require('./webpack.config');

var coverage = process.env.COVERAGE === 'true';

function getWebpackConfig() {
  var loaders = webpackConfig.module.loaders;
  webpackConfig.entry = './src/index.tests.js';

  if (coverage) {
    loaders.push({
      test: /^((?!(tests|mocks)\.).)*$/i, // all files not containing "tests." or "mocks."
      include: __dirname + '/src/',
      loaders: ['isparta'],
    });

    loaders.push({
      test: /index\.tests\.js/,
      include: __dirname + '/src/',
      loaders: ['babel'],
    });
  }
  return webpackConfig;
}

function getReporters() {
  var reps = ['progress'];
  if (coverage) {
    reps.push('coverage');
  }
  return reps;
}

module.exports = function(config) {
  var defaultConfig = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './src/index.tests.js'
    ],
    exclude: [],
    preprocessors: {
      '**/*.tests.js': ['webpack']
    },
    reporters: getReporters(),
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'}
      ]
    },
    webpack: getWebpackConfig(),
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    browserNoActivityTimeout: 20000,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-coverage'
    ]
  };

  config.set(defaultConfig);
};

