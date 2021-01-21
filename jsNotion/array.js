"use strict";

// Array 🍕

// 1. Declaration
const arr1 = new Array(1, 2);
const arr2 = [1, 2];
console.log(arr1); //[1,2]

// 2. Index position
const fruits = ["🍅", "🍋"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits[2]); //undefined

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let value of fruits) {
  console.log(value);
}

// c. forEach
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});
//🍅 0
//🍋 1
// arrow function으로 변경
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy

// 뒤에서 부터 넣고 빼기
//push: add an item to the end
fruits.push("🍉", "🍒");
console.log(fruits);
//["🍅", "🍋", "🍉", "🍒"]

//pop: remove an item from the end
fruits.pop();
console.log(fruits);
//["🍅", "🍋", "🍉"]

// 앞에서 부터 넣고 빼기
//unshift: add an item to the begining
fruits.unshift("🍍", "🍏");
console.log(fruits);
// ["🍍", "🍏", "🍅", "🍋", "🍉"]

//shift: remove an item from the beigning
fruits.shift();
console.log(fruits);
//["🍏", "🍅", "🍋", "🍉"]

// note!!: shift, unshift are slower than pop, push
// shift와 unshift는 pop과 push에 비해 느리다!

// splice: remove an item by index position
// fruits: ["🍏", "🍅", "🍋", "🍉"]

// 파라미터: 어디서 부터 지울껀지 (시작하는 인덱스 번호), 몇 개나 지울껀지

// 원하는 갯수를 말하지 않고 시작하는 인덱스만 넣어주면 거기서 부터 다 지워버림
//fruits.splice(1); //["🍏"]
fruits.splice(1, 1); //["🍏", "🍋", "🍉"]
console.log(fruits);

// 추가로 넣을 수도 있음
fruits.splice(0, 1, "🍓", "🍈");
console.log(fruits); //["🍓", "🍈", "🍋", "🍉"]
// 사과가 지워진 자리에 딸기랑 멜론이 추가됨

// combine two arrays
const vegetables = ["🥦", "🧄"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);
//["🍓", "🍈", "🍋", "🍉", "🥦", "🧄"]
console.log(fruits); //["🍓", "🍈", "🍋", "🍉"]

// 5. Searching
// indexOf: find the index
// fruits: ["🍓", "🍈", "🍋", "🍉"]
console.log(fruits.indexOf("🍓")); //0
console.log(fruits.indexOf("🍖")); //-1
//배열안에 해당하는 값이 없을 때는 -1이 출력됨

// includes
console.log(fruits.includes("🍈")); //true
console.log(fruits.includes("🍖")); //false

// lastIndexOf
fruits.push("🍓");
// fruits: ["🍓", "🍈", "🍋", "🍉","🍓"]

console.log(fruits.indexOf("🍓")); //0
// 배열 안에 딸기가 두개 인데 indexOf는 첫번째로 딸기를 만났을 때 index를 return
console.log(fruits.lastIndexOf("🍓")); //4
// lastIndexOf는 마지막의 딸기를 return

// practice
const array = [1, 2, 3, 4];
console.log(array.toLocaleString());
console.log(array.toString());
console.log(fruits.toString());
console.log(fruits.toLocaleString());

console.log(array.concat(5, 6)); //[1, 2, 3, 4, 5, 6]
console.log(array.concat([7, 8])); //[1, 2, 3, 4, 7, 8]

console.log(array.join("")); //1234
console.log(array.join("+")); //1+2+3+4
console.log(array.reverse()); //[4, 3, 2, 1]

console.log(array.shift()); //4

console.log(array.sort()); //[1, 2, 3]

const array2 = [11, 2, 22, 1];
//console.log(array2.sort());
//[1, 11, 2, 22]

console.log(`array2: ${array2}`);
// array2: 11, 2, 22, 1
// compareFunction의 결과가 0보다 작은 결과 a가 b보다 낮은 색인으로 정렬
console.log(
  array2.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return a - b;
  })
);
//a: 2, b: 11
//a: 22, b: 2
//a: 22, b: 11
//a: 1, b: 11
//a: 1, b: 2
// 결과는 [1, 2, 11, 22]

console.log(array2.slice(1)); //[2, 11, 22]
console.log(array2.slice(2, 3)); // [11]
console.log(array2.slice(1, array2.length)); //[2, 11, 22]
console.log(array2.slice(0, 0)); //[]

const isOverTen = (currentValue) => currentValue > 10;

const mixedNumber = [1, 10, 13, 35, 2, 40];
const digitOfTen = [11, 12, 13, 14, 15];
const digitOfOne = [1, 2, 3, 4];

console.log(mixedNumber.every(isOverTen)); //false
console.log(digitOfTen.every(isOverTen)); //true

console.log(mixedNumber.some(isOverTen)); //true
console.log(digitOfOne.some(isOverTen)); //false

// reducer
//리듀서 함수는 네개의 인자를 가집니다.
// 1.누산기 2.현재 값 3.현재 인덱스 4.원본 배열
// 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

const numberArray = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numberArray.reduce(reducer)); //10

console.log(numberArray.reduce(reducer, 5)); //15

console.log(numberArray.reduce((acc, cur) => acc + cur));
//10

//배열이 비어있는데 initalValue도 제공하지 않으면 TypeError가 발생함
// 콜백의 최초 호출 때  initialValue를 제공한 경우,
// accumulator는 initialValue와 같고 currentValue는 배열의 첫번째 값과 같다.
// initialValue를 제공하지 않았다면,
// accumulator는 배열의 첫번째 값과 같고, currentValue는 두번째와 같다.

[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
// 두번째 인자로 초기값을 제공하는 경우
[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
},
10);

//배열의 중복 항목 제거
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((acc, curr) => {
  const length = acc.length;
  if (length === 0 || acc[length - 1] !== curr) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(result); //[1, 2, 3, 4, 5]

const reduceRightArray = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((acc, curr) => acc.concat(curr));

console.log(reduceRightArray);
//[4, 5, 2, 3, 0, 1]
