//setImmediate 与setTimeout和setInterval一样 放入event loop里面等主线程的执行栈为空时运行
//当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行。
console.log(1)
    setImmediate(function A() {
        console.log(2);
    });    setImmediate(function A() {
        console.log(22);
    });    setImmediate(function A() {
        console.log(2222);
    });    setImmediate(function A() {
        console.log(222);
    });
console.log(3)

    //setTimeout(function timeout() {
    //    console.log('TIMEOUT FIRED');
    //}, 0);

