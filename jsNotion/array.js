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
