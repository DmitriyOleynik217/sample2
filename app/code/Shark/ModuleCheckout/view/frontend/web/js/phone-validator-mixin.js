define([
    'jquery',
    'moment'
], function ($, moment) {
    'use strict';

    return function (validator) {

        validator.addRule(
            'validate-phone-number',
            function (value) {
                let number = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

                return value.match(number);
            },
            $.mage.__("Sorry, your phone number is invalid. Enter the real number.")
        );

        return validator;
    };


});
