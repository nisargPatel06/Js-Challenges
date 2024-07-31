const bubbleSort = (arr) => {
  console.log(`BS - ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return console.log(`BS(Sorted) - ${arr}`);
};

const selectionSort = (arr) => {
  console.log(`SS - ${arr}`);

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return console.log(`SS(Sorted) - ${arr}`);
};

bubbleSort([5, 10, 4, 32, 28, 4]);
selectionSort([7, 33, 7, 21, 13, 25]);
