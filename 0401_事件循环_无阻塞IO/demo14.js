var fs = require('fs'),
    path = require('path');
/**
 * path, 要读取目录的完整路径及目录名；
 * [callback(err, files)], 读完目录回调函数；err错误对象，files数组，存放读取到的目录中的所有文件名
 */

fs.readdir(__dirname + '/fcxyDir/', function (err, files) {
    if(err) {
        console.error(err);
        return;
    } else {
        files.forEach(function (file) {
            //拼组当前文件的可寻路径
            var filePath = path.normalize(__dirname + '/fcxyDir/' + file);
            //对当前元素进行状态判断，看是文件还是目录
            fs.stat(filePath, function (err, stat) {
                if(stat.isFile()) {
                    console.log(filePath + ' is: ' + 'file');
                }
                if(stat.isDirectory()) {
                    console.log(filePath + ' is: ' + 'dir');
                }
            });
        });

    }
});