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
            if(null === undefined){
                alert('You clicked the button!')
            } else {
                alert('Null is not the same as undefined!')
            }
        }

    });

        return $.custom.customWidget;
});
