var fs = require('fs');

    //该方法第一个参数是待读取的文件路径，第二个参数是编码格式
    fs.readFile('demo5.txt',"utf8",function(err,data){
       if (err) throw err;
        //该方法的第一个参数是写入文件的路径，如果有就写入，如无，就创建
        fs.appendFile('demo7copy.txt', data, function(err){
            if (err) throw err;
                    console.log('不覆盖的复制方法');
            });

    });




