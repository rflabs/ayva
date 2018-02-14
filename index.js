let IntentMap = require('./Intents/IntentMap')
let MiddlewareMap = require('./Middleware/MiddlewareMap')
let StateManager = require('./States/StateManager')
let RequestHandlers = require('./RequestHandlers')
let Middleware = require('./Middleware')

let Ayva = {
    ExecuteRequest: RequestHandlers,
    Config: {
        RegisterIntents: IntentMap.registerIntents,
        RegisterMiddleware: MiddlewareMap.registerMiddleware,
        RegisterStates: StateManager.registerStates,
        StateProvider: StateManager.registerStateProvider
    },
    Middleware: Middleware
}


module.exports = Ayva;
