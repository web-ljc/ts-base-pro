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
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
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
function testFn() {
    console.log(1);
}
// 定义null 和 undefined 类型
// strictNullChecks let num: number = undefined
let u = undefined;
let n = null;
// u = 3
// n = 4
let num = undefined;
// never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// Object非原始类型
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// create([])
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
/*********************/
// 类型推论
// 能推断正确数据类型，不需要做类型注解
let x = 3;
// a,b 需要类型注解
function testFn2(a, b) {
    return a + b;
}
let x1;
x1 = 1;
x1 = '2';
let person = {
    id: 1,
    name: 'p',
    age: 1,
    sex: 'male'
};
person.name = 'person';
// person.id = 2 // error
let arr = [1, 2, 3];
let arr2 = [1, 2];
let arr3 = [1, 3, 4, '2'];
function testFn3() {
    let args = arguments;
}
