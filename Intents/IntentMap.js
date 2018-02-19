var IntentMap = function(){
    var Intents = {};
    return{
        registerIntents: function(_intentMap){
            if(typeof(_intentMap) !== 'object') throw new Error("Intents must be registerd as objects")
            
            Object.assign(Intents, _intentMap)
        },
        getIntent: function(name){
            return Intents[name];
        },
        getIntents: function(){
            return Intents;
        }
    }
}()

module.exports = IntentMap