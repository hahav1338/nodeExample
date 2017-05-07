/**
 * Created by 123 on 2017/4/24.
 */
var express = require("express");
var fs=require("fs");
var router = express.Router();
//读取静态资源
router.get("/index.html",function(req,res){
    fs.readFile("index.html","utf8",function(err,data){
        if (err){
            res.send("文件未找到")
        }
        res.send(data)
    })
});

// 设置post和get在/index下的路由：
router.get("/index", function (req, res, next) {
    res.send("get方式提交的数据："+req.url.slice(req.url.indexOf("?")+1))
});
//app.post()在/index路径下的post方法的中间件
router.post("/index", function (req, res, next) {
    var data="";
    req.on("data",function(spt){
        data+=spt
    });
    req.on("end",function(){
        console.log(data);
        res.send("post方式提交的数据"+data);
    });
});
module.exports = router;
