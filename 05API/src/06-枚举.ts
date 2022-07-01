// 枚举，定义一些带名字的常量，使用方法有些类似于对象

// 常量
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
// 值是自增长
console.log(Direction.Down); // 2

enum Response2 {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: Response2): void {
  // ...
}
respond("Princess Caroline", Response2.Yes)

// 数字枚举 值是数字，可以累加，可以有初始值

function getSomeValue() {
  return 1
}
// 计算值，最好放在最后边
enum E {
  B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
  A = getSomeValue(),
}

enum E1 {
  x,
  y,
  z
}
console.log(E1.x);

enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}


enum ShapeKind {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
let c2: Circle = {
  kind: ShapeKind.Square,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}


enum E {
  Foo,
  Bar,
}
function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
      //             ~~~~~~~~~~~
      // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  }
}

// 运行时的枚举
enum E {
  X, Y, Z
}
function f(obj: { X: number }) {
  return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
f(E);

// 反向映射
enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"