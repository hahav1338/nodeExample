var express = require("express");
var app = express();
//如果静态资源存放在多个目录下面，可以多次调用 express.static 中间件：
app.use(express.static("./public"));
app.use(express.static("./public1"));
app.listen(3000)