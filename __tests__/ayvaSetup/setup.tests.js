var Ayva = require('../../index');

test('Ayva framework should not be null', () => {
    expect(Ayva).not.toBeNull()
    && expect(Ayva).not.toBeNull()
})

test('Ayva should have a Dialogflow V1 request parser', () =>{
    expect(Ayva.ExecuteRequest.FromGoogle).not.toBeNull() 
    && expect(Ayva.ExecuteRequest.FromGoogle).not.toBeUndefined()
})

test('Ayva should have an Alexa request parser', () =>{
    expect(Ayva.ExecuteRequest.FromAlexa).not.toBeNull() 
    && expect(Ayva.ExecuteRequest.FromAlexa).not.toBeUndefined()
})

test('Ayva should have built in Middleware', () =>{
    expect(Ayva.Middleware).not.toBeNull() 
    && expect(Ayva.Middleware).not.toBeUndefined()
});

test('Ayva should provide a state manager', () =>{
    expect(Ayva.StateManager).not.toBeNull() 
    && expect(Ayva.StateManager).not.toBeUndefined()
});

test('Ayva should provide intent registration function', () => {
    expect(Ayva.Config.RegisterIntents).not.toBeNull()
    && expect(Ayva.Config.RegisterIntents).not.toBeUndefined()
})

test('Ayva should provide state registration function', () => {
    expect(Ayva.Config.RegisterStates).not.toBeNull()
    && expect(Ayva.Config.RegisterStates).not.toBeUndefined()
})

test('Ayva should provide custom middleware registration function', () => {
    expect(Ayva.Config.RegisterMiddleware).not.toBeNull()
    && expect(Ayva.Config.RegisterMiddleware).not.toBeUndefined()
})
