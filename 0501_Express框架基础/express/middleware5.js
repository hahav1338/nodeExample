var express = require("express");
var fs = require("fs");
var app = express();

//错误处理中间件  含有4个参数 ： err, req, res, next。
app.use(function(req, res, next) {
    //生成一个错误
    var err = new Error();
    //传递到下一个中间件
    next(err);
});
app.use(function(err, req, res, next) {
    console.error(err.stack);
    //设置响应头的状态码
    //ps：可以改下面的500 打开浏览器中控制台看看 请求返回的状态码
    res.status(500).send('Something broke!');
});
app.listen(3000);