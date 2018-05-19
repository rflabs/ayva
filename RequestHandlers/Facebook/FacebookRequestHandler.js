var FacebookMessenger = require('./FacebookMessenger')
var ExecuteIntent = require('../../IntentExecutor') 

var FacebookRequestParser = function(googleArgs, _res){
    //attach or create Device related to request
    var context = {}
    context.args = googleArgs.result.contexts[0].parameters || googleArgs.result.parameters  || {};
    
    context.intentName = googleArgs.result.action
    context.assistant = new FacebookMessenger(_res)
    console.log(context)
    context.deviceProfile = {
        platform: "facebook",
        id: googleArgs.originalRequest.data.sender.id
    }
    ExecuteIntent(context)
}


module.exports = FacebookRequestParser;