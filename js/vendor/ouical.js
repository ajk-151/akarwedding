;(function(exports) {

    // Make sure we have the necessary event data, such as start time and event duration
    var validParams = function(params) {
        return params.data !== undefined && params.data.start !== undefined &&
            (params.data.end !== undefined || params.data.duration !== undefined);
    };

    exports.createCalendar = function(params) {
        if (!validParams(params)) {
            console.log('Event details missing.');
            return;
        }

        var result = document.createElement('div');

        return result;
    };
})(this);