class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.stack.length === 0) return null;
    return this.stack.pop();
  }
  peek() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(8);
console.log(`Top Element: ${stack.peek()}`);

console.log(`Popped: ${stack.pop()}`);
console.log(`Top Element: ${stack.peek()}`);
console.log(`Popped: ${stack.pop()}`);
console.log(`Top Element: ${stack.peek()}`);

const reverseStr = (str) => {
  const stack = new Stack();
  for (const char of str) {
    stack.push(char);
  }

  let revStr = "";
  while (stack.peek() !== null) revStr += stack.pop();
  return console.log(`Reverse string: ${revStr}`);
};
reverseStr("abcd");
