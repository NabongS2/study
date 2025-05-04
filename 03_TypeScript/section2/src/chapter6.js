// any
// 특정 변수의 타입을 우리가 확실히 모를 때
var anyVar = "10";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};
// console.log(anyVar.toUpperCase());
var num = 10;
num = anyVar;
console.log(num);
// unknown
var unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = function () { };
// 무조건 대입은 할 수 없고 if 타입 검사를 해야 가능하다.
if (typeof unknownVar === "number") {
    num = unknownVar;
}
