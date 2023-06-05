const emitter = require('./event')

module.exports.setEvent = (event,cb) => {
    emitter.on(event,cb)
}

module.exports.callEvent = (event) => {
    emitter.emit(event)
}
