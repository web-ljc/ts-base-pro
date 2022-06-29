

// 函数注解
// 1 可选参数必须在必填参数后边
// 2 参数可以设置默认值
// 3 剩余参数 ...restOfName
function testFn4(a: number, b = 1, ...restOfName: number[]): number {
  return a + b
  // throw Error('error')
}
testFn4(1)
testFn4(1, 2, 3)

const testFn5: (a:number, b:number)=> string = (a, b) => {
  return a + b + ''
}

// 解构入参对象，并定义数据类型
function testFn6(
  {first, second}: {first:number, second: number} = {first: 1, second:2}
) {
  return first + second
}
// 解构入参对象
function testFn7({first = 2} : {first: number}) {
  return first
}

// this参数 
// 可以通过interface定义this指向到自身对象
// 函数返回数据，可以通过interface定义，直接引用
interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

let deck:Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 重载
function reverse(x: string) : string
function reverse(x: number) : number
function reverse(x: string | number) {
  if(typeof x === 'string') {
    return x.split('').reverse().join('')
  }
  if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  }
}

