//ES6 之前判断字符串是否包含子串，用 indexOf 方法，ES6 新增了子串的识别方法。

// includes()：返回布尔值，判断是否找到参数字符串。
// startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部。
// let string = "apple,banana,orange";
// string.includes("banana");     // true
// string.startsWith("apple");    // true
// string.endsWith("apple");      // false
// string.startsWith("banana", 6)  // true
// 这三个方法只返回布尔值，如果需要知道子串的位置，还是得用 indexOf 和 lastIndexOf 。
// 这三个方法如果传入了正则表达式而不是字符串，会抛出错误。而 indexOf 和 lastIndexOf 这两个方法，它们会将正则表达式转换为字符串并搜索它。

// repeat()：返回新的字符串，表示将字符串重复指定次数返回。
// console.log("Hello,".repeat(2));  // // "Hello,Hello,"

//模板字符串

//基本用法
// let string = `Hello'\n'world`;
// console.log(string);
// "Hello'
// 'world"

//多行字符串
// let string1 = `Hey,
// can you stop angry now?`;
// console.log(string1);
// Hey,
// can you stop angry now?

// 字符串插入变量和表达式。

// 变量名写在 ${ } 中，${ } 中可以放入 JavaScript 表达式。
// let name = "Mike";
// let age = 27;
// let info = `My Name is ${name},I am ${age + 1} years old next year.`
// console.log(info);
// My Name is Mike,I am 28 years old next year.

//字符串中调用函数
// function f() {
//     return 'hello world'
// }
// let string2 = `Game start，${f()} `
// console.log(string2);
// Game start，hello world