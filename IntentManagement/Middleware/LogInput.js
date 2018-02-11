var LogInput = function(input){
    return new Promise(function(resolve, reject){
        resolve(console.log(input))
    });
}

module.exports = LogInput