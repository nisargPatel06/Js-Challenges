function rotateArray(arr, k) {
  const n = arr.length;
  if (k == n) return console.log(`Array: ${arr}`);

  k = k % n;
  const rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
  console.log("Rotated Array:", rotatedArray);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 5);

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Remaining elements if any
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log("Merged Array:", mergedArray);
}

mergeSortedArrays([1, 3], [2, 4, 6]);
