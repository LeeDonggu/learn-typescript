// ES2015 (ES6) 이후부터 나온 문법
// 생성자 패턴을 이용해서 class 문법을 제공하는것
// 아래의 두가지 문법이 동일함

function Persion(name, age) {
    this.name = name;
    this.age = age;
}

var dg = new Person('동구', 100);
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성 되었습니다.
console.log(seho);
