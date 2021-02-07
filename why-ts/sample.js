// function sum(a, b) {
//     return a + b;
// }

// // sum(10, '20'); // 1020
// var result = sum(10, 20);
// result.toLocaleString();

// 자바스크립트 파일에서 타입스크립트 같은 효과를 줄 수 있음
// lint 에서 인자의 타입이 일치하지 않으면 빨간줄 표시
// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
    return a + b;
}
sum(10, '20');