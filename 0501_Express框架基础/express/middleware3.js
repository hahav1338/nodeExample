var express = require("express");
var app = express();
//所有请求都会走的中间件
app.use("*",function (req, res, next) {
    console.log("所有请求都会走的中间件");
    console.log("所有请求路径用*来表示");
    next();
});
app.use("/index", function (req, res, next) {
    res.send("这是/index的中间件")
});
app.use("/about", function (req, res, next) {
    res.send("这是/about的中间件")
});

app.listen(3000)