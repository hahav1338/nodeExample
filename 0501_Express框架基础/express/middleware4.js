var express = require("express");
var fs=require("fs");
var app = express();

//读取html页面
app.use("/index.html",function(req,res){
    fs.readFile("middleware4.html","utf8",function(err,data){
        if (err){
            res.send("文件未找到")
        }
        res.send(data)
    })
});
//带有Methods的中间件
//app.all()所有在/index的methods都会走的中间件
app.all("/index",function (req, res, next) {
    console.log("所有在/index的methods都会走的中间件");;
    next();
});
//常见的两个方法  get和post方法
//app.get()在/index路径下的get方法的中间件
app.get("/index", function (req, res, next) {
    res.send("在/index路径下的get方法的中间件")
});
//app.post()在/index路径下的post方法的中间件
app.post("/index", function (req, res, next) {
    res.send("在/index路径下的post方法的中间件")
});

app.listen(3000);