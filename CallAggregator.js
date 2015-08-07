/// <reference path="../../typings/jquery/jquery.d.ts" />
var CallAggregator = (function () {
    function CallAggregator() {
    }
    CallAggregator.prototype.manage = function () {
        var promises = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            promises[_i - 0] = arguments[_i];
        }
        var deferred = $.Deferred();
        if (promises && promises.length) {
            var tracker = 0;
            promises.forEach(function (promise) {
                promise.always(function () {
                    tracker++;
                    if (tracker === promises.length) {
                        deferred.resolve();
                    }
                });
            });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise();
    };
    return CallAggregator;
})();
module.exports = CallAggregator;
//# sourceMappingURL=CallAggregator.js.map