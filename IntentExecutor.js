var IntentMap = require('./Intents/IntentMap')
var StateManager = require('./States/StateManager')
var MiddlewareMap = require('./Middleware/MiddlewareMap')

// var IntentExecutor = function(intent, state, platform, request){
var IntentExecutor = function(context){
    StateManager.getState(context).then( (incomingState)=> {
        if(!StateManager.isIntentActive(incomingState, context.intentName)){
            throw new Error("This intent is inactive")
        } else {
            context.intent = IntentMap.getIntent(context.intentName)

            //Middleware
            var middlewareForState = StateManager.getMiddleware(incomingState)
            var middlewarePromises = []
            middlewareForState.map((middleware) => middlewarePromises.push(MiddlewareMap.getMiddleware(middleware)(context)))
            Promise.all(middlewarePromises)
                .then(() => {
                    try{
                        var promise = context.intent(context);
                    }catch(err){
                    }
                })
                .catch((err) => {
                })
        }
    })

}

module.exports = IntentExecutor;