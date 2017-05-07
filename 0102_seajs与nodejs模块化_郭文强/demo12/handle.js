/**
 * Created by 123 on 2017/4/10.
 */
var data=require("./data");
var str=data.text1+" "+data.text2+" !";
module.exports=function(){//利用moudle.exports暴露show方法
    console.log(str)
};