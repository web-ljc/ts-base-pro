class Person {
    constructor() {
        /*
          直接定义的属性是实例属性，需要通过对象的实例去访问
              const per = new Person()
              per.name
          
          使用static开头的属性是静态属性（类属性），可以直接通过类访问
              Peron.age
          
          readonly 开头的属性表示一个只读属性无法修改
        */
        // 定义实例属性
        // readonly name:string = '孙悟空';
        this.name = '孙悟空';
        // 在属性前使用static关键字可以定义类属性
        // static readonly age:number = 18
        this.age = 18;
    }
    // 方法：如果方法以static开头则方法就是类方法，可以直接通过类调用
    sayHello() {
        console.info('hi');
    }
}
const per = new Person();
const per2 = new Person();
per2.name = 'tom';
console.info(per, per2);
// console.info(Person.age)
per2.sayHello();
export {};
