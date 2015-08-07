/// <reference path="../../typings/jquery/jquery.d.ts" />

class CallAggregator {

    manage(...promises:JQueryPromise<any>[]):JQueryPromise<any> {
        var deferred = $.Deferred<any>();

        if (promises && promises.length) {
            var tracker = 0;

            promises.forEach((promise) => {
                promise.always(() => {
                    tracker++;
                    if (tracker === promises.length) {
                        deferred.resolve();
                    }
                });
            });
        } else {
            deferred.resolve();
        }

        return deferred.promise();
    }
}

export = CallAggregator;
