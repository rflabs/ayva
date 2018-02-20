var IntentMap = require('./Intents/IntentMap')
var StateManager = require('./States/StateManager')
var MiddlewareMap = require('./Middleware/MiddlewareMap')

// var IntentExecutor = function(intent, state, platform, request){
var IntentExecutor = function(context){
    StateManager.getState(context).then( (state)=> {
        context.state = state
        if(!StateManager.isIntentActive(context.state, context.intentName)){
            throw new InactiveIntentError(context)
        } else {
            context.intent = IntentMap.getIntent(context.intentName)

            //Middleware
            var middlewareForState = StateManager.getMiddleware(context.state)
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
        throw err
    })
}

module.exports = IntentExecutor;