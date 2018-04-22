var Google =  require('./Google/GoogleRequestHandler');
var Alexa = require('./Alexa/AlexaRequestHandler');
var Facebook = require('./Facebook/FacebookRequestHandler');

module.exports = {
    "FromGoogle": Google,
    "FromAlexa" : Alexa,
    "FromFacebook": Facebook
}