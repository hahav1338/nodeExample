var fs = require('fs');
/**
 * path, 被创建目录的完整路径及目录名；
 * [callback(err)], 创建完目录回调函数,err错误对象
 */

fs.mkdir(__dirname + '/fcDir', function (err) {
    if(err)
        throw err;
    console.log('创建目录成功')
});