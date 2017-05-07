var express = require("express");
var app = express();
//可以设置“虚拟（virtual）”目录（即目录根本不存在）来访问静态资源，
//下面是通过/static目录来访问静态资源
app.use("/static",express.static("./public"));
app.listen(3000)