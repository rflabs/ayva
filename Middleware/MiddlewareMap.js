var BuiltInMiddleware = require('.')

var MiddlewareMap = function(){
    var Middleware = BuiltInMiddleware;
    return {
        registerMiddleware: function(_middleware){
            Object.assign(Middleware, _middleware)
        },
        getMiddleware: function(middlewareName){
            return Middleware[middlewareName]
        }
    }
}()

module.exports = MiddlewareMap