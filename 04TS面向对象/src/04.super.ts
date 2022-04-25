// 动物类
class Animal{
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHello() {
    console.info('animal')
  }
}
class Dog extends Animal {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  sayHello() {
    // 在类的方法中，super就表示当前类的父类
    super.sayHello()
  }
}

const dog2 = new Dog('旺财', 3)
dog2.sayHello()

export {}