// enum 타입을 사용할 때 속성의 값을 초기화 하지 않으면 숫자로 초기화됨
// 초기화를 하지 않으면 0부터 1씩 숫자가 증가해서 초기값이 지정됨
// 숫자로 초기화하면 초기화 값부터 증가
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// enum 타입을 파라미터로 사용하게 되면 enum에서 제공하는 함수의 타입만 파라미터로 넘길 수 있다.
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}

askQuestion(Answer.Yes);
askQuestion("Yes");
