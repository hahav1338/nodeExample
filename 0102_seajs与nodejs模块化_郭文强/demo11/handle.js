/**
 * Created by 123 on 2017/4/10.
 */
var data=require("./data");
var str=data.text1+" "+data.text2+" !";
exports.show=function(){//利用exports暴露show方法
    console.log(str)
};