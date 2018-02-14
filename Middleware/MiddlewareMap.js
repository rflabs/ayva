var BuiltInMiddleware = require('.')

var MiddlewareMap = function(){
    var Middleware = BuiltInMiddleware;
    return {
        registerMiddleware: function(_middleware){
            Object.assign(Middleware, _middleware)
        },
        getMiddleware: function(middlewareName){
            var m = Middleware[middlewareName] 
            if (!m) throw new Error("Requested middleware " + middlewareName + " was not registered")
            return m;
        }
    }
}()

module.exports = MiddlewareMap