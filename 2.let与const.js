// let 命令
//let是在代码块内有效，var是在全局范围内有效.

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    })
} // 输出01232456789
for (var j = 0; j < 10; j++) {
    setTimeout(function () {
        console.log(j);
    })
} // 输出10个10
//let 不存在变量提升，var 会变量提升:
// console.log(a);  //ReferenceError: a is not defined
// let a = "apple";

// console.log(b);  //undefined
// var b = "banana";

//const 命令
//const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。