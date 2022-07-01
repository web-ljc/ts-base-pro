## 执行命令
```js
// 1. 项目配置文件
tsc --init
// 2. 更改 tsconfig.json 文件中的 rootDir / outDir 地址
// 3. 执行命令，自定编译
tsc
```

## 1. 声明文件
  - 常见库的格式以及如何为每种格式书写正确的声明文件
  
  - 识别库的类型
    1. 全局库：例如jQuery
    2. 模块化库：一些库只能工作在模块加载器的环境下，例如express只能在node.js里工作
  
  - UMD模块：指那些既可以作为模块使用（通过导入）又可以作为全局（在没有模块加载器的环境里）使用的模块。例如Moment.js 可以引入包，也可以通过script引入

  - 全局插件：一个全局插件是全局代码，他们会改变全局对象的解构

## 2. 全局的声明文件定义方式
  - interface type 不需要declare
  - interface会出现声明合并的情况

  ```js
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
    declare function getWidth(n: number): string;
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
  ```

## 3. 模块化库，自定义声明文件
  - 更改配置文件 baseUrl  paths
  - 新建对应包的文件夹 export import


## 4. 规范
  - 普通规范 使用类型要小写
    ```js
      function reverse(s: string): string
    ```
  - 回调函数的类型, 没有返回值设置 void
    ```js
      function fn(x:()=> void) {
        x()
      }
    ```
  - 回调函数里可选参数， 不要在回调函数里写可选参数
    ```js
      interface Fetcher {
          getObject(done: (data: any, elapsedTime: number) => void): void;
      }
    ```
  - 回调函数与重载
    ```js
      declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
    ```
  - 函数重载, 精确的排在一般之前
    ```js
      /* OK */
      declare function fn(x: HTMLDivElement): string;
      declare function fn(x: HTMLElement): number;
      declare function fn(x: any): any;

      var myElem: HTMLDivElement;
      var x = fn(myElem); // x: string, :)
    ```
  - 可选参数
    ```js
      /* OK */
      interface Example {
          diff(one: string, two?: string, three?: boolean): number;
      }
    ```
  - 联合类型
    ```js
      /* OK */
      interface Moment {
          utcOffset(): number;
          utcOffset(b: number|string): Moment;
      }
    ```
    
