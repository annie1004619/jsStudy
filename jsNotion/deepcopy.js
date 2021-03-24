//lodash 사용
const _ = require("lodash");

const person = {
  name: "jiwon",
  like: { food: "pasta" },
};
const copyPerson = _.cloneDeep(person);
console.log(copyPerson);
console.log(person === copyPerson);
console.log(person.like === copyPerson.like);

copyPerson.like.food = "rice";
console.log(person);
console.log(copyPerson);

//재귀함수
function deepCopy(value) {
  const result = {};
  for (const key in value) {
    if (typeof value[key] === "object") {
      result[key] = deepCopy(value[key]);
    } else {
      result[key] = value[key];
    }
  }
  return result;
}
const person = {
  name: "jiwon",
  like: { food: "pasta" },
};
const copyPerson = deepCopy(person);

console.log(copyPerson);
console.log(person === copyPerson);
console.log(person.like === copyPerson.like);

copyPerson.like.food = "rice";
console.log(person);
console.log(copyPerson);

// JSON 객체 사용 ( + eval() 메서드 사용)
const person = {
  name: "jiwon",
  like: { food: "pasta" },
};
const copyPerson = JSON.parse(JSON.stringify(person));

console.log(copyPerson);
console.log(person === copyPerson);
console.log(person.like === copyPerson.like);

copyPerson.like.food = "rice";
console.log(person);
console.log(copyPerson);
