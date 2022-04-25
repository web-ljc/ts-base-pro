// 声明一个变量a，同时制定它的类型为number
let a: number
a = 10
a = 2
// a = '2' // 此行代码会报错，因为变量a的类型是number，不能赋值字符串

let b: string
b = '1'
// b = 10

// 声明完变量直接进行赋值
// let c:boolean = false;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false
c = true

function sum(a:number, b:number): number {
  return a + b
}
sum(123, 456)
// sum(123, 456, 9) // 传多了提示
// sum(123, '456') // 格式不对提示
// sum(123) // 传少了提示
let res = sum(1, 2) // 参数外的类型，定义返回结果类型

export {}