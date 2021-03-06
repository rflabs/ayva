var AlexaAssistant = require('./AlexaAssistant')
var ExecuteIntent = require('../../IntentExecutor') 

var AlexaRequestParser = function(alexaArgs, _res){
    var context = {}
    context.args = {}
    if (alexaArgs.request.type === 'IntentRequest') {
        if (alexaArgs.request.intent.slots) {
            let slots = alexaArgs.request.intent.slots
            var slotNames = Object.keys(slots)

            //Extract slots, and get matched synonym value if applicable
            for (let i = 0; i < slotNames.length; i++) {
                context.args[slotNames[i]] = slots[slotNames[i]].value;
                context.args[slotNames[i] + '.original'] = slots[slotNames[i]].value;
                if(slots[slotNames[i]].resolutions)
                context.args[slotNames[i]] = slots[slotNames[i]].resolutions.resolutionsPerAuthority[0].values[0].value.name
            }
        }
        context.intentName = alexaArgs.request.intent.name
    }
    if (alexaArgs.request.type === 'LaunchRequest') {
        context.intentName = 'Welcome';
    }
    if(alexaArgs.request.type === 'SessionEndedRequest') {
        context.intentName = 'Exit';
    }

    context.assistant = new AlexaAssistant(_res)
    context.deviceProfile = {
        platform: "alexa",
        id: alexaArgs.session.user.userId
    }
    ExecuteIntent(context)
}

module.exports = AlexaRequestParser;