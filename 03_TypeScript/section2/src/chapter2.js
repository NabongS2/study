// 1) 배열
var numArr = [1, 2, 3];
var strArr = ["hello", "im", "winterlood"];
// 2) 배열의 <타입>을 사용하는 방법 = 제네릭 
var boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양한 경우
// let multiArr = [1, "hello"];
// 숫자 혹은 문자 일 수 있다.
var multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 법
var doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜풀
// 길이와 타입이 고정된 배열
var tup1 = [1, 2];
tup1 = [3, 4];
var tup2 = [1, "hello", true];
var users = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    [5, "조아무개"], // 오류 발생
];
