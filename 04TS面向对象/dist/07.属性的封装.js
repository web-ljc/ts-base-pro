"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // 定义方法
    getName() {
        return this._name;
    }
    setName(val) {
        this._name = val;
    }
}
const per = new Person('ls', 18);
/*
  现在属性是在对象中设置的，属性可以任意的被修改
    属性可以任意修改会导致对象中的数据不安全
*/
// per.name = 'zs'
// per.age = -38
per.setName('zs');
console.info(per.getName());
