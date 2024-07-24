console.table({
  "Add: 6 + 4": 6 + 4,
  "Sub: 6 - 4": 6 - 4,
  "Mul: 6 * 4": 6 * 4,
  "Div: 6 / 4": 6 / 4,
  "Rem: 6 % 4": 6 % 4,
});

let age = 18;
console.table({
  age: age,
  "age += 4": (age += 4),
  "age -= 2": (age -= 2),
});

console.table({
  "8 > 12": 8 > 12,
  "10 <= 10": 10 <= 10,
  "7 == '7'": 7 == "7",
  "7 === '7'": 7 === "7",
});

console.table({
  "true && false": true && false,
  "true || false": true || false,
  "!true": !true,
});

1 > 0 ? console.log("positive") : console.log("negative");
