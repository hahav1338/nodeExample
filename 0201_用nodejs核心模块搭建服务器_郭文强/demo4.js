//引入http模块
var http=require('http');
var fs = require('fs');
//创建一服务器
http.createServer(function(req,res){
    //该方法第一个参数是待读取的文件路径，第二个参数是编码格式
    fs.readFile('baidu.html',"utf8",function(err,data){
       if (err) throw err;
        res.end(data);
    });



}).listen(3000);
