export const addNum = (num1, num2) => {
  return num1 + num2;
};

export const person = {
  name: "Nisarg Patel",
  age: 19,
  greet() {
    console.log(`Hello! ${this.name}..`);
  },
};
