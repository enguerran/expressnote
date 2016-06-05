var jsdom = require("jsdom");

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
// setup.js - setup the fake DOM
jsdom.env({
    html: '<body><div id="app"></div></body>',
    done: (errors, window) => {
         global.document = window.document;
         global.window = window;
         global.navigator = window.navigator;
    }
});
