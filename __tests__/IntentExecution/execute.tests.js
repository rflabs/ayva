var Ayva = require('../../index')
var mockIntentMap = require('../mocks/intents');
var mockStateMap = require('../mocks/states');
var defaultStateProvider = require('../mocks/stateStore')

var IntentExecutor = require('../../IntentExecutor')

test('When executing an inactive intent, an error should be thrown', () => {
    // Ayva.Config.RegisterIntents(mockIntentMap())
    // Ayva.Config.RegisterStates(mockStateMap())
    // Ayva.Config.StateProvider(defaultStateProvider)

    // var err = null;
    // try{
    //     IntentExecutor({'state': 'default', 'intentName':'test'})
    // } catch(_err) {
    //     err = _err
    // }
    // expect(err).not.toBeNull()
})