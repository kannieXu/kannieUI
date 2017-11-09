// Karma configuration
const webpackConfig = require('../../build/webpack.test.conf');
module.exports = config => {
  config.set({
    browsers: ['Chrome'], // 测试启动的浏览器清单
    frameworks: ['mocha', 'sinon-chai'], // 测试框架&&断言库
    files: ['./file.js'],
    preprocessors: { // 预处理器
      './file.js': ['webpack', 'sourcemap', 'coverage']
    },
    webpack: webpackConfig,
    plugins: [ 
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ],
    reporters: ['spec', 'coverage', 'progress'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO, // 记录标准(config.LOG_DISABLE/config.LOG_ERROR/config.LOG_WARN/config.LOG_DEBUG/config.LOG_INFO)
    autoWatch: false,
    concurrency: Infinity
  })
}
