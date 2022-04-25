import { arr } from '../02test'

let fn:(a:number, b:number) => number
fn = (a:number, b:number):number => {
  return a+b
}

let obj: {name: string, age?:number}
obj = {name: 'ls', age: 12}

console.info(arr)
