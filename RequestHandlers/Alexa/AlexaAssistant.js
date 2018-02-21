var SSMLBuilder = require('../SSMLBuilder')
var Alexa = function(_res, _deviceProfile){
    var res = _res;
    var useSSML = true;

    this.deviceProfile = _deviceProfile;
    this.speechBuilder = new SSMLBuilder();

    this.say = this.speechBuilder.say;
    this.pause = this.speechBuilder.pause;
    this.play = function(){return this};

    var responseData = {
        response: {
            outputSpeech: {
                type: 'SSML',
                ssml: ''
            },
            reprompt: {
                outputSpeech: {
                    type: 'SSML',
                    ssml: ''
                }
            },
            shouldEndSession: false
        }
    };

    var resStatus = 200;

    this.reprompt = function(speech) {
        responseData.response.reprompt.outputSpeech.ssml += speech
        return this;
    }

    this.setContext = function(context){
        return this;
    }

    this.data = function(_data){
        return this;
    }

    this.error = function(errorCode){
        resStatus = errorCode;
        return this;
    }

    this.finish = function(){
        responseData.response.outputSpeech.ssml = this.speechBuilder.getSSML()
        res.status(resStatus).send(responseData);
    }

    this.setUser = function(user){
        this.deviceProfile.user = user._id;
        this.deviceProfile.save();
    }
}

module.exports = Alexa