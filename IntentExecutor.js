var IntentMap = require('./Intents/IntentMap')
var StateManager = require('./States/StateManager')
var MiddlewareMap = require('./Middleware/MiddlewareMap')
var ErrorManager = require('./Errors/ErrorManager')

// var IntentExecutor = function(intent, state, platform, request){
var IntentExecutor = function(context){
    StateManager.getState(context).then( (state)=> {
        if(!StateManager.isIntentActive(state, context.intentName)){
            throw new Error("InactiveIntentError")
        } else {
            context.intent = IntentMap.getIntent(context.intentName)

            //Middleware
            var middlewareForState = StateManager.getMiddleware(state)
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
    }).catch( (err) =>{
        ErrorManager.getErrorHandler(err.message)(context,err)
    })
}

module.exports = IntentExecutor;