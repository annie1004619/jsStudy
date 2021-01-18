//js는 절차형 언어
// Function
// - fundamental building block in the program
// 프로그램에서 기본적인 building block
// - subprogram can be used multiple times
// subprogram이라고도 불리며 여러번 재사용이 가능한 장점이 있다.
// - performs a task or calculates a value
// 한가지의 task나 값을 계산하기 위해 사용된다.

//1. Function declaration
//한가지 함수는 한가지의 일만!
//function name(param1, param2) { body... return;}
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS
//function은 object!

function log(message) {
    console.log(message);
}

log('hello');
//js는 파라미터나 return값 type 지정 x

/* ts 에서는
function log(message: string): number{
    console.log(message);
    return 0;
}

log('hello');
 */

//2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}

const student = {name: 'jiwon'};
changeName(student);
console.log(student);
//{ name: 'coder' }

//3. Default parameters (added in ES6)
function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}

showMessage('hi');

//사용자가 파라미터 값을 전달하지 않을 때 default 값 지정
function showMessage2(message, from = 'unknown') {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}

showMessage2('hi');

//4. Rest parameters (added in ES6)
// 배열 형태로 전달되게 된다.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    //배열 출력시 for of 문법을 통해 간단하게 출력 가능
    for (const arg of args) {
        console.log(arg);
    }

    //forEach도 간단하게 출력 가능
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');


//5. Local scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
        console.log(childMessage);
    }

    //중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수에 접근이 가능한 것이 클로저

}

printAll();

//6. Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2) //3
console.log(`sum: ${sum(1, 2)}`);

//리턴 타입이 없는 함수들은 return undefined가 생략된 것과 똑같다.


//7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic ...
    }
}

//good
//조건이 맞지 않을 때는 빨리 return해서 함수를 종료
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long long logic ...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined.(hoisted)
//a function expression is created when the execution reaches it.

const print = function () { //이름 없는 함수 = anonymous function
    console.log('print');
};
print(); //변수를 함수처럼 호출
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//function declaration와 function expression 가장 큰 차이는
// function expression는 할당된 다음부터 호출이 가능하다.
//print를 선언하기 전에 호출 시키면 오류!

//function declaration은 선언전에 호출시켜도 error 안남
//이것은 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문이다.
multiply(3, 2);

function multiply(x, y) {
    console.log(`multiply ${x * y}`);
}

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); //recursion
}

// answer와 콜백 함수들 전달
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow Function
// always anonymous
const simeplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
simeplePrint();
add(23, 10);
//block을 쓰게되면 return을 사용해서 값을 리턴해주어야한다
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

simpleMultiply(2, 4);

// IIFE: Immediately Invoked Function Expression
//선언과 동시에 호출
(function hello() {
    console.log('IIFE');
})();

//Fun quiz time
//function calculate (command, a,b)
//command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 1, 2));

