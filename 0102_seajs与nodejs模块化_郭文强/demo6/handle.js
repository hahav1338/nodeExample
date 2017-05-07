define(function(require,exports,module){
    var elem=require("./element.js");//加载操作元素
    var jquery=require("jquery");//加载jquery
    module.exports=function(){//用exports暴露初始化的init方法
        $(elem.btn).click(function(){
            $(elem.box).slideToggle()
        })
    }
});