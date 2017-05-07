//引入express框架
var express = require("express");
//创建express的app对象
var app = express();
//设置中间件，让请求返回“这是express构建的web服务器”
app.use(function (req, res) {
    res.send("这是express构建的web服务器")
});
//设置监听的端口号
app.listen(3000)
//已上是用express搭建的一个基本的web服务器，监听的端口号为：3000