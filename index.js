
let IntentExecutor = require('./IntentManagement/IntentExecutor')
let RequestHandlers = require('./AssistantRequestHandlers')
let Middleware = require('./IntentManagement/Middleware')

let Ayva = {
    ExecuteRequest: RequestHandlers,
    RegisterIntents: function(intentMap){
        IntentExecutor.inject(intentMap)
    },
    RegisterMiddleware: IntentExecutor.injectMiddleware,
    Middleware: Middleware
}


module.exports = Ayva;
