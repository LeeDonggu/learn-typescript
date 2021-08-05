// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText("하이"); // 문자열 하이
// logText(true); //진위값 true

// function logText<T>(text: T) {
//   console.log(text);
//   return text;
// }
// logText<string>("하이");

// function logText(text: string) {
//   console.log(text);
//   //   text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText("a");
// logText(10);
// const num = logNumber(10);
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// const str = logText<string>("안녕하세요");
// str.split("");
// const login = logText<boolean>(true);

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 'abc',
//   selected: false,
// };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "abc", selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength(["hi", "abc"]);
