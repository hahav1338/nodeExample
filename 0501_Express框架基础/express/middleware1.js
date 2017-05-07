var express = require("express");
var app = express();
app.use(function (req, res, next) {
    console.log("第一个中间件");
    //可以试试注掉下面的next()  运行看看结果
    next();//加载下一个中间层

});
app.use(function (req, res, next) {
    console.log("第二个中间件");
});
app.listen(3000)