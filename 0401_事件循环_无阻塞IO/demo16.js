var fs = require('fs');

//使用流完成复制文件操作
var rs = fs.createReadStream(__dirname + '/fc.txt')
var ws = fs.createWriteStream(__dirname + '/demo15.txt');

rs.on('data', function (data) {
    ws.write(data)
});

ws.on('open', function (fd) {
    console.log('要写入的数据文件已经打开，文件描述符是： ' + fd);
});

rs.on('end', function () {
    console.log('文件读取完成');
    ws.end('完成', function () {
        console.log('文件全部写入完成')
    });
});