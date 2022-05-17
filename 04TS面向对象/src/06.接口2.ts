/* 
  接口 Interface 
    - 描述一个对象的类型
    - 首字母大写
  
  Interface 与 Type的区别
    - 相同点
      1. 描述一个对象或函数
      2. 允许扩展
        - interface 通过 extends
        - type 通过 & 
    - 不同点
      1. Interface支持声明合并，写多个同样的Interface，会合并成一个
      2. type不但可以声明基本类型，还可以声明联合类型、元组类型
      3. type 可以作为泛型变量

*/
interface Person {
  name: string, // 必填属性
  age?: number, // 可选属性
  [propName: string]: any // 任意属性，确定属性和可选属性必须是它的子属性
}

let tom: Person = {
  name: 'tom',
  age: 18,
  id: 2,
  school: 'bei da'
}

// 接口，声明合并
interface Person {
  id: number
}

// 接口允许扩展 extends， 类似于class的继承
interface User extends Person {
  say: Function
}

let jake: User = {
  name: 'jake',
  id: 3,
  say: function() {}
}

// 函数，输入类型，输出类型(返回型)
function f1(n1: number, n2: number):number {
  return n1+n2
}
// 泛型
function f3(n1: string, n2?: string):Array<string> {
  return [n1]
}
// 函数，输入类型n1是数字类型，n2是可选参数， void 没有返回值
function f2(n1: number = 1, n2?: number):void {
  let sum = n1
}
