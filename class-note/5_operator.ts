// 유니온 타입

// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage("hello");
// logMessage(100);

// 하나의 타입 이상을 사용할 수 있다.
var seho: string | number | boolean;
// typeof를 이용해서 타입을 비교하면 타입을 추론해서 해당 타입에서 사용할 수 있는 속성들을 eslint에서 추천해줌
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입을 이용하면 someone. 으로 내부 속성을 찾으면 name 속성만 접근하도록 제공
// 에러가 생길 위험이 있기 때문에 두 인터페이스에서 공통된 속성만 하도록 제공
function askSomeone(someone: Developer | Person) {
  someone.name;
  someone.skill;
  someone.age;
}
