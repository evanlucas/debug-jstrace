var debug = require('../')('debug-jstrace:name')
var debug2 = require('../')('debug-jstrace:blah')

setInterval(function() {
  debug('auth:start %j', {
    username: 'evan'
  })
  setTimeout(function() {
    debug('auth:end %j', {
      username: 'evan'
    , id: '133rfw23e23'
    })
  }, 250)
}, 2500)

setInterval(function() {
  debug2('blah:start')
  debug2('blah:end', {
    biscuits: true
  })
}, 4000)
