var Errors = {}

Errors.INTENT_REGISTRATION = "Intents must be registerd as objects in the format {INTENT_NAME: INTENT_HANDLER}"
Errors.ERR_REGISTRATION = "Errors must be registered as objects in the format {ERROR_TEXT: ERROR_HANDLER}"
module.exports = Errors;