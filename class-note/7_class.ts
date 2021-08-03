class Person {
  // private 로 접근 제한 가능
  // publice 으로 접근 허용 가능
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
