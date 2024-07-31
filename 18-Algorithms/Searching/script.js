const arr = [10, 20, 30, 40, 50, 60];
console.log(`Array: [${arr}]`);

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return console.log(`LS::Index of ${target}: ${i}`);
    }
  }
  console.log("LS::Target not found..");
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return console.log(`BS::Index of ${target}: ${mid}`);
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return console.log("BS::Target not found..");
};

linearSearch(arr, 30);
binarySearch(arr, 50);
