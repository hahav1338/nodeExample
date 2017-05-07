/**
 * Created by 123 on 2017/4/24.
 */
var express = require("express");
var router = express.Router();

// 使用回调函数数组处理路由：
router.get("/index", [fn1,fn2,fn3,fn4]);
function fn1(req, res, next) {
    console.log("这是fn1的回调");
    next();
}
function fn2(req, res, next) {
    console.log("这是fn2的回调");
    next();
}
function fn3(req, res, next) {
    console.log("这是fn3的回调");
    next();
}
function fn4(req, res, next) {
    console.log("这是fn4的回调");
    res.send("数组回调执行结束，在cmd面板中查询执行结果")
}
module.exports = router;
