exports.local = function(traces) {
  traces.on('auth:start', function(trace) {
    console.log('auth started:', trace.username)
  })

  traces.on('auth:end', function(trace) {
    console.log('auth ended:', trace.username)
  })

  traces.on('blah:start', function(trace) {
    console.log('blah started:', trace)
  })

  traces.on('blah:end', function(trace) {
    console.log('blah ended:', trace.biscuits)
  })
}
