
// 声明库
// declare let jQuery: (param: string) => void

import {
  jQuery, foo, greet, myLib, getWidth, GreetingSettings, GreetingLike
} from 'jquery'

console.log(jQuery('#box'));

let foo2 = foo
foo2  = 123

// 声明后直接使用
greet('hi')


myLib.name = 'myLib'
myLib.getName(myLib.name)

let x31: string = getWidth(1)
let arr31: string[] = getWidth('all')

let GreetingSettings1: GreetingSettings = {
  greeting: 'greeting'
}

let GreetingSettings2: GreetingLike = {
  greeting: 'greeting'
}


const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
// myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
    constructor() {
        super("Very special greetings");
    }
}