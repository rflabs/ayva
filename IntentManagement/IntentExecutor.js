var IntentExecutor = function(){
    this.Intents = {};
    this.Middleware = [];

    var inject = function(_intentMap){
        this.Intents = _intentMap;
    }

    var injectMiddleware = function(_middleware){
        this.Middleware.push(_middleware)
    }

    var execute =  function(args, assistantContext){
        var intent = this.Intents[args.intentName.toUpperCase()];
        runMiddleware().then(intent.execute(args, assistantContext))
        
    }

    var runMiddleware = function(){
        Middleware
    }
    
    return {
        inject: inject,
        execute: execute
    }
}





module.exports = IntentExecutor();