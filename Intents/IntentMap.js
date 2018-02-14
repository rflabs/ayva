var IntentMap = function(){
    var Intents = {};
    return{
        registerIntents: function(_intentMap){
            Object.assign(Intents, _intentMap)
        },
        getIntent: function(name){
            return Intents[name];
        }
    }
}()

module.exports = IntentMap