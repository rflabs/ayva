let IntentMap = require('./Intents/IntentMap')
let MiddlewareMap = require('./Middleware/MiddlewareMap')
let StateManager = require('./States/StateManager')
let ErrorHandlers = require('./Errors/ErrorManager')
let RequestHandlers = require('./RequestHandlers')
let Middleware = require('./Middleware')

let Ayva = {
    ExecuteRequest: RequestHandlers,
    Config: {
        RegisterIntents: IntentMap.registerIntents,
        RegisterMiddleware: MiddlewareMap.registerMiddleware,
        RegisterStates: StateManager.registerStates,
        StateProvider: StateManager.registerStateProvider,
        RegisterErrors: ErrorHandlers.registerErrorHandlers
    },
    Middleware: Middleware,
    StateManager: StateManager
}


module.exports = Ayva;
