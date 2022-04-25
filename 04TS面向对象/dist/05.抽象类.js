/*
  以abstract开头的类是抽象类
    抽象类和其他类区别不大，只是不能用来创建对象
    抽象类就是专门用来被继承的

    抽象类中可以添加抽象方法
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    sayHello() {
        console.info('wang');
    }
}
const dog = new Dog('小白');
dog.sayHello();
export {};
