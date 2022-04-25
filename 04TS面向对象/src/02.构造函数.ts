
class Dog{
  name:string
  age:number

  // constructor 构造函数
  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中，this就表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    // console.info(this)
    this.name = name
    this.age = age
  }

  bark() {
    // console.info('wang wang')
    // 在方法中可以通过this来表示当前调用的方法对象
    console.info(this.name)
  }
}

const dog1 = new Dog('小白', 9)
const dog2 = new Dog('小黑', 3)

console.info(dog1)
console.info(dog2)
dog2.bark()

export {}