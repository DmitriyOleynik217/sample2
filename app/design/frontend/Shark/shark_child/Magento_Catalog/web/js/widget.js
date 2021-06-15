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
            this.element.on('click', this.onClick);
        },

        onClick: function () {
            alert('you clicked the button!')
        }

    });

        return $.custom.customWidget;
});
