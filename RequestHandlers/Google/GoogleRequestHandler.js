var GoogleAssistant = require('./GoogleAssistant')
var ExecuteIntent = require('../../IntentExecutor') 

var GoogleRequestParser = function(googleArgs, _res){
    //attach or create Device related to request
    var context = {}
    context.args = googleArgs.result.contexts[0].parameters || googleArgs.result.parameters  || {};
    
    context.intentName = googleArgs.result.action
    context.assistant = new GoogleAssistant(_res)

    context.deviceProfile = {
        platform: "google",
        id: googleArgs.originalRequest.data.user.userId,
        isMobile: () => {
          return googleArgs.originalRequest.data.surface.capabilities.some((c) => {return c.name == 'actions.capability.SCREEN_OUTPUT'}) || googleArgs.originalRequest.data.inputs[0].rawInputs[0].inputType == "KEYBOARD"
        }
    }
    checkForPermissions(context, googleArgs.originalRequest.data)
        .then(ExecuteIntent(context))
    
}

var checkForPermissions = function(context, requestData){
    return new Promise((resolve, reject) => {
        for(p in requestData.user.permissions)
        {
            const permission = requestData.user.permissions[p]
            switch(permission){
                case "DEVICE_PRECISE_LOCATION":
                case "DEVICE_COARSE_LOCATION":
                    console.log(requestData.device.location)
                    context.location = requestData.device.location
                    break;
                case "NAME":
                    console.log(requestData)
                    break;
                default: 
                    console.log("No match for " + permission)
                    break;
            }
        }
        resolve()
    });
    
}


module.exports = GoogleRequestParser;