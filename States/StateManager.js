var StateManager = function(){
    var StateConfig, StateProvider;

    return {
        registerStates: function(stateConfig){
            StateConfig = stateConfig
        },
        isIntentActive: function(stateName, intentName){
            return StateConfig[stateName].activeIntents.includes(intentName)
        },
        getMiddleware: function(stateName){
            return StateConfig[stateName].middleware || []
        },
        registerStateProvider: function(stateProvider){
            StateProvider = stateProvider;
        },
        getState: function(context){
            return StateProvider.getState(context)
        },
        setState: function(state,context){
            StateProvider.setState(state,context)
        }
    }
}()

module.exports = StateManager