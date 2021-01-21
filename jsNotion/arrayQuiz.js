// Q1. make a string out of an array
let fruits = ["apple", "banana", "orange"];

console.log(fruits.toString()); //apple,banana,orange
console.log(fruits.join(" ")); //apple banana orange

//** 틀림
// Q2. make an array out of a string
fruits = "🍎,🍐,🍑,🍒";
console.log(fruits.split(","));
//["🍎", "🍐", "🍑", "🍒"]
console.log(fruits.split(",", 2));
//["🍎", "🍐"];
//limit으로 배열의 크기 설정해 줄 수 있음

// Q3. make this array look like this: [5,4,3,2,1]
let array = [1, 2, 3, 4, 5];
console.log(array.reverse());
//[5, 4, 3, 2, 1]
// array 자체가 순서가 바뀐다

// Q4. make **new array** without the first two elements
array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 5);
console.log(newArray); //[3, 4, 5]

// 배열 자체에서 삭제하게 됨,  삭제된 배열 리턴
array.splice(0, 2);
console.log(array); //[3, 4, 5]

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
//** ellie의 답: find 사용! array안에서 첫번째로 찾아진 요소를 return
// function은 boolean type return
// find는 첫번째로 true가 나오면 해당하는 그 배열의 요소를 리턴해주는 api
let result = students.find((student) => student.score === 90);
console.log(result);

students.forEach((student) => {
  if (student.score === 90) {
    console.log(student);
  }
});

result = students.filter((student) => student.score === 90);
console.log(result);
// 이름 찾기
console.log(result.map((student) => student.name));

// Q6. make an array of enrolled students
result = students.filter((student) => student.enrolled === true);
//** ellie의 답: true 생략 가능
console.log(result);
result = students.filter((student) => student.enrolled);
console.log(result);

//이름만 배열로
console.log(result.map((student) => student.name));
//이름만 string으로
console.log(result.map((student) => student.name).join(" "));

// Q7. make an array containing only the students'scores
//result should be: [45, 80, 90, 66, 88]
const score = students.map((student) => student.score);
console.log(score); // [45, 80, 90, 66, 88]

// Q8. check if there is a student with the score lower than 50
// ** ellie의 답: 바로 some으로 해주면 됨
console.log(students.some((student) => student.score < 50));
//true
// every를 사용하는 방법: 모든 학생들의 점수가 50점 이상이면  false이므로 ! not 연산자 붙혀주기!
console.log(!students.every((student) => student.score >= 50));
//true

//나의 답:
function lowerThan50(score) {
  return score < 50;
}
console.log(students.map((student) => student.score).some(lowerThan50));
//true

// Q9. compute students' average score
// ellie의 답:
result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(`score의 합: ${result}`);
console.log(`score의 평균: ${result / students.length}`);

console.log(score.reduce((prev, curr) => prev + curr) / score.length);
//73.8

// Q10. make a string containing all the scores
// result should be '45, 80, 90, 66, 88'
console.log(students.map((student) => student.score).join());
//45, 80, 90, 66, 88

//점수가 50점 이상인 것만 join
console.log(
  students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join()
);
//80,90,66,88

// Bounus! do Q10 sorted in ascending order
//result should be: '45, 66, 80, 88, 90'
score.sort((a, b) => a - b);
//score 자체를 바꿈
console.log(score.join());
