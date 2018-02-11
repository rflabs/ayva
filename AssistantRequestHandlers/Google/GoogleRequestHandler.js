var GoogleAssistant = require('./GoogleAssistant')
var IntentExecutor = require('../../IntentManagement/IntentExecutor')

var GoogleRequestParser = function(googleArgs, _res){
    //attach or create Device related to request
     var args = googleArgs.result.parameters  || {};
    
    args.intentName = googleArgs.result.action
    var deviceData = {id: googleArgs.originalRequest.data.user.userId, platform: 'google'}
    IntentExecutor.execute(args, new GoogleAssistant(_res)) 
}


module.exports = GoogleRequestParser;