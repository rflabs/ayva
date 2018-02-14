var StateManager = function(){
    var StateConfig;
    return {
        registerStates: function(stateConfig){
            StateConfig = stateConfig
        },
        isIntentActive: function(stateName, intentName){
            return StateConfig[stateName].activeIntents.includes(intentName)
        },
        getMiddleware: function(stateName){
            return StateConfig[stateName].middleware || []
        }
    }
}()

module.exports = StateManager