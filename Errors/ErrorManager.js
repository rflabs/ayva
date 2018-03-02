const Errors = require('.')

var ErrorManager = function(){
    var ErrorHandlers = {}

    return{
        registerErrorHandlers: function(errorHandlers){
            if(typeof(errorHandlers) !== 'object') throw new Error(Errors.ERR_REGISTRATION)
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