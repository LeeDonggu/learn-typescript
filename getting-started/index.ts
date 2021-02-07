// 글로벌 환경으로 타입스크립트 설치
// npm i typescript -g
// tsc라는 타입스크립트 컴파일을 로컬 환경에서 사용하기 위해 설치
// tsc index.ts 명령어로 실행시 타입스크립트 파일을 자바스크립트 파일로 변환

function sum2(a: number, b: number): number {
    return a + b;
}

sum2(10, 20);