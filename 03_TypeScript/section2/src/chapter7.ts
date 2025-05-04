// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function fun1() : string {
  return "hello";
}

// function fun2() : void {
//   console.log("hello");
// }

function fun2() : undefined {
  console.log("hello");
  return undefined;
}

// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
// a = null;

// never
// never -> 존재 하지 않은 , 불가능한 타입
function fun3() : never {
  while(true) {}
}

function fun4() : never {
  throw new Error;
}

let a: never;
// 아무것도 다 넣지 못한다.