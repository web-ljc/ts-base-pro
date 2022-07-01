## TypeScript
  - 以Javascript为基础构建的语言
  - 一个JavaScript的超集
  - 可以在任何支持Javascript的平台中执行
  - TypeScript扩展了JavaScript，并添加了类型
  - Ts不能被JS解析器直接执行

### 2.1 ts是静态类型 js是动态类型
### 3.1 数据类型：
  - 原始数据类型: string number boolean null undefined symbol
  - 引用数据类型: object


  - 基础类型： string number boolean null undefined symbol
  - 新增：
    基本 any never void
    
    对象 interface
    数组 number[] string[] boolean[] 泛型Array<number>
    函数的注解

    新的语法特性：
      as 断言
      class （OOP 面向对象的三大特性）：封装，继承，多态

#### 3.1.1 any
  - any数据类型：任意数据类型
    - 用any类型标记变量， 可以是更改成任意的数据类型值
    - 用any类型标记对象， 在使用对象时不能提示属性和方法
    - 声明未赋值的变量初始值为any
      - let a // a的类型为any

#### 3.1.2 void
  - void数据类型：没有任何类型。当一个函数没有返回值时，返回值类型时void

#### 3.1.3 null/undefined
  - null && undefined 是所有类型的子类
    let u:undefined = undefined
    let n:null = null
  - 设置strictNullChecks 可以给变量定义为null或undefined
    let n:number = undefined

#### 3.1.4 Never
  - Never类型：永不存在的值的类型
    - 报错或死循环

#### 3.1.5 Object
  - 非原始类型


### 4.1 类型注解
  - let a:string = 'a' // 给变量类型进行注解
#### 4.1.1 类型推断
  - let n = 2 // 会自动推断变量类型
#### 4.1.2 联合类型
  - 联合类型的共有属性是不会报错
  - 在赋值的时候确认类型
    - let a: string | number // 给变量类型注解，联合数据类型
    - a = 1


### 5.1 接口 interface
  1. 对象的形状进行描述
  2. 对类的一部分行为的抽象

```js
  // interface 不可多，不可少
  // 可选属性 age?: number
  // 任意属性 [propName: string]: any
  // 只读属性 readonly id: number
  interface Person {
    readonly id: number,
    name: string,
    age?: number, // 可选属性
    [propName: string]: any // 任意属性
  }
```

#### 5.1.1 数组的注解
  1. 类型[]      // number[] // 纯数字数组，长度没有限制
  2. Array<类型> // Array<number>
  3. interface 方式
    ```js
    // 定义interface， 索引为number，值自定义
    interface NumberArr {
      [index: number]: number | string
    }
    let arr: NumberArr = [1, 3]
    ```
  4. 类数组
    ```js
    // interface Args{
    //  [index: number]: any,
    //  length: number
    // }
    function test() {
      let args: IArguments = arguments
    }
    ```
#### 5.1.2 函数的注解方式
  1. 函数声明的注解方式
    ```js
    function test(a: number, b: number): number {
      return a + b
    }
    ```
  2. 函数表达式的注解方式
    ```js
    let test: (a: number, b: number)=>number = (a, b) => {
      return a + b
    }
    ```
  3. this指向
    ```js
    interface Card {
      suit: string
      card: number
    }
    interface Deck {
      suits: stirng[]
      cards: number[]
      // createCardPicker函数的this指向，指向Deck对象本身
      // 函数返回Card格式对象
      createCardPicker(this: Deck): () => Card
    }
    ```
  4. 重载，表意更清楚
    ```js
    function reverse(x:string): string; // 重载
    function reverse(x:number): number; // 重载
    function reverse(x: string | number) {
      if(typeof x === 'string') {
        return x.split('').reverse().join('')
      }
      if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
      }
    }
    ```

#### 5.1.3 类的注解
  1. 继承
    ```js
    class Animal {
      name: string;
      constructor(theName: string) { this.name = theName; }
      move(distanceInMeters: number = 0) {
          console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
    }
    // 继承
    class Snake extends Animal {
      constructor(name: string) { super(name); } // super指的父类构造函数
      move(distanceInMeters = 5) {
          console.log("Slithering...");
          super.move(distanceInMeters); // super指的父类原型
      }
    }
    ```
  
  2. 修饰符
    - 类的三要素： 封装 、 继承、 多态
    - 封装通过修饰符封装
      - public
        + 自身可调用
        + 子类可调用
        + 实例可调用

      - private
        + 自身可调用

      - protected
        + 自身可调用
        + 子类可调用

      - readonly
        + 顺序 public -- readonly
        + 将属性设置为只读，只能在声明时或构造函数里被初始化
        + 不能修饰成员方法
      
    - 参数属性：简写的写法
      ```js
        class Octopus2 {
          readonly numberOfLegs: number = 8;
          readonly name: string
          constructor(name: string) {
            this.name = name
          }
        }
        // 简写
        class Octopus2 {
          readonly numberOfLegs: number = 8;
          constructor(readonly name: string) {
          }
        }
      ```
  
  3. 存取器
    - getter 取值函数 obj.name
    - setter 存值很眼熟 obj.name = 'test'

  4. 静态属性
    - static  将属性挂载到类上

  5. 抽象类
    1. 没有办法创建实例
    2. 抽象方法一定要有实现
    ```js
      abstract class Animal3 {
        abstract makeSound(): void; // 必须在派生类中实现
        move(): void {
            console.log('roaming the earch...');
        }
      }
      class Snake3 extends Animal3 {
        makeSound() {} // 继承类一定要实现抽象类的方法，类似于接口
        move(): void {
          console.log('234234');
          
        }
      }
      // new Animal3 // Error抽象类不能创建实例
    ```
  
  6. 高级技巧
    - 类当作接口使用


