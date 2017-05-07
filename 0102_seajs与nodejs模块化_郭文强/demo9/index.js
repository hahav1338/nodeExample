var fs=require("fs");
//用fs模块去读文件，
fs.readFile('./demo.txt',"utf-8", function(err,data){
console.log(data);
});
