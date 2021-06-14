define([
    'jquery',
    'jquery-ui-modules/widget'
],
    function ($) {
    $.widget('custom.customWidget', {

        options: {
            customVar: 'value'
        },

        _init: function () {
            console.log('WORKINGGG');
        },
    });

        return $.custom.customWidget;
});
