/**
 * Created by danielle.franca on 26/01/2017.
 */
angular.module("validate", []);

angular.module('validate').directive('validateMask', function () {
    return {
        restrict: "A",
        scope: {
            mask: "@validateMask"
        },
        link: function (scope, element, attrs) {
            var mask = scope.mask;

            if (mask != "") {
                var key = 0;

                element.bind("keypress", function (e) {
                    var value = e.key;

                    if (e.charCode >= 32 && e.charCode <= 126) {
                        var validate = false;


                        if (key <= mask.length && mask != "") {
                            if (mask[key] == 9 && !isNaN(parseInt(value)))
                                validate = true;
                            else if (mask[key] != '#' && mask[key] == value)
                                validate = true;
                            else if (mask[key] == '#')
                                validate = true;

                        }

                        if (validate)
                            key++;

                        //console.log(validate);
                        return validate;

                    }

                });
            }
        }
    };
});

angular.module('validate').directive('validateDouble', function () {
    return {
        restrict: "A",
        scope: {},
        link: function (scope, element, attrs) {
            element.bind("keypress", function (e) {
                if (e.charCode >= 32 && e.charCode <= 126) {
                    var value = e.key;

                    var validate = false;

                    if (!isNaN(parseInt(value)) || value == "." || value == ",")
                        validate = true;

                    return validate;
                }

            });
        }
    };
});

angular.module('validate').directive('validateNumber', function () {
    return {
        restrict: "A",
        scope: {},
        link: function (scope, element, attrs) {
            element.bind("keypress", function (e) {
                if (e.charCode >= 32 && e.charCode <= 126) {
                    var value = e.key;

                    var validate = false;

                    if (!isNaN(parseInt(value)))
                        validate = true;

                    return validate;
                }

            });
        }
    };
});


