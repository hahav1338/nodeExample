var fs = require("fs");
console.log("准备打开文件！");
fs.open(__dirname+'/fc.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.readFile (fd,"utf-8", function(err,data){

        if (err) {
            return console.error(err);
        }
        console.log("读取到的数据为:"+data)
        // 关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    })
});
