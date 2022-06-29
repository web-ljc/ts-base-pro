"use strict";
// class类
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
// 父类 - 基类
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) { super(name); } // super父类构造函数
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
    constructor(theName) {
        this.age = 1;
        this.test = 'test';
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake2 extends Animal2 {
    constructor(name) { super(name); } // super父类构造函数
    move(distanceInMeters = 5) {
        this.test = '234';
        console.log("Slithering...", this.test);
        super.move(distanceInMeters); // super指的是父类原型
    }
}
let sam2 = new Snake2("Sammy the Python");
sam2.move();
console.log(sam2, sam2.test);
let ani2 = new Animal2('hi');
// ani2.move()
// readonly
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8; // 私有只读属性
        this.name = theName;
        this.numberOfLegs = 1; // 只读属性必须在声明时或构造函数里被初始化
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// 参数属性
class Octopus2 {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
// 存取器
// getter 取值函数
// setter 存值函数
let passcode = "secret passcode";
class Employee {
    constructor() {
        this._fullName = '';
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "44445555";
if (employee.fullName) {
    alert(employee.fullName);
}
