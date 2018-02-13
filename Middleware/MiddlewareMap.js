var MiddlewareMap = function(){
    this.middleware = [];

    this.registerIntents = function(middleware){
        this.middleware = middleware;
    }

    return this;
}()

module.exports = MiddlewareMap