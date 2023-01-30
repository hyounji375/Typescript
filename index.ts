//변수 타입 지정.
let name: string = "Lion";
//name 변수에는 string 타입만 가능.

let name: string[] = ["Lion", "Tiger"];
//name 변수의 타입은 string 타입을 값으로 가지는 배열.

let name: { name: string; gender?: string } = { name: "Lion" };
//name { name(키): string 타입의 값}을 가지는 object 타입.
//gender?는 gender라는 값이 있어도 되고 없어도 됨. name은 꼭 있어야 하지만 gender가 없다고 해서 에러가 나지는 않음.

type Animal = { [key: string]: string };
let name: Animal = { name: "Lion", gender: "Man" };
//name, gender 등등 지정해야 할 속성이 많으면 {[key:string]:string} 이렇게 적어서 string 타입의 어떠한 키와 값이든 가질 수 있게 할 수 있다.

let name: string | number = 1234;
//Union 타입. name 타입은 string 또는 number

type Animal = string | number;
let name: Animal = 123;
//타입을 만들어서 변수에 담아 사용할 수 있음. name은 Animal이라는 타입을 가져서 string 또는 number의 타입.

type Animal = [string, number];
let name: Animal = ["Lion", 1234];
//tuple 타입. Animal이라는 타입에는 꼭 첫 번째 값은 string, 두 번째 값은 number 값이 와야 한다.

// 함수 타입 지정.
function foo(x: number): number {
  return x + 10;
}
//x:number는 매개변수 x의 타입이 number. foo(x: number) 뒤의 number는 return 값의 타입이 number임을 뜻함.
//그래서 number 타입의 매개변수 x를 받아서 number 타입의 값을 return 하는 함수.

//class 타입 지정
class User {
  name: string; //name이라는 변수와 그 타입 지정
  constructor(name: string) {
    this.name = name;
  }
}
