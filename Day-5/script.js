console.log("- Activity 1");
function evenOrOdd(number) {
  let num = parseInt(number);
  if (Number.isInteger(num)) {
    if (num === 0) return console.log(`${number} is nor either even or odd.`);
    num % 2 == 0
      ? console.log(`${number} is even`)
      : console.log(`${number} is odd`);
  } else {
    console.log("Enter valid number!");
  }
}
evenOrOdd(8);

function squareOfNumber(number) {
  let num = parseInt(number);
  if (Number.isInteger(num)) {
    return num * num;
  } else {
    console.log("Enter valid number!");
  }
}
console.log(squareOfNumber(5));

console.log("- Activity 2");
const findMaximum = function (num1, num2) {
  console.log(`num1: ${num1}   num2: ${num2}`);
  if (num1 > num2) {
    console.log(`${num1} is largest`);
  } else if (num1 < num2) {
    console.log(`${num2} is largest`);
  } else {
    console.log("both are equal");
  }
};
findMaximum(4, 3);

const concatStrings = function (str1, str2) {
  console.log(`str1: ${str1}   str2: ${str2}`);
  console.log(`result: ${str1.concat(" ", str2)}`);
};
concatStrings("Thala for", "a reason.");

console.log("- Activity 3");
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 5));

const checkSpecificChar = (str, char) => {
  let result = false;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
};
console.log(checkSpecificChar("chai", "a"));

console.log("- Activity 4");
const multiply = (num1, num2 = 5) => {
  return num1 * num2;
};
console.log(multiply(5));
function greetPerson(name, age = 18) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetPerson("Hello");

console.log("- Activity 5");
function message() {
  console.log("Hello");
}
function highOrderFunc(fn, times) {
  return function () {
    for (let i = 0; i < times; i++) {
      fn();
    }
  };
}
const repeatMsg = highOrderFunc(message, 7);
repeatMsg();

function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}
function addOne(x) {
  return x + 1;
}
function square(x) {
  return x * x;
}
const result = applyFunctions(addOne, square, 4);
console.log(result);
