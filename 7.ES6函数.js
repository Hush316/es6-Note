// 基本用法
function fn(name, age = 17) {
    console.log(name + "," + age);
}
fn("Amy", 18);  // Amy,18
fn("Amy", "");  // Amy,
fn("Amy");     // Amy,17
// 注意点：使用函数默认参数时，不允许有同名参数。

function fp(value) {
   return  value * 2 ;
}
console.log(fp(1), 666666666);      //2 666666666

//箭头函数
var f = v =>v
//等价于
// var f = function(a) {
//     return a
// }
console.log(f(1), 55555); //1 55555

//当箭头函数没有函数或者有多个参数,要用(括起来)
var o = (a,b) =>(a*b)
console.log(o(6, 2));  // 12

// 当箭头函数函数体有多行语句，用 { } 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 { } , 结果会自动返回。
var k = (a,b) => {
    let result = a+ b
    return result
}
console.log(k(6,2));  //8

// 注意点：没有 this、super、arguments 和 new.target 绑定。
// 箭头函数里面没有 this 对象，
// 此时的 this 是外层的 this 对象，即 Window 
