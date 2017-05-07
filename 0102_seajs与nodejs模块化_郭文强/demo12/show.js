/*加载handle模块 后执行show方法*/
//方法一  直接加载后运行
//require("./handle").show();

//方法二  用一个变量保存 加载后handle模块  然后通过这个变量执行show方法
var handle=require("./handle");
handle.show();