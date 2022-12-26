// - Primitives: number, string, boolean
// - More complex types: arrays, objects
// - Function types, parameters

// # Primitives
let age: number;
age = 20;

let userName: string;
userName = 'Sean';

let isVisible: boolean;
isVisible = true;

// # More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};
person = {
  name: 'Max',
  age: 21,
};

let people: {
  name: string;
  age: number;
}[]; // 여러 개의 객체를 원소로 갖는 배열 people
people = [
  { name: 'Jennie', age: 23 },
  { name: 'John', age: 25 },
];

// # Type Inference (타입 추론)
// : 🔥 타입 추론을 이용해 코드 작성 권장 (즉, 불필요한 타입 지정 지양)
let course = 'React - The Compolete Guide';
// course = 1234; // Error: TS의 타입 추론 기능 (course 변수가 string 타입임을 선언하지 않았지만, string으로 간주함)

// # Union Types
// : 하나의 변수에 여러 타입이 저장
let newCourse: string | number = 'React - The Complete Guide';
newCourse = 1234;
newCourse = 'Happy';

// # Type Aliases
// : 동일한 타입을 지정하는 경우
type Person = {
  name: string;
  age: number;
}; // 값이 아닌 타입 정의
let newPerson: Person;
let newPeople: Person[];

// # Functions & types
// : 🔥 함수에서는 매개변수의 타입 & 반환값의 타입 모두 생각하자!
function add(a: number, b: number) {
  return a + b;
}

function printSomething(value: any) {
  console.log(value);
} // return type: void (함수의 반환값이 없음)

// # Generics
// : 어떤 타입이든 사용 가능 -> 특정 타입 사용해 함수 실행시 해당 타입으로 고정되어 동작
// => 타입 안정성과 유연성 부여
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const strArray = ['a', 'b', 'c'];
const updatedStrArray = insertAtBeginning(strArray, 'z'); // ['z', 'a', 'b', 'c']
