/**
 * Created by 123 on 2017/4/24.
 */
var express = require("express");
var router = express.Router();

// 使用多个回调函数处理路由（记得指定 next 对象）：
router.get("/index", function(req, res, next){
    console.log("这是第一个的回调");
    next();

}, function(req, res, next){
    console.log("这是第二个的回调");
    next();

}, function(req, res, next){

    console.log("这是第三个的回调");
    res.send("回调执行结束，在cmd面板中查询执行结果")
});
module.exports = router;
