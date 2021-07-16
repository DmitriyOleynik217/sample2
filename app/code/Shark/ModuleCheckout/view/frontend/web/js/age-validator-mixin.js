define([
    'jquery',
    'moment'
], function ($, moment) {
    'use strict';

    return function (validator) {

        validator.addRule(
            'validate-minimum-age',
            function (value) {
                let age = /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/;

                return value.match(age);
            },
            $.mage.__("Sorry, you are too young to buy this.")
        );

        return validator;
    };


});
