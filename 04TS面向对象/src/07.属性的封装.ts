
class Person {
  /* 
    public 修饰的属性可以在任意位置访问，默认
      包括子类

    private 私有属性，私有属性只能在类内进行访问
      通过在类中添加方法使得私有属性可以被外部访问

    protected 受保护的属性，只能在当前类和子类中访问
  */
  private _name: string
  private _age: number
  
  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  /* 
    getter 方法用来读取属性
    setter 方法用来设置属性
      属性的存取器
  */
  
  // 定义方法
  getName() {
    return this._name
  }
  setName(val: string) {
    this._name = val
  }

  // TS中设置getter方法方式
  get name() {
    return this._name
  }
  set name(val: string) {
    this._name = val
  }

}

const per = new Person('ls', 18)
/* 
  现在属性是在对象中设置的，属性可以任意的被修改
    属性可以任意修改会导致对象中的数据不安全
*/
// per.name = 'zs'
// per.age = -38

per.setName('zs')
console.info(per.getName())

per.name = 'ww'
console.info(per.name)


class A{
  protected num: number
  constructor(num: number) {
    this.num = num
  }
}
class B extends A {
  test() {
    console.info(this.num)
  }
}

class C{
  // 直接将属性定义在构造函数中
  constructor(public name: string, public age: number){
  }
}
const c = new C('11', 3)

export {}
