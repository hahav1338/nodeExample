var fs=require("fs");



//一部分，异常未捕获时进程退出，不执行后面代码
//add变量未声明就使用

console.log(add);
console.log("继续执行");




//二部分，捕获异常时的进程会执行后面代码

try {

    console.log(add);

} catch (ReferencError) {

    console.log(ReferencError);
}
console.log("继续执行");






//三部分，自定义异常的捕获

var error = new Error("这是一个自定义的异常");
error.code=444;

try {
    //做判断抛出异常，这里只抛出
    throw error;
} catch (error) {
    //进行处理
    console.log(error);
}
console.log("继续执行");







//四部分，异步回调的异常在外面捕获不到的，要处理得在回调函数内处理


//四部分(1)捕获不到
try {


    fs.readFile("demo10.txt","utf8",function(data){
        //该文件不存在，回调函数是拿不到数据的，报错
        console.log(data);
    })
    //此处更换为下面的同步方法也可以捕获
    //fs.readFileSync("demo10.txt","utf8");
} catch (error) {
    console.log("读取文件异常");
}
console.log("继续执行");


//四部分(2)可以捕获
fs.readFile("demo10.txt","utf8",function(err,data){
    if(err){
        console.log('读取文件时发生异常');

    }

})
console.log("继续执行");