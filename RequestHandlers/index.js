var Google =  require('./Google/GoogleRequestHandler');
var Alexa = require('./Alexa/AlexaRequestHandler');

module.exports = {
    "FromGoogle": Google,
    "FromAlexa" : Alexa
}