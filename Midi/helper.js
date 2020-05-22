var helper = (function () {
    var instance;

    function createInstance() {

        var methods = {};

        /**
         * Wait for Mic
         * @param  {int}     miliseconds   miliseconds until user has to press play
         */
        methods.waitForMic = function (miliseconds) {
            setTimeout(function () { //Avi thinks this gets our sound from microphone
                gauge.update({
                    units: "Play!"
                }),
                startTime = Date.now(),
                repeatOnFrame()
            }, miliseconds)
        };

        return methods;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

var jsHelper = helper.getInstance();