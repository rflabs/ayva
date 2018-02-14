var IntentMap = require('./Intents/IntentMap')
var StateManager = require('./States/StateManager')
var MiddlewareMap = require('./Middleware/MiddlewareMap')

// var IntentExecutor = function(intent, state, platform, request){
var IntentExecutor = function(context){
    if(!StateManager.isIntentActive(context.state, context.intentName)){
        //do some error path
    } else {
        context.intent = IntentMap.getIntent(context.intentName)

        //Middleware
        var middlewareForState = StateManager.getMiddleware(context.state)
        var middlewarePromises = []
        middlewareForState.map((middleware) => middlewarePromises.push(MiddlewareMap.getMiddleware(middleware)(context)))
        Promise.all(middlewarePromises).then(() => {
            context.intent.execute(context);
        });
    }
}

module.exports = IntentExecutor;