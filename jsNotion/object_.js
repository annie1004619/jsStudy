// Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key: value}

// 1. Literals and properties
// Object 만드는 방법 2가지
const obj1 = {}; //'Object literal' syntax
const obj2 = new Object(); // 'Object constructor' syntax

const name = "annie";
const age = 4;

const annie = { name: "annie", age: 25 };

//js는 runtime때 type이 결정되는 언어
// 그래서 이런 미친 짓이 가능!
// 뒤늦게 property를 추가 가능

annie.hasJob = true;
console.log(annie);
//{ name: 'annie', age: 25, hasJob: true }

// 삭제도 가능!
delete annie.hasJob;
console.log(annie);
//{ name: 'annie', age: 25 }

// 2. Computed properties (계산된 프로퍼티)
// key should be always string
console.log(annie.name); // .을 이용하여 접근하기
console.log(annie["name"]); //Computed properties
//동적으로 값 할당하는 것도 가능
annie["hasJob"] = true;
console.log(annie.hasJob);

// computed properties 써야할 때 예시
// 동적으로 key에 관련된 value를 받아와야할 때 유용
function printValue(obj, key) {
  console.log(obj.key); //undefined
  console.log(obj[key]); //annie
}
printValue(annie, "name");

// 4. Property value shorthand
// key와 value의 이름이 동일하다면 하나 생략 가능
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = makePerson("annie", 25);
console.log(person3);
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// Constructor Function
// 순수하게 object를 생성하는 함수들은 함수이름을 대문자로 만든다.
function Person(name, age) {
  // constructor에서 했던 것 처럼 해줌
  // this = {}; (생략된것)
  this.name = name;
  this.age = age;
  //return this; (생략된것)
}
//class에서 object를 만드는 것 처럼 만들어준다.
const person4 = new Person("choco", 13);
console.log(person4);
//Person { name: 'choco', age: 13 }

// 5. in operator: property existence check (key in obj)
// key가 있는지 없는지 확인할 수 있다.
console.log("name" in annie); //true
console.log("major" in annie); //false

// 6. for..in vs for..of
// for(key in obj)
for (let key in annie) {
  console.log(key);
}
//name
// age
// hasJob

// for (value of iterable) // 배열 리스트
const array = [1, 2, 3, 4];
for (let value of array) {
  console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3 ...]);
const user = { name: "annie", age: 25 };
const user2 = user;
user2.name = "choco";
// user2가 user의 값을 변경시킴
console.log(user); //{ name: 'choco', age: 25 }

// old way
const user3 = {};

for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);
//{ name: 'choco', age: 25 }

// Object.assign 쓰기
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
// 뒤에 써주는 object 일수록 같은 프로퍼티일때 값을 덮어씌워줌
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size); //black
