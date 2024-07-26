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

const add = (num1, num2) => {
  return num1 + num2;
};
const sub = (num1, num2) => {
  return num1 - num2;
};
const mul = (num1, num2) => {
  return num1 * num2;
};
const div = (num1, num2) => {
  return num1 / num2;
};

export { add, sub, mul, div };

export default checkSpecificChar;
