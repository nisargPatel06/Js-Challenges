console.log("- Activity 1");
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(`First Element: ${numbers[0]}`);
console.log(`Last Element: ${numbers[numbers.length - 1]}`);

console.log("- Activity 2");
console.log("Array Methods");
numbers.push(6);
console.log(`Push : ${numbers}`);
numbers.pop();
console.log(`Pop : ${numbers}`);
numbers.shift();
console.log(`Shift : ${numbers}`);
numbers.unshift(1);
console.log(`Unshift : ${numbers}`);

console.log("- Activity 3");
let doubledArray = numbers.map((num) => num + num);
console.log(`Map : ${doubledArray}`);
let evenArray = numbers.filter((num) => num % 2 == 0);
console.log(`Filter :  ${evenArray}`);
let sumOfArray = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(`Sum of array : ${sumOfArray}`);

console.log("- Activity 4");
console.log("for");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("forEach");
numbers.forEach((element) => {
  console.log(element);
});

console.log("- Activity 5");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
matrix.forEach((element) => {
  console.log(element);
});
console.log(matrix[0][2]);
