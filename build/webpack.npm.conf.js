var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    'js/qy_pc': './src/index.js'
  },
  module: {
    rules: (utils.styleLoaders({ sourceMap: config.npm.cssSourceMap })).concat([
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: config.npm.cssSourceMap,
            extract: true
          })
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ])
  },

  output: {
    path: config.npm.assetsRoot,
    library: 'qy_pc',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.npm.env
    }),
    new ExtractTextPlugin({
      filename: path.posix.join(config.npm.assetsSubDirectory, 'css/qy_pc.css')
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ],

  devtool: '#source-map',

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'doc': resolve('doc')
    }
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
};
