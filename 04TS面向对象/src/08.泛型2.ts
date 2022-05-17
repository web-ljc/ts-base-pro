/* 
  泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
  泛型变量T  T表示任何类型
*/

function fn1 (n1: string, n2: string):Array<string> {
  return [n1]
}

// 泛型，用 <> 包含多个变量,变量赋给相应的数据，在使用的时候再定义类型， 泛型变量T，T表示任何类型 
function f5<T, S>(n1:T, n2:S):Array<T|S> {
  return [n1, n2]
}

f5<number, string>(10, '2')
f5(10, '2')
f5<string, Boolean>('1', true)


// 泛型约束
// 定义接口
interface ILength {
  length: number
} 
// 泛型T受到接口约束， 传入类型要有长度
function fn6<T extends ILength>(n: T):number{
  return n.length
}
fn6<string>('123')
// fn6<number>(123)  // 数字不满足约束


// 1. 泛型直接定义到函数
let f7 = function<T>(v1:T, v2:T):boolean {
  return v1 === v2
}
f7<string>('1', '2')

// 2. 使用泛型定义到函数
// 接口
interface IFunc {
  (v1: string, v2:string): boolean
}
let f8:IFunc = function(v1, v2) {
  return v1 === v2
}
f8('a', 'b')

// 接口使用泛型定义数据
interface IFunc2 {
  <T>(v1:T, v2:T): boolean
}
// 将函数的参数抽离到接口
let f9:IFunc2 = function(v1, v2) {
  return v1 === v2
}
f9<number>(2, 3)

// 接口泛型
interface IFunc3<T> {
  (v1: T, v2:T): boolean
}
let f10:IFunc3<number> = function(v1, v2) {
  return v1 === v2
}
f10(2, 3)


