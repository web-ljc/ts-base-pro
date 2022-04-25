// object表示一个对象
let a:object
a = {}
a = () => {}

// {}用来指定对象中可以包含哪些属性
// 语法： {属性名：属性值}
// 在属性后边加？表示属性可选
let b: {
  name:string,
  age?: number
}
b = {
  name: '1',
  age: 1
}

// [propName: string]: any 表示任意类型的属性
let c: {
  name:string,
  [propName: string]: any
}
c = {name: '1', age: 10, gender: '1'}

/* 
  设置函数结构的类型声明
    语法:(形参: 类型) => 返回值
*/
let d:(a:number, b:number) => number
d = (n1:number, n2:number):number => {
  return 10
}

/* 
  数组的类型声明：
    类型[]
    Array<类型>
*/
// string[] 表示字符串数组
let e: string[]
e = ['1', '2']

// number 数值数组
let f: number[]

let g: Array<number>
g = [1, 2, 3]

/* 
  元组：就是固定长度的数组
*/
let h: [string, string]
h = ['hi', '2']

// enum 枚举
enum Gender{
  male = 0,
  femal = 1
}
let i: {name: string, gender: Gender}
i = {
  name: 'ls',
  gender: Gender.male
}

// & 表示同时满足
let j: {name: string} & {age: number}
j = {name: 'ls', age: 9}

// 类型的别名
type myType = 1 | 2 | 3 | 4
let k: myType
let l: myType
k = 2

