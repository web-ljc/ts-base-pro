

let x21: [string, number] // 确定长度和类型

x21 = ['123', 2]

x21.push(2) // 越界的元素，类型为联合类型

// 可选元素
let x3: [number, string?, boolean?]
x3 = [1, '3', false]
x3 = [3, 'a']
x3 = [23]


declare function test2(...args: [number, string]): void
declare function test2(arg1: number, arg2: string): void



let list1: [number, ...string[]] = [1, '2', '3']
let list2: [string, ...number[]] = ['a', 1, 2]

console.log(list2);
