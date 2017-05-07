define(function (require, exports, module) {
    var module2 = require('./module2.js');
    exports.run = function () {
        return $.merge(['module1'], module2.run());
    };
});