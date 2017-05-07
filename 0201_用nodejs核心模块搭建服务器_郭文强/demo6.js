var fs = require('fs');

//声明一个方法用来判断文件是否存在且是否为文件
var judgeFs = function(url){
    //判断文件是否存在
    fs.exists(url, function( exists ){
        if(exists){
            //判断文件是否是目录
            fs.stat(url, function(err,stats){
                if(err) throw err;
                if(stats.isDirectory()){
                    console.log("是文件夹");

                }
                else{

                    console.log("是文件");
                }
            })

        }else{

                console.log("该文件不存在");
            }




    }) ;
}

judgeFs("demo6.txt");