//读取文件：
/*var fs = require('fs'); // 引入fs模块

fs.readFile('demo5.txt', function(err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log(data); //显示原始二进制数据在缓冲区中的内容
	console.log(data.toString()); //显示文件内容
});*/



//写入文件

/*var fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
fs.writeFile('demo5.txt', 'test test', function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile('./test2.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});*/


var fs = require('fs');

    //该方法第一个参数是待读取的文件路径，第二个参数是编码格式
    fs.readFile('demo5.txt',"utf8",function(err,data){
       if (err) throw err;
        //该方法的第一个参数是写如文件的路径，如果有就写入，如无，就创建
        fs.writeFile(__dirname+'/demo5copy.txt', data, function(err){
           if (err) throw err;
           console.log('复制好了!');
        });

    });




