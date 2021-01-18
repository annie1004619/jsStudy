//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);//12
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 * 1); //divide
console.log(1 / 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//3
const postIncrement = counter++;
console.log(preIncrement, counter); // 3 4
const preDecrement = --counter;
//업데이트하고 할당
const postDecrement = counter--;
//할당하고 업데이트

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x=x+y;
x -= y;
x *= y;
x /= y;


//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//|| (or), finds the first truthy value
// true 값 찾으면 멈춤!
//value1이 true라면 wasting time 출력 x
//simple한 value 아이들을 맨 앞에 두고 함수같이 복잡한 아이들을 뒤에 두자!
console.log(`or: ${value1 || value2 || check()}`);

//&& (and), finds the first falsy value
//value1이 false면 뒤에꺼 상관 x
console.log(`and: ${value1 && value2 && check()}`);

//null값인지 확인하는데도 많이 쓰인다.
//often used to compress long if-statement
//nullableObject && nullableObject.something
/*if(nullableObject != null){
    nullableObject.something;
}*/

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// equality - puzzler
console.log(0 == false);
//true
console.log(0 === false);
//false 0은 boolean type 아니다.
console.log('' == false);
//true
console.log('' === false);
//false
console.log(null == undefined);
//true
console.log(null === undefined);
//false

//8. Conditional operators: if
// if, else if, else
const name = 'annie';
if (name === 'annie') {
    console.log('welcome annie');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'annie' ? 'yes' : 'no');

// 10. Switch statement
//use for multiple if checks
//use for enum-like value checks
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love ya');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
//while loop, while the condition is truthy,
//body code is executed
// 조건문이 맞는지 먼저
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
//블럭을 먼저 실행
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
//inline variable declaration
for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// bigO = O(n**2) cpu에 좋지 않음

//break: loop를 완전히 끝내는 것
//continue: 지금꺼만 넘어가고 다시 다음 step으로

//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i=0;i<11;i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i< 11; i++){
    if(i > 8){
        break;
    }
    console.log(i);
}