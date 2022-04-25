// 使用字面量进行类型声明
let a: 10
// a = 11
a = 10 // a只能为10

// 可以使用 ｜ 来连接多个类型(联合类型)
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string
c = true
c = 's'

// any 表示的是任意类型，一个变量设置类型为any，后相当于关闭TS类型检测
// let d:any

// 声明变量不指定类型，则解析器会自动判断变量的类型为any
let d
d = 10
d = true

// unknown 表示未知类型的值
let e: unknown
e = 1
e = '2'

let s:string
s = d
// 是一个类型安全的any
// unknown类型的变量，不能直接复制给其他变量
// s = e
if(typeof e === 'string') {
  s = e
}

// 类型断言,可以用来告诉解析器变量的实际类型
/* 
  语法
    变量 as 类型
    <类型> 变量
*/
s = e as string
s = <string> e

// void 用来表示空，以函数为例，表示没有返回值的函数
const fn = (num): void => {
  return
  // if (num > 0) return true
  // if (num < 0) return '222'
}

// never 表示永远不会返回结果
const fn2 = (): never => {
  throw new Error('err')
}


export{}