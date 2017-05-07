/**
 * Created by 123 on 2017/4/24.
 */
var express = require("express");
var router = express.Router();

// 混合使用函数和函数数组处理路由：
router.get("/index", [fn1,fn2,fn3], function(req, res, next){
    console.log("这是路由内的回调");
    next();

},fn4);
function fn1(req, res, next) {
    console.log("这是数组的fn1的回调");
    next();
}
function fn2(req, res, next) {
    console.log("这是数组的fn2的回调");
    next();
}
function fn3(req, res, next) {
    console.log("这是数组的fn3的回调");
    next();
}
function fn4(req, res, next) {
    console.log("这是数组的fn4的回调");
    res.send("数组回调执行结束，在cmd面板中查询执行结果")
}
module.exports = router;
