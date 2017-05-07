//引入http模块
var http=require('http');
//创建一服务器
http.createServer(function(req,res){
    //返回一个200状态
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    res.write("<!DOCTYPE html>");
    res.write(" <html>");
    res.write(" <head>");
    res.write("<title>我是node.js服务器返回的页面</title>");
    res.write(" <style>");
    res.write(" h1 {");
    res.write(" color:red");
    res.write(" }");
    res.write(" </style>");
    res.write(" </head>");
    res.write("<body>");
    res.write("<h1>我是标题</h1>");
    res.write("<hr>");
    res.write("<p style='color:blue'>我是内容</p>");
    res.write("<a href='#' onclick=alert('谁让你点我？')>来，点一下子</a>");
    res.write("</body>");
    res.write("</html>");

    res.end();

}).listen(3000);
