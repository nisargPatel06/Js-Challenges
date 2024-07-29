// Activity 1
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(0));
console.log(factorial(5));
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(0));
console.log(fibonacci(10));

// Activity 2
const findSum = (arr) => {
  if (arr.length === 0) return 0;
  return arr[0] + findSum(arr.slice(1));
};
const findMax = (arr) => {
  if (arr.length === 1) return arr[0];
  const maxOfRest = findMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
};
let arr1 = [4, 7, 5, 3, 9];
console.log(arr1);
console.log(`Sum of array: ${findSum(arr1)}`);
console.log(`Max of array: ${findMax(arr1)}`);
let arr2 = [4, 6, 3, 8, 1, 2, 5];
console.log(arr2);
console.log(`Sum of array: ${findSum(arr2)}`);
console.log(`Max of array: ${findMax(arr2)}`);

// Activity 3
const reverseStr = (str) => {
  if (str === "") return "";
  return reverseStr(str.slice(1)) + str[0];
};
console.log(reverseStr("abcd"));
const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
};
console.log(isPalindrome("did"));

// Activity 4
const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
};
const arr3 = [2, 3, 4, 5, 6, 8, 9];
console.log(arr3);
console.log(`Element found at index: ${binarySearch(arr3, 4)}`);
function countOccurrences(arr, target) {
  if (arr.length === 0) return 0;
  const count = arr[0] === target ? 1 : 0;
  return count + countOccurrences(arr.slice(1), target);
}
const arr4 = [2, 3, 4, 3, 6];
console.log(arr4);
console.log(`Element occurrences: ${countOccurrences(arr4, 3)}`);
