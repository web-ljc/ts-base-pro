

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// type SearchFunc = (source: string, subString: string) => boolean

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// function mySearch(source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// }

// let mySearch: (source: string, subString: string) => boolean = function(source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// }


// 可索引的类型
interface NumberArray {
  [index: number]: number
  [propName: string]: any
}
let obj10: NumberArray = {
  0: 1,
  1: 2,
  2: 3
}


interface NumberDictionary {
  [index: string]: number | string
  length:  number
  name: string
}

interface Person {
  readonly name: string
  age: number
  [propName: string]: string | number
}
let person11:Person = {
  name: '2',
  age: 2
}
// person11.name = '3' // 不能更改，只读


// 类上的 抽象公共的属性和方法，抽成一个接口  implements
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void
}
class Clock implements ClockInterface {
  currentTime: Date = new Date;
  constructor(h: number, m: number) { }
  setTime() {
  }
}

// 提取constructor 构造函数
interface AlarmConstructor {
  new(h: number, m: number): Alarm
  getTime1(): void
}
// 原型&实例上的方法
interface Alarm {
  name: string
  alert(): void
}
// 校验 传入的类是否匹配
function createAlarm(alarm: AlarmConstructor, h: number, m: number) {
  return new alarm(h, m)
}


interface Light {
  color: string
}
class Door {}
// 继承Door 实现Alarm
class Car extends Door implements Alarm, Light{
  alert() {}
  color = 'red'
  name = 'test'
  constructor(h: number, m: number) {
    super()
  }
  static getTime1() {}
}

let car = createAlarm(Car, 12, 12) // 创建实例，通过自定义方法返回传入类的实例


// 接口继承接口
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square; // 类型推断
square.color = "blue";
square.sideLength = 10;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;



// interface test{
//   name: string // 属性
//   [propsName: string]: any // 索引
//   getName(a: number): void // 函数
// }
// // 继承
// interface one extends test {
// }
// // 实现接口
// class two implements one {
//   name = '123'
//   getName(a: number): void { 
//   }
// }


// 接口继承类
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() { }
}
class TextBox extends Control {
  select() { }
}
// 错误：“Image”类型缺少“state”属性。
// class Image1 implements SelectableControl {
//   select() { }
// }
// class Location1 {
// }

// 类
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
// 接口
interface PointInterface {
  x: number
  y: number
}
// 接口继承类
interface Point3D extends Point {
  z: number
}
// 继承接口
// interface Point3D extends PointInterface {
//   z: number
// }

let point3D: Point3D = {
  x: 123,
  y: 123,
  z: 1
}
