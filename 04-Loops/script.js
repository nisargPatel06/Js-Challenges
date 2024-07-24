console.log("- Activity 1");
let arr1 = [];
for (let i = 1; i <= 10; i++) {
  arr1.push(i);
}
console.log(arr1);
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${i * 5}`);
}

console.log("- Activity 2");
let x = 1;
let sum = 0;
while (x <= 10) {
  sum += x;
  x++;
}
console.log(`Sum: ${sum}`);
let y = 10;
let arr2 = [];
while (y >= 1) {
  arr2.push(y);
  y--;
}
console.log(arr2);

console.log("- Activity 3");
let a = 1;
let arr3 = [];
do {
  arr3.push(a);
  a++;
} while (a <= 5);
console.log(arr3);
let b = 1;
let fact = 1;
do {
  fact *= b;
  b++;
} while (b <= 5);
console.log(`Factorial of 5 : ${fact}`);

console.log("- Activity 4");
for (let i = 0; i < 5; i++) {
  let pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

console.log("- Activity 5");
let arr4 = [];
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  arr4.push(i);
}
console.log(arr4);
let arr5 = [];
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  arr5.push(i);
}
console.log(arr5);