#### 6.1 接口
  - 函数类型
    ```js
      interface SearchFunc {
        (source: string): boolean
      }
      let mySearch: SearchFunc
      mySerach = function(source: string) {
        return !source
      }
    ```
  - 可索引的类型
    - 共支持2种索引签名：字符串和数字
      ```js
      interface NumberArray {
        [index: number]: number
      }
      ```
    - 当使用number来索引时，JS会将它转成string然后再去索引对象
    - 索引签名，有点像老大的意思，所有属性要遵从索引
      ```js
        interface NumberDictionary {
          [index: string]: number | string
          length:  number
          name: string
        }
      ``` 
    - 索引签名可以设置为只读
      ```js
        interface ReadonlyStringArray {
          readonly [index: number]: string
        }
        let myArr:ReadonlyStringArray = ['1', '2']
        myArr[1] = '3' // error
      ```
  - 类类型接口
    - 对类的一部分行为的抽象
    - 类实现多有接口中的属性和方法 对比 抽象类：抽象方法需要实现

      ```js
        // interface类的接口  implements
        interface Alarm {
          alert(): void
        }
        interface Light {
          color: string
        }
        class Door {}
        // extends 继承Door implements 实现Alarm
        class Car extends Door implements Alarm, Light{
          alert() {}
          color = 'red'
        }
      ```
    
    - 类静态部分和实例部分的区别
      - constructor存在于类的静态部分，所以不在检查的范围内
      - 静态部分和实例部分需要单独检查
        ```js
          // 静态部分
          interface ClockConstructor {
              new (hour: number, minute: number): ClockInterface;
              getName(): void
          }
          // 实例部分
          interface ClockInterface {
              tick();
          }
          function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
              return new ctor(hour, minute);
          }
          class DigitalClock implements ClockInterface {
              constructor(h: number, m: number) { }
              static getName() {}
              tick() {
                  console.log("beep beep");
              }
          }
          let digital = createClock(DigitalClock, 12, 17);
        ```
    
    - 继承接口
      ```js
        interface Shape{
          color: string
        }
        interface Square extends Shape {
          sideLength: number
        }
      ```
    
    - 接口的混合类型
      - 函数类型的interface，添加属性的方式来实现，对象的interface
      ```js
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
      ```
    
    - 接口继承类
      1. 类可以实现接口
      2. 接口可以继承接口
      3. 接口可以继承类（不太建议使用）
      ```js
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
        // 继承类
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
      ```

#### 7.1 泛型
  - 用来创建可重用的组件，一个组件可以支持多种类型的数据，在进行类型注解时，使用类型变量，不写死固定值
  - T 泛型变量 ｜ 类型变量
    ```js
      // T泛型变量，在使用时确认
      function test<T>(a: T): T {
        return a
      }
      test(1)
      test<string>('123')

      interface MyArray<T>{
        [n: number]: T
      }
      let a: number[] = [1, 3]
      let b: Array<number> = [5, 6]
    ```
  
  - 泛型类型
    ```js
      function identity2<T>(arg: Array<T>): Array<T> {
        return arg
      }
      // 1. 函数泛型的注解方式
      let a2: <T>(arg: Array<T>) => Array<T> = identity2
      
      // 2. 对象字面量的方式来定义泛型
      let b: { <T>(arg: T): T } = identity
      
      // 3. 泛型接口定义方式
      interface IFn {
        <T>(arg: T): T
      }
      let c: IFn = identity
    ```

  - 泛型类 | 泛型约束
    - 泛型类
      ```js
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
        let test = new MinClass<number>()
      ```
    
    - 泛型约束
      - 泛型约束 extends 接口的方式（不一定是接口）
      ```js
        interface LenthWise {
          length: number
        }
        // 继承接口
        function fn5<T extends LenthWise>(arg: T): T {
          console.log(arg.length);
          return arg
        }


        // 在泛型约束中使用类型参数 keyof操作符获取对象所有key
        function getProperty<T, K extends keyof T>(obj: T, key: K) {
          return obj[key];
        }
        let x2 = { a: 1, b: 2, c: 3, d: 4 };
        getProperty(x2, "a"); // okay
        getProperty(x2, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
      ```

    - 多重泛型约束 & 交叉类型
      - 将多个类型合并为一个类型, 包含了所需的所有类型的特征
      ```js
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
      ```

    - 泛型中的类类型
      在约束或推论有更好的方式
        ```js
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
        ```

#### 8.1 元组
  1. 确定成员类型、长度
  2. push越界时，类型为联合类型
  3. 可选的元素类型
    ```js
      let list: [number, string?, boolean?]
    ```
  4. 拓展运算符
    ```js
      declare function test2(...args: [number, string]): void;
      declare function test2(arg1: number, arg2: string): void

      let list1: [number, ...string[]] = [1, '2', '3']
      let list2: [string, ...number[]] = ['a', 1, 2]
    ```

