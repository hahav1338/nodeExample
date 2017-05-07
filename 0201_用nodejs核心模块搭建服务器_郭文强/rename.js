//更改文件名
var fs = require('fs');

fs.rename("old.txt","new.txt",function(){
console.log(" 文件名更改");	
	})

