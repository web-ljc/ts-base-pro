// 动物类
class Animal{
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.info('animal')
  }
}
/* 
  Animal被称为父类，Dog被称为子类
  使用继承后，子类将拥有父类所有的方法和属性
  通过继承可以将多个类中共有的代码写在一个父类中
    只需要写一次即可让所有的子类都同时拥有父类中的属性
  如果在子类添加了和父类相同的方法，则子类会覆盖掉父类，称为重写
*/
// Dog extends Animal
class Dog extends Animal {
  run() {
    console.info(`${this.name}runing`)
  }
  sayHello() {
    console.info('wwang wang')
  }
}

class Cat extends Animal {
  
}

const dog = new Dog('小白', 2)
const cat = new Cat('mimi', 2)
dog.sayHello()
dog.run()
cat.sayHello()

export {}