define( function(require, exports,module) {
     var add=require('./add');
    seajstext.value = add(1,2,3);
    //约定俗成放在模块的最底下
    module.exports=add;
});