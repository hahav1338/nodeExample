//setImmediate 与setTimeout同时运行时回先执行那个
// 多运行几次查看结果 可以看出setImmediate和setTimeout执行的先后顺序不好判定
setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});//下一次事件轮询的中的事件
});
setTimeout(function timeout() {
    console.log('set timeout');
}, 0);


