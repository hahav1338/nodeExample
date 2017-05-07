var fs=require("fs");
//定义一个读文件的方法，
var readFile = function(routes){
    fs.readFile(routes, 'utf-8',function(err,data){
        console.log(data);
    });
};
module.exports = readFile;