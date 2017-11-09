import Vue from 'vue'
import kannieUI from '@/index.js'
Vue.use(kannieUI)
Function.prototype.bind = require('function-bind');
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
const srcContext = require.context('../../src', true, /index\.js/);
srcContext.keys().forEach(srcContext);