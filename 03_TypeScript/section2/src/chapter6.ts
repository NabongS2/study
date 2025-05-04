// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar:any = "10";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// console.log(anyVar.toUpperCase());

let num: number = 10;
num = anyVar;
console.log(num);

// unknown
let unknownVar : unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 무조건 대입은 할 수 없고 if 타입 검사를 해야 가능하다.
if(typeof unknownVar === "number") {
  num = unknownVar
}