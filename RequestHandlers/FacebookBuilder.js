var FacebookBuilder = function(){

    // var format = {
    //     content: "",
    //     modifiers: {
    //         prosody: {
    //             pitch: "",
    //             contour: "",
    //             duration: "",
    //             volume: ""
    //         }
    //     }
    // }

    var ssmlOutput = [""];
    var estimatedOutputTime = 0;

    var setupProsodyTag = function(){
        var currentPlaybackItem = ssmlOutput[ssmlOutput.length -1]
        if(typeof(currentPlaybackItem) === "string" || !currentPlaybackItem.modifiers)
            currentPlaybackItem = {
                content: currentPlaybackItem,
                modifiers: {
                    prosody: {}
                }
            }
    }

    this.say = function(phrase){
        ssmlOutput.push(phrase);
        return this;
    }

    this.pause = function(duration){
        return this;
    }

    this.pitch = function(){
        return this;
    }

    this.rate = function(){
        //Audio vs speech

        return this;
    }

    this.emphasis = function(){
        
        
        return this;
    }

    this.play = function(url, altSpeech){
        altSpeech = altSpeech || ""
        ssmlOutput.push('<audio src="'+url+'">'+ altSpeech + '</audio>')
        return this;
    }

    this.getSSML = function(){
        var output = ssmlOutput.reduce(function(total, nextBlock){
            return total.concat(nextBlock);
        })
        return output
    }
}

module.exports = FacebookBuilder;

//SSML reference: https://developers.google.com/actions/reference/ssml