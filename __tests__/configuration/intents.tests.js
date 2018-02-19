var Ayva = require('../../index')
var IntentMap = require('../../Intents/IntentMap')

test('Ayva should have no intents registered before registering intents', () => {
    expect(IntentMap.getIntents()).toEqual({})
})

test('Ayva should not return any intents before any are registered', () => {
    expect(IntentMap.getIntent("fakeIntent")).toBeUndefined()
})

test('Ayva should throw an error if registering anything other than an object', () => {
    var testIntent = function(context){};
    var err = null;
    try {
        IntentMap.registerIntents(testIntent)
    } catch (_err){
        err = _err
    }
    expect(err).not.toBeNull();
})

test('Ayva should register a single intent', () => {
    var testIntent = {"testIntent":function(context){}}
    var err = null;
    try {
        IntentMap.registerIntents(testIntent)
    } catch (_err){
        err = _err
    }
    expect(err).toBeNull();
})

test('Ayva should register multiple intents', () => {
    var testIntentMap = {"testIntent1":function(context){}, "testIntent2": function(context){}}
    var err = null;
    try {
        IntentMap.registerIntents(testIntentMap)
    } catch (_err){
        err = _err
    }
    expect(err).toBeNull();
})

test('Once registered, Ayva should retrieve intents by name', () => {
    var testIntentMap = {"testIntent1":function(context){return 1}, "testIntent2": function(context){return 2}}
    var err = null;
    IntentMap.registerIntents(testIntentMap)
    
    var intent1 = IntentMap.getIntent("testIntent1")
    var intent2 = IntentMap.getIntent("testIntent2")

    expect(typeof(intent1)).toBe("function")
    expect(typeof(intent2)).toBe("function")
})