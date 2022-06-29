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





