
// 声明全局库
declare let jQuery: (param: string) => void;

// 声明全局变量
declare var foo: number

// 声明全局函数
declare function greet(params: string): void

// 带属性的对象
declare namespace myLib {
  let name: string
  function getName(s: string): string
  namespace fn {
    let test1: string
    function test(): void
  }
}

// 函数重载
declare function getWidth(n: number): string
declare function getWidth(s: string): string[]

// 可重用类型
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

// declare function greet(setting: GreetingSettings): void;


type GreetingLike = string | (() => string) | MyGreeter;

// declare function greet(g: GreetingLike): void;


declare class Greeter {
  constructor(greeting: string);

  greeting: string;
  showGreeting(): void;
}

export {
  jQuery,
  foo,
  greet,
  myLib,
  getWidth,
  GreetingSettings,
  GreetingLike
}
