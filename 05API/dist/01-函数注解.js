"use strict";
// 函数注解
// 1 可选参数必须在必填参数后边
// 2 参数可以设置默认值
// 3 剩余参数 ...restOfName
function testFn4(a, b = 1, ...restOfName) {
    return a + b;
    // throw Error('error')
}
testFn4(1);
testFn4(1, 2, 3);
const testFn5 = (a, b) => {
    return a + b + '';
};
// 解构入参对象，并定义数据类型
function testFn6({ first, second } = { first: 1, second: 2 }) {
    return first + second;
}
// 解构入参对象
function testFn7({ first = 2 }) {
    return first;
}
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
function reverse(x) {
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
}
