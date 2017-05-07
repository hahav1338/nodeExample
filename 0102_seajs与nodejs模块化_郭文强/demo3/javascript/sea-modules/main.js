define( function(require, exports,module) {
     var add=require('./add');
    var jquery=require("jquery")
    $("#seajstext").val(add(1,2,3))

});