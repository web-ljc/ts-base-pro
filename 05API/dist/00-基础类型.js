"use strict";
// 1. 布尔注解
let isDone = true;
// 2. 数字
let decLiteral = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
// 3. 字符串
let test = 'test';
let age = 37;
let sentence = `Hello, my name is ${test}.

I'll be ${age + 1} years old next month.`;
// 4. any数据类型： 任意数据类型
//   - 如果是不同变量的话，可以是任意的数据类型
//   - 如果是对象的话，any 不能够提示原有的属性和方法
//   - 声明未赋值的变量初始值为any  // let a // a的类型为any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
prettySure.toString();
// 设置为Object类型，只能更改任意值，不能调用它的任意方法，但是只能调用Object的方法
prettySure = 3;
let obj = {
    name: 'obj',
    toString: function () { }
};
console.log(obj.name); // 会有提示obj的属性
let obj2 = {
    name: 'obj2'
};
console.log(obj2.name); // 没有提示obj2的属性
