
let IntentMap = require('./Intents/IntentMap')
let RequestHandlers = require('./RequestHandlers')
let MiddlewareMap = require('./Middleware')

let Ayva = {
    ExecuteRequest: RequestHandlers,
    Configure: {
        RegisterIntents: IntentMap.inject,
        RegisterMiddleware: MiddlewareMap.inject
    },
    Middleware: Middleware
}


module.exports = Ayva;
