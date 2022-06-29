
// class类
class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}
let greeter = new Greeter("world");

// 父类 - 基类
class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) { super(name); } // super父类构造函数
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters); // super指的是父类原型
  }
}

let sam = new Snake("Sammy the Python");
sam.move();

// OOP： 封装 继承 多态

// 类成员的修饰符
// 默认 public， 公共的成员属性：
// 1. 自身调用
// 2. 子类可以调用
// 3. 实例可以调用

// private 私有
// 1. 自身调用

// protected
// 1. 自身调用
// 2. 子类可以调用

class Animal2 {
  public name: string;
  private age: number = 1
  public test: string = 'test'
  public constructor(theName: string) { this.name = theName; }
  protected move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake2 extends Animal2 {
  constructor(name: string) { super(name); } // super父类构造函数
  move(distanceInMeters = 5) {
      this.test = '234'
      console.log("Slithering...", this.test);
      super.move(distanceInMeters); // super指的是父类原型
  }
}

let sam2 = new Snake2("Sammy the Python");
sam2.move();
console.log(sam2, sam2.test);

let ani2 = new Animal2('hi')
// ani2.move()

// readonly
class Octopus {
  public readonly name: string;
  private readonly numberOfLegs: number = 8; // 私有只读属性
  public constructor (theName: string) {
      this.name = theName;
      this.numberOfLegs = 1 // 只读属性必须在声明时或构造函数里被初始化
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

// 参数属性
class Octopus2 {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}

// 存取器
// getter 取值函数
// setter 存值函数
let passcode = "secret passcode";
class Employee {
    private _fullName: string = '';
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "44445555"; // set
if (employee.fullName) {
    console.log(employee.fullName); // get
}


// 抽象类
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
