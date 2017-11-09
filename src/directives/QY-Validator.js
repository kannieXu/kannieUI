class V {
  constructor (o = {
    inputCheckClass: 'input-check-failed',
    finalCheckClass: 'submit-check-failed',
    errorMsgShow: 'qyValidator-msg-show',
    errorMsgHidden: 'qyValidator-msg-hidden'
  }) 
  {
    // 需要验证的表单集合
    this._cfg = {
        // 空白文字
      nonvoid (v, bool) {
        if (bool) {
          return v.trim() ? 0 : ['nonvoid']
        } else {
          return 0
        }
      },
        // 正则
      reg (v, reg) {
        return reg.test(v) ? 0 : ['reg']
      },
        // 区间
      limit (v, interval) {
        return (v >= interval[0] && v <= interval[1]) ? 0 : ['limit']
      },
        // 等于
      equal (v, target) {
        return v === target ? 0 : ['equal']
      },
        // 不等于
      unequal (v, target) {
        return v !== target ? 0 : ['unequal']
      }
    }
      // 常用正则
    this._regList = {
      UserName: /^[\w|\d]{4,16}$/,
      Password: /^[\w!@#$%^&*.]{6,16}$/,
      Mobile: /^1[3|5|8]\d{9}$/,
      RealName: /^[\u4e00-\u9fa5 ]{2,10}$/,
      IdCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      BankNum: /^\d{10,19}$/,
      Money: /^([1-9]\d*|0)$/,
      Email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    }
      // 错误信息提醒
    this._ERR_MSG = {
      nonvoid: '不能为空',
      reg: '格式错误',
      limit: '您输入的值不在规定的区间内',
      equal: '不一致',
      unequal: '重复'
    }
    this.inputCheckClass = o.inputCheckClass
    this.finalCheckClass = o.finalCheckClass
    this.errorMsgHidden = o.errorMsgHidden
    this.errorMsgShow = o.errorMsgShow
  }
  config ({
    inputCheckClass = 'input-check-failed',
    finalCheckClass = 'submit-check-failed',
    errorMsgShow = 'qyValidator-msg-show',
    errorMsgHidden = 'qyValidator-msg-hidden'
  } = {}) {
    this.inputCheckClass = inputCheckClass
    this.finalCheckClass = finalCheckClass
    this.errorMsgShow = errorMsgShow
    this.errorMsgHidden = errorMsgHidden
  }
  get cfg () {
    return this._cfg
  }
    // 添加类
  addClass (el, className) {
    let classArr = el.className.split()
    if (classArr.indexOf(className) === -1) {
      classArr.push(className)
      el.className = classArr.join(' ')
    }
  }
  // 移出类
  removeClass (el, className) {
    let reg = new RegExp('(\\s' + className + '|' + className + '\\s)', 'g')
    el.className = el.className.replace(reg, '')
  }
    // 检查
  check (v, el, vm) {
    let checkValue
    let _this = this
    if (v.arg === 'reg') {
      if (!this._regList[v.value.format]) {
        checkValue = typeof v.value.format === 'string' ? new RegExp(v.value.format) : v.value.format
      } else {
        checkValue = this._regList[v.value.format]
      }
    } else {
      checkValue = vm.$data[v.value.format] || v.value.format
    }
    let ves = this.cfg[v.arg](el.value, checkValue)
    if (ves === 0) { el._qyValidator.validated = true } else { el._qyValidator.validated = false }
    if (el._qyValidator.validated && v.value.async) {
      el._qyValidator.promise = new Promise((resolve, reject) => {
        this.fetch({
          url: v.value.async.url,
          type: v.value.async.type,
          data: {
            phone: el.value
          },
          dataType: v.value.async.dataType,
          success: function (response) {
            let code = _this.findError(response, v.value.code)
            if (code === v.value.status) {
              resolve(response.data.validator.msg)
            } else {
              el._qyValidator.validated = false
              let msg = _this.findError(response, v.value.urlcode)
              reject(msg)
            }        
          },
          fail: function (response) {
            console.log(response)
          }
        })
      })
    }
    return ves
  }
  // 异步校验请求
  fetch (opt) {
    let options = opt || {}
    options.type = (opt.type || 'GET').toUpperCase()
    options.dataType = opt.dataType || 'json'
    // 格式化参数
    let arr = []
    for (let name in opt.data) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(opt.data[name]))
    }
    arr.push(('v=' + Math.random()).replace('.', ''))
    let params = arr.join('&')
    let xhr = new XMLHttpRequest()
    // 接收
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let status = xhr.status
        if (status >= 200 && status < 300) {
          options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML)
        } else {
          options.fail && options.fail(status)
        }
      }
    }
    // 连接 和 发送
    if (options.type === 'GET') {
      xhr.open('GET', options.url + '?' + params, true)
      xhr.send(null)
    } else if (options.type === 'POST') {
      xhr.open('POST', options.url, true)
      // 设置表单提交时的内容类型
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(params)
    }
  }
  // 异步校验查错误信息
  findError (obj, msg) {
    let _this = this
    if (!obj && JSON.stringify(obj[i]) === '{}') {
      return
    }
    if (obj[msg]) {
      return obj[msg]
    } else {
      for (let i in obj) {
        if((obj[i].constructor === Object || obj[i].constructor === Array) && JSON.stringify(obj[i]) !== '{}') {
          return(_this.findError (obj[i], msg))
        }
      }
    }
  }
  // 信息
  msg (v, el, ves, msg) {
    // 错误信息附加信息
    let str = ''
    switch (ves[0]) {
      case 'nonvoid':
        str = v.value.title
        el._qyValidator.msg = v.value.request || str + this._ERR_MSG[ves]
        break
      case 'reg':
        str = '您输入的' + v.value.title + '格式错误'
        el._qyValidator.msg = v.value.request || str
        break
      case 'limit':
        str = +el.value < v.value.format[0] ? v.value.title + '值应该大于' + v.value.format[0] : v.value.title + '值应该小于' + v.value.format[1]
        el._qyValidator.msg = v.value.request || this._ERR_MSG[ves] + str
        break
      case 'equal':
        str = '两次输入的' + v.value.title
        el._qyValidator.msg = v.value.request || str + this._ERR_MSG[ves]
        break
      case 'unequal':
        str = '两次输入的' + v.value.title
        el._qyValidator.msg = v.value.request || str + this._ERR_MSG[ves]
        break
      case 'ajax':
        el._qyValidator.msg = v.value.request || msg
        break
      default:
        el._qyValidator.msg = '[' + v.value.title + ']验证通过'
    }
  }
  install (Vue, options) {
    // qyValidator本身
    let self = this
      // 验证上的指令
    Vue.directive('qyValidator-input', {
      bind (el, binding, vnode) {
          // 指令值
        let v = {
          value: binding.value || '',
          arg: binding.arg || ''
        }
            // 当前实例
        let vm = vnode.context
        let qyValidator = vm._qyValidator
          // 给el添加_qyValidator
        el._qyValidator = {
          dirty: false,
          v_type: v.arg,
          indeed_value: v.value.format,
          validated: false,
          msg: '未进行验证',
          title: v.value.title
        }
            // 初始化
        qyValidator.forms[v.value.id] = el
            // 给该元素添加监听事件验证
        el.onblur = function () {
            // 查看当前表单是否输入值
          if (!el._qyValidator.dirty) el._qyValidator.dirty = true
              // 进行验证
          let ves = 0
          ves = self.check(v, el, vm)
          // self.msg(v, el, ves)
              // 对每个元素设置
          if (el._qyValidator.promise) {
            el._qyValidator.promise.then((val) => {
              self.removeClass(el, self.inputCheckClass)
              vm.$emit('qyValidator-checked')
            }, (val) => {
              self.addClass(el, self.inputCheckClass)
              self.msg(v, el, ['ajax'], val)
              vm.$emit('qyValidator-checked')
            })
          } else {
              // 如果验证错误则添加一个类
            self.msg(v, el, ves)
            if (el._qyValidator.validated) {
              self.removeClass(el, self.inputCheckClass)
            } else {
              self.addClass(el, self.inputCheckClass)
            }
            vm.$emit('qyValidator-checked')
          }
        }
      }
    })
      // 输出错误信息方法
    Vue.directive('qyValidator-msg', {
      bind (el, binding, vnode) {
        let v = {
          arg: binding.arg
        }
        let vm = vnode.context
        self.addClass(el, self.errorMsgHidden)
            // 自定义事件，监听目标值的变化
        vm.$on('qyValidator-checked', function () {
          let listener = vm._qyValidator.forms[v.arg]
          if (listener._qyValidator.validated) {
            self.removeClass(el, self.errorMsgShow)
            self.addClass(el, self.errorMsgHidden)
            el.innerHTML = ''
          } else if (!listener._qyValidator.validated && listener._qyValidator.dirty) {
            self.removeClass(el, self.errorMsgHidden)
            self.addClass(el, self.errorMsgShow)
            el.innerHTML = listener._qyValidator.msg
          }
        })
      }
    })
    // 组件间调用时传递校验不通过的信息
    Vue.directive('qyValidator-error', {
      bind (el, binding, vnode) {
        let v = {
          arg: binding.value
        }
        let vm = vnode.context
        vm.$on('qyValidator-checked', function () {
          let listener = vm._qyValidator.forms[v.arg.id]
          if (listener._qyValidator.validated) {
            //
          } else if (!listener._qyValidator.validated && listener._qyValidator.dirty) {
            this.$emit('errormsg', listener._qyValidator.msg)
          }
        })
      }
    })
      // 提交按钮自定认证
    Vue.directive('qyValidator-final-check', {
      bind (el, binding, vnode) {
        let v = {
          arg: binding.arg || '',
          value: binding.value || '',
          expression: binding.expression || ''
        }
        let vm = vnode.context
          // 判断指定的表单是否验证通过
        vm.$on('qyValidator-checked', () => {
          let validated = true
          // 如果传递了key选项择进行指定的验证
          if (v.value.keys) {
            validated = v.value.keys.every((item, index) => {
              return vm._qyValidator.forms[item]._qyValidator.validated
            })
          } else {
            for (let item in vm._qyValidator.forms) {
              if (item === 'undefined') {
                continue
              } else {
                if (!vm._qyValidator.forms[item]._qyValidator.validated) {
                  validated = false
                  break
                }
              }
            }
          }
          if (!validated) { // 验证未通过
            el.onclick = () => {}
            self.addClass(el, self.finalCheckClass)
          } else { // 验证通过
            self.removeClass(el, self.finalCheckClass)
            if (v.arg) {
              el.onclick = vm[v.arg]
            } else {
              el.onclick = v.value(v.expression)
            }
          }
        })
      }
    })
    Vue.prototype._qyValidator = {
      forms: {}
    }
  }
}
export default V
