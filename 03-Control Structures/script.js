console.log("- Activity 1");
const value = -2;
if (value > 0) {
  console.log(`value: ${value} (Positive)`);
} else if (value < 0) {
  console.log(`value: ${value} (Negative)`);
} else {
  console.log(`value: ${value} (Zero)`);
}

const age = 18;
if (age < 1) {
  console.log(`age: ${age} (Invalid!)`);
} else if (age >= 18) {
  console.log(`age: ${age} (Person is eligible to vote..)`);
} else {
  console.log(`age: ${age} (Not eligible!)`);
}

console.log("- Activity 2");
let a = 6;
let b = 6;
let c = 6;
console.log(`a=${a}  b=${b}  c=${c}`);
if (a >= b && a >= c) {
  if (a > b && a > c) {
    console.log("a is largest..");
  } else if (a == b && a == c) {
    console.log("a, b & c are equal!");
  } else if (a == b) {
    console.log("a & b are equal!");
  } else {
    console.log("a & c are equal!");
  }
} else if (b >= a && b >= c) {
  if (b > a && b > c) {
    console.log("b is largest..");
  } else if (b == a && b == c) {
    console.log("a, b & c are equal!");
  } else if (b == a) {
    console.log("b & a are equal!");
  } else {
    console.log("b & c are equal!");
  }
} else {
  if (c > a && c > b) {
    console.log("c is largest..");
  } else if (c == a && c == b) {
    console.log("a, b & c are equal!");
  } else if (c == b) {
    console.log("c & b are equal!");
  } else {
    console.log("c & a are equal!");
  }
}

console.log("- Activity 3");
const number = 7;
console.log("number: ", number);
switch (number) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thrusday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid number!");
    break;
}

const score = 81;
console.log("score: ", score);
switch (true) {
  case score > 0 && score <= 20:
    console.log("Grade: F");
    break;
  case score > 20 && score <= 40:
    console.log("Grade: D");
    break;
  case score > 40 && score <= 60:
    console.log("Grade: C");
    break;
  case score > 60 && score <= 80:
    console.log("Grade: B");
    break;
  case score > 80 && score <= 100:
    console.log("Grade: A");
    break;
  default:
    console.log("Invalid score!");
    break;
}

console.log("- Activity 4");
score % 2 === 0
  ? console.log(`${score} - Even`)
  : console.log(`${score} - Odd`);

console.log("- Activity 5");
const year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
  console.log(`${year} - Leap year`);
} else {
  console.log(`${year} - Not a Leap year`);
}
