// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// Common Js (CJS)
// module.exports = {
//     add,
//     sub,
// }

// ES Module (ESM)
// export {add, sub};