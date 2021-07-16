define([
    'jquery',
    'jquery/validate',
], function ($) {
    "use strict";

    return function (validator) {
        validator.addRule(
            'company-validation',
            function (value) {
                var pattern = /^Shark/;

                return value.match(pattern);
            },
            $.mage.__(`You have to write "Shark"!`)
        );

        return validator;
    };

});
