//删除文件
var fs = require('fs');
console.log('准备删除文件');
fs.unlink('delete.txt', function (err) {
     if (err) return console.log(err);
     console.log('文件删除成功');
})

