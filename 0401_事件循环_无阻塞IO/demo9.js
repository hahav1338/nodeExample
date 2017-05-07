/**
 * Created by 123 on 2017/4/20.
 */
var fs = require("fs");
console.log("准备打开文件！");
fs.open(__dirname+'/fc.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("文件描述符是："+fd)
    // 关闭文件
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("文件关闭成功");
    });
});