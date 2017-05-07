define(function(require,exports,module){
   var elem=require("./element.js");//加载操作元素
    var jquery=require("jquery");//加载jquery
    $(elem.btn).click(function(){
        $(elem.box).slideToggle()
    })
});