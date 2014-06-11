var debug = require('debug')
  , trace = require('jstrace')

exports = module.exports = Debug

function Debug(name) {
  this.debuggers = {}
  return function() {
    var self = this
    if (this.debuggers.hasOwnProperty(name)) {
      this.debug = this.debuggers[name]
    } else {
      this.debug = debug(name)
      this.debuggers[name] = this.debug
    }
    var args, len, i
    switch (arguments.length) {
      case 0:
        break
      case 1:
        self.debug.call(self.debug, arguments[0])
        trace.call(trace, arguments[0], {})
        break
      case 2:
        if (~arguments[0].indexOf('%j')) {
          self.debug.call(self.debug, arguments[0], arguments[1])
          arguments[0] = arguments[0].replace(/\s?%j\s?/g, '')
          trace.call(trace, arguments[0], arguments[1])
        } else {
          trace.call(trace, arguments[0], arguments[1])
          arguments[0] = arguments[0] + ' %j'
          self.debug.call(self.debug, arguments[0], arguments[1])
        }
        break
      default:
        len = arguments.length
        args = new Array(len-1)
        for (i=1; i<len; i++) {
          args[i-1] = arguments[i]
        }
        self.debug.apply(self.debug, args)
        trace.apply(trace, args)
    }
  }
}

