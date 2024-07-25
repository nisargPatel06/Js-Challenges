console.log("- Activity 1");
const name = "Nisarg";
const age = 19;
console.log(`Name: ${name}  Age: ${age}`);
console.log(`Hello,
This is day 8 of Js challenges.`);

console.log("- Activity 2");
const arr = [34, 76, 53];
const [firstElem, secondElem] = arr;
console.log(arr);
console.log(firstElem, secondElem);
let book = {
  title: "Javascript",
  author: "ABC",
  year: 2022,
};
const { title, author } = book;
console.log(title, author);

console.log("- Activity 3");
const newArr = [...arr, 98, 78];
console.log(newArr);
const sumOfNum = (...num) => {
  let sum = 0;
  for (const i of num) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNum(7, 8, 9));

console.log("- Activity 4");
function multiply(num1, num2 = 1) {
  return num1 * num2;
}
console.log(multiply(5));
console.log(multiply(5, 3));

console.log("- Activity 5");
const person = {
  name,
  age,
  greet() {
    console.log(`Hello, ${name}`);
  },
};
console.log(person);
person.greet();
const propKey = "favColor";
const propValue = "blue";
const obj = {
  [propKey]: propValue,
  [`another${propKey}`]: "another value",
};
console.log(obj);
