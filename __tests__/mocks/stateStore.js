var DefaultStateStore = function(){
    var Data = {
        Users: {}
    }
    return {
        setState: function(state, Context) {
            return new Promise(function(resolve, reject) {
                return resolve()
            })
        },
        getState: function(Context) {
            return new Promise(function(resolve, reject) {
                return resolve("default");
            })
        }
    }
}()

module.exports = DefaultStateStore