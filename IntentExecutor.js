var IntentMap = require('./Intents/IntentMap')
var StateManager = require('./States/StateManager')
var MiddlewareMap = require('./Middleware/MiddlewareMap')
var ErrorManager = require('./Errors/ErrorManager')

// var IntentExecutor = function(intent, state, platform, request){
var IntentExecutor = function(context){
    StateManager.getState(context).then( (incomingState)=> {
        console.log("Current State: " + incomingState)
        if(!StateManager.isIntentActive(incomingState, context.intentName)){
            throw new Error("InactiveIntentError")
        } else {
            //Middleware
            var middlewareForState = StateManager.getMiddleware(incomingState)
            var middlewarePromises = []
            middlewareForState.map((middleware) => middlewarePromises.push(MiddlewareMap.getMiddleware(middleware)(context)))
            Promise.all(middlewarePromises)
                .then(() => {
                    try{
                        context.intent = IntentMap.getIntent(context.intentName)
                        console.log("Executing Intent: " + context.intentName)
                        var promise = context.intent(context);
                    }catch(err){
                    }
                })
                .catch((err) => {
                })
        }
    }).catch( (err) =>{
        console.log(err)
        ErrorManager.getErrorHandler(err.message)(context,err)
    })
}

module.exports = IntentExecutor;