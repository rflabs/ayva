
var AlexaRequestParser = function(alexaArgs, _res){
//     //attach or create Device related to request
//     let args = {}
//     if (alexaArgs.request.type === 'IntentRequest') {
//         if (alexaArgs.request.intent.slots) {
//             let slots = alexaArgs.request.intent.slots
//             var slotNames = Object.keys(slots)
//             for (let i = 0; i < slotNames.length; i++) {
//                 args[slotNames[i]] = slots[slotNames[i]].value;
//             }
//         }
//         args.intentName = alexaArgs.request.intent.name
//     }
//     if (alexaArgs.request.type === 'LaunchRequest') {
//         args.intentName = 'input.welcome';
//     }
//     if(alexaArgs.request.type === 'SessionEndedRequest') {
//         args.intentName = 'exit';
//     }
//     var deviceData = {id: alexaArgs.session.user.userId, platform: 'alexa'}
//     DeviceProfile.findOne(deviceData).populate('user')
//         .then(function(deviceProfile){
//             if (!deviceProfile){
//                 deviceProfile = new DeviceProfile(deviceData);
//                 deviceProfile.save();
//             }
//             new IntentExecution(args, new Alexa(_res,deviceProfile));            
//         })
// }

// var Alexa = function(_res, _deviceProfile){
//     var res = _res;
//     var useSSML = true;

//     this.deviceProfile = _deviceProfile;
//     this.speechBuilder = new SSMLBuilder();

//     this.say = this.speechBuilder.say;
//     this.pause = this.speechBuilder.pause;
//     this.play = function(){return this};

//     var responseData = {
//         response: {
//             outputSpeech: {
//                 type: 'SSML',
//                 ssml: ''
//             },
//             reprompt: {
//                 outputSpeech: {
//                     type: 'SSML',
//                     ssml: ''
//                 }
//             },
//             shouldEndSession: false
//         }
//     };

//     var resStatus = 200;

//     this.reprompt = function(speech) {
//         responseData.response.reprompt.outputSpeech.ssml += speech
//         return this;
//     }

//     this.setContext = function(context){
//         return this;
//     }

//     this.data = function(_data){
//         return this;
//     }

//     this.error = function(errorCode){
//         resStatus = errorCode;
//         return this;
//     }

//     this.finish = function(){
//         responseData.response.outputSpeech.ssml = this.speechBuilder.getSSML()
//         res.status(resStatus).send(responseData);
//     }

//     this.setUser = function(user){
//         this.deviceProfile.user = user._id;
//         this.deviceProfile.save();
//     }
}

module.exports = AlexaRequestParser;