var ErrorManager = function(){
    var ErrorHandlers = {}

    return{
        registerErrorHandlers: function(errorHandlers){
            if(typeof(errorHandlers) !== 'object') throw new Error("Errors must be registerd as objects")
            Object.assign(ErrorHandlers, errorHandlers)
        },
        getErrorHandler: function(name){
            return ErrorHandlers[name];
        },
        getErrorHandlers: function(){
            return ErrorHandlers;
        }
    }
}()

module.exports = ErrorManager