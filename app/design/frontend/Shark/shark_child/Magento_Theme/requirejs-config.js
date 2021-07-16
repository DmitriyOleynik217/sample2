var config = {

    map: {
        '*': {
            slick: 'Magento_Theme/js/slick.min'
        },
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
    deps: [
        "js/main",
        "js/testing-js-ways",
        "Magento_Theme/js/include-js"
    ]
};
