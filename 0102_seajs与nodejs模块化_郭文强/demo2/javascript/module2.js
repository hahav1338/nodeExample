define(function (require, exports, module) {
    var module3 = require('./module3.js');
    exports.run = function () {
        return $.merge(['module2'], module3.run());
    };
});