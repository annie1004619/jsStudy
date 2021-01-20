// Object-oriented programming

// class 붕어빵 틀
// - template
// - declare once
// - no data in

// object 팥 붕어빵, 크림 붕어빵..
// - instance of a class
// created many times
// data in

// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// 문법만 추가 된것 prototype에 베이스되서 만들어졌다.

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        //this는 생성된 object
        console.log(`${this.name}: hello`);
    }
}

//새로운 object를 만들 때는 new라는 키워드 사용!
const annie = new Person('annie', 25);
console.log(annie.name);
console.log(annie.age);
annie.speak();
// annie hello

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

// getter를 정의하는 순간 this.age는 메모리에 올라가있는
// 데이터를 읽어오는 것이 아니라 getter를 호출하게 됩니다.
    //setter를 정의하는 순간 = age를 호출할 때
    // 즉 값을 할당할 때 바로 메모리에 값을 할당하는 것이 아니라
    // setter를 호출하게 됩니다.
    //따라서 setter에서 전달된 value를 메모리에 할당할 때
    // this.age = value
    //메모리에 값을 업데이트하는 것이 아니라 또 setter를 호출 (무한정 반복)
    //이것을 방지하기위해 getter와 setter 안에 쓰이는 변수명을 바꿔준다.

    //_age를 사용했지만 .age에 값을 할당할수 있는 것은
    // 내부적으로 getter와 setter를 이용하기 때문이다.
    get age() {
        return this._age;
    }

    set age(value) {
        /*  if (value < 0) {
              throw Error('age can not be negative');
          }*/
        this._age = value < 0 ? 0 : value;
    }
}

//사용자가 실수로 나이 -1으로 지정
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// 최근에 출시!
// 최신브라우저도 지원이 안됨
class Experiment {
    publicField = 2;
    //외부에서 접근 가능
    #privateField =0;
    //privateField는 class 내부에서만 값이 보여지고 접근이 가능
    //외부에서는 읽을 수도 변경할 수도 없음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// 최근에 출시
// 어떨때 쓰면 좋을까?
// object에 상관없이 들어오는 데이터에 상관없이
// 공통적으로 class에서 쓸 수 있는 거라면
// static과 static method를 이용해서 작성하는 것이
// 메모리에 사용을 줄여줄 수 있다.

class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
//static은 object마다 할당되는 것이 아니라 class 자체에 붙어있음
Article.printPublisher();



// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

//상속과 다향성
class Rectangle extends Shape {
}

class Triangle extends Shape {
    //필요한 함수만 재정의
    // overriding
    draw() {
        //부모의 method도 보여주고 싶다면
        super.draw();
        console.log('세모')
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceOf Rectangle); //t
console.log(triangle instanceOf Rectangle); //f
console.log(triangle instanceOf Triangle); //t
console.log(triangle instanceOf Shape); //t
console.log(triangle instanceOf Object); //t
// 모든 object class 들은 Object를 상속한것이다.


