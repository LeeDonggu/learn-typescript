// 유니온 타입(OR, |)

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
// 함수 내부에서 타입가드 작성 필요하지만 타입 선택 가능
// function askSomeone(someone: Developer | Person) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }
// askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
// askSomeone({ name: "동구", age: 28 });

// 인터섹션 타입을 이용하면 somone. 으로 내부 속성을 찾으면 모든 속성 제공
// 함수 내부에서 타입 가드 작성 필요하지만 타입들의 합집합의 타입이 필요함
function askSomeone(someone: Developer & Person) {
  //   someone.name;
  //   someone.skill;
  //   someone.age;
}

askSomeone({ name: "디벨로퍼", skill: "웹 개발", age: 34 });
askSomeone({ name: "동구", age: 28 });

// 인터섹션 타입 (AND, &)
var seho: string | number | boolean;
var capt: string & number & boolean;
