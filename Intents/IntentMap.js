
var IntentMap = function(){
    this.Intents = {};

    this.registerIntents = function(_intentMap){
        this.Intents = _intentMap;
    }
}()

module.exports = IntentMap