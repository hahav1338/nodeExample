var express = require("express");
var app = express();
//有路径的中间件
app.use("/index", function (req, res, next) {
    res.send("这是/index的中间件")
});

app.use("/about", function (req, res, next) {
    res.send("这是/about的中间件")
});

app.listen(3000)