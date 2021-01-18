//1. Use strict
// added in ES 5
// use this for vALINA Javascript
'use strict';

console.log(age);
//undefined
// var age 선언이 파일 제일 위로 올라가서 undefined 나옴 (hosting)

//2. Variable, rw
// let(added in ES6)
let name = 'jiwon';
console.log(name);
name = 'kim ji won';
console.log(name);

//block scope
let globalName = 'global name';
{
    let name = 'jiwon';
    console.log(name);
    name = 'kim ji won';
    console.log(name);
}

// var (don't ever use this)
// var hosting ( move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
    console.log(age);
}
console.log(age);


//3. constant, r(read only)
//use const whenever possible
//only use let if variable needs to change

const daysInWeek = 7;
const maxNumber = 5;

//Note!!
// Immutable data types: primitive types, frozen objects(i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speical numberic values:
//infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
//chorme이랑 firefox에서만 지원
const bigInt = 1234567890123456789012345678901234567890n;
//over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
//비어있는 empty값이야 라고 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
//선언은 되었지만 값이 지정되어 있지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
//true
//그냥 ${symbol1} 이라고 출력하면 error
//.description을 붙혀서 string으로 변환해서 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const me = {name: 'jiwon', age: 25};
me.age = 20;

// 5. Dynamic typing: dynamically typed language
//선언할 때 어떤 타입인지 선언하지 않고
//runtime 즉 프로그램이 동작할 때 할당된 값에 따라서 type이 변경될 수 있다.
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
//value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
//value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
//value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//value: 4, type: number
console.log(text.charAt(0));
//string-> number로 바뀌었는데 charAt을 물어봐서 error
//runtime error
