// type은 확장 불가
// interface는 확장 가능
type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getToto(toto: Todo) {}
