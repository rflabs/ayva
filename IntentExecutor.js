var IntentMap = require('./Intents/IntentMap')
var StateManager = require('./States/StateManager')
var MiddlewareMap = require('./Middleware/MiddlewareMap')

// var IntentExecutor = function(intent, state, platform, request){
var IntentExecutor = function(context){
    if(!StateManager.isIntentActive(context.state, context.intentName)){
        context.assistant.say("This intent is not active").finish()
    } else {
        context.intent = IntentMap.getIntent(context.intentName)

        //Middleware
        var middlewareForState = StateManager.getMiddleware(context.state)
        var middlewarePromises = []
        middlewareForState.map((middleware) => middlewarePromises.push(MiddlewareMap.getMiddleware(middleware)(context)))
        Promise.all(middlewarePromises).then(() => {
            Promise.resolve(context.intent(context))
                .then((err) => console.log("I'm here"))
        });
    }
}

module.exports = IntentExecutor;