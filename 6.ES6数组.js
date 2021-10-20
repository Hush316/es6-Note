// 数组创建
//Array.of() 将参数中所有值作为元素形成数组
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]

// 参数值可为不同类型
console.log(Array.of(1, '2', true)); // [1, '2', true]

// 参数为空时返回空数组
console.log(Array.of()); // []

//Array.from() 将类数组对象或可迭代对象转化为数组。
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]

// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]

//类数组对象
// 一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。
let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
});
console.log(); // ['1', '2', 3]

// 没有 length 属性,则返回空数组
let array = Array.from({
    0: '1',
    1: '2',
    2: 3,
});
console.log(array); // []

// 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组  
let array1 = Array.from({
    a: 1,
    b: 2,
    length: 2
});
console.log(array1); // [undefined, undefined]

// 扩展运算符
// 复制数组
let arrcopy = [1,2]
newarrcopy = [...arrcopy]
console.log(newarrcopy); //[1,2]

//数组含空位
let nullarr = [1,,3]
newnullarr = [...nullarr]
console.log(newnullarr); //[ 1, undefined, 3 ]

//合并数组
console.log([...[1, 2], ...[3, 4]]); // [1, 2, 3, 4]