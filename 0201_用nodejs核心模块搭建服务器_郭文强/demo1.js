//引入http模块
var http=require('http');
//创建一服务器
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
http.createServer(function(req,res){
    //返回一个200状态
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
	// 发送响应数据 "欢迎来到你的第一个node服务器"
    res.end("欢迎来到你的第一个node服务器");

}).listen(3000);



 // 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');