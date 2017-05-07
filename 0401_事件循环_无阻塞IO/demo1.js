/*
 * 使用事件的触发模式
 *模拟ajax中的 readState的状态码
 *
 *0: 请求未初始化
 *1: 服务器连接已建立
 *2: 请求已接收
 *3: 请求处理中
 *4: 请求已完成，且响应已就绪
 *
 * */
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 设置 处理程序 并触发后续事件
var zero = function connected() {
    console.log('0: 请求未初始化。');
    eventEmitter.emit('readState_one');// 触发 one 事件
};
var one = function connected() {
    console.log('1: 服务器连接已建立');
    eventEmitter.emit('readState_two');// 触发 two 事件
};
var two = function connected() {
    console.log('2: 请求已接收');
    eventEmitter.emit('readState_three');// 触发 three 事件
};
var three = function connected() {
    console.log('3: 请求处理中');
    eventEmitter.emit('readState_four');// 触发  事件
};

//为处理程序 绑定事件
eventEmitter.on('readState_zero',zero);
eventEmitter.on('readState_one',one);
eventEmitter.on('readState_two',two);
eventEmitter.on('readState_three',three);
eventEmitter.on('readState_four', function () {
    console.log("4: 请求已完成，且响应已就绪")
});
eventEmitter.emit('readState_zero');// 触发 connection 事件
console.log("程序执行完毕。");