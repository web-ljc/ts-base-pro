/* 
  泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
  泛型变量T  T表示任何类型
  
*/
// function fn(a: number): number {
//   return a
// }

function fn<T>(a: T): T{
  return a
}

// 可以直接调用具有泛型的函数
fn(19) // 不指定泛型，TS可以自动对类型进行推断
fn<string>('hello') // 指定泛型

function fn2<T, K>(a: T, b: K):T {
  console.info(b)
  return a
}
fn2<number, string>(123, 'hi')

interface Inter{
  length: number
}
// T extends Inter 表示泛型T必须是Inter实现类
function fn3<T extends Inter>(a: T): number{
  return a.length
}
fn3('123')

class MyClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}
const mc = new MyClass<string>('zhang san')