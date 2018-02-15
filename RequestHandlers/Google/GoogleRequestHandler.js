var GoogleAssistant = require('./GoogleAssistant')
var ExecuteIntent = require('../../IntentExecutor') //This is backwards. IntentExecutor should require the HandlerMap

var GoogleRequestParser = function(googleArgs, _res){
    //attach or create Device related to request
    var context = {}
    context.args = googleArgs.result.parameters  || {};
    context.intentName = googleArgs.result.action
    context.assistant = new GoogleAssistant(_res)
    context.deviceProfile = {
        platform: "google",
        id: googleArgs.originalRequest.data.user.userId
    }
    ExecuteIntent(context)
}


module.exports = GoogleRequestParser;