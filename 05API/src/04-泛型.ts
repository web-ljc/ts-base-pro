

// function identity(arg: number): number {
//   return arg;
// }

function identity<T>(arg: T): T {
  return arg;
}
identity(123)

interface MyArray<T> {
  [n: number]: T
}
let a: number[] = [1, 3]
// 泛型写法
let b: MyArray<number> = [2, 3]


// 泛型变量
function identity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}
identity2([1, '2', false])

// 泛型类型
let a2: <T>(arg: Array<T>) => Array<T> = identity2


// 函数泛型的注解方式
let a5: <T>(arg: T) => T = identity
// 对象字面量定义泛型
let a4: { <T>(arg: T): T} = identity
// 泛型接口的定义方式
interface Ifn {
  <T>(arg: T): T
}
let a3: Ifn = identity
a3('2')


// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };


// 泛型类
class MinClass<T> {
  public list: T[] = []
  add(num: T) {
    this.list.push(num)
  }
  min(): T {
    let minNum = this.list[0]
    for(let i = 0; i < this.list.length; i++) {
      if(minNum > this.list[i]) minNum = this.list[i]
    }
    return minNum
  }
}
let test3 = new MinClass<number>()


// 泛型约束
interface LenthWise {
  length: number
}
type LenthWise1 = string | LenthWise
function fn5<T extends LenthWise1>(arg: T): T {
  console.log(arg.length);
  return arg
}

interface Person3 {
  name: string
  age: number
}
type k11 = keyof Person3[]


// keyof操作符
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x2 = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x2, "a"); // okay
// getProperty(x2, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{}; // 断言写法
//   for (let id in first) {
//       (<any>result)[id] = (<any>first)[id]; // 断言写法
//   }
//   for (let id in second) {
//       if (!result.hasOwnProperty(id)) {
//           (<any>result)[id] = (<any>second)[id];
//       }
//   }
//   return result;
// }
// class Person {
//   constructor(public name: string) { }
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//       // ...
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n3 = jim.name;
// jim.log();

interface IOne {
  content: string
  title: string
}
interface ITwo {
  url: string
}
class Test <T extends IOne & ITwo> {
  props: T
  constructor(public arg: T) {
    this.props = arg
  }
  info() {
    return {
      url: this.props.url,
      title: this.props.title
    }
  }
}

// 泛型里使用类类型
function create<T>(c: {new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}
class ZooKeeper {
  nametag: string;
}
class Animal {
  numLegs: number;
}
class Bee extends Animal {
  keeper: BeeKeeper;
}
class Lion extends Animal {
  keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
