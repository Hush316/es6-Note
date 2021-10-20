// 属性的简洁表示法
// const age = 12;
// const name = "Amy";
// const person = { age, name };
// const person = { age: age, name: name }
//上面两句效果等同
// console.log(person); //{ age: 12, name: 'Amy' }

//属性名表达式
// ES6允许用表达式作为属性名，但是一定要将表达式放在方括号内。
// const obj = {
//     ["he" + "llo"]() {
//         return "Hi";
//     }
// }
// obj.hello(); // “Hi”

//对象的拓展运算符
// 拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。
// 基本用法
// let person = { name: "Amy", age: 15 };
// let someone = { ...person };
// console.log(someone); //{name: "Amy", age: 15}

//可用于合并两个对象
let age = { age: 15 };
let name = { name: "Amy" };
let person = { ...age, ...name };
console.log(person);  //{age: 15, name: "Amy"}
