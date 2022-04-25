/* 
  在定义函数或类时，遇到类型不明确可以使用泛型
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