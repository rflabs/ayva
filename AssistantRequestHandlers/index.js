var Google =  require('./Google/GoogleRequestHandler');
var Alexa = require('./AlexaRequestHandler');

module.exports = {
    "FromGoogle": Google,
    "FromAlexa" : Alexa

}