const handleCounter = () => {
  let counter = 0;
  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
};
const counter = handleCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

const idGenerator = () => {
  let id = 100;
  return function () {
    id++;
    return id;
  };
};
const generateID = idGenerator();
console.log(generateID());
console.log(generateID());
console.log(generateID());
function greet(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
const g = greet("Nisarg");
console.log(g());

let arrOfFunc = [];
for (let i = 0; i < 5; i++) {
  arrOfFunc.push(() => {
    console.log(`Func at index[${i}] is called.`);
  });
}
arrOfFunc.forEach((func) => func());

const createItemManager = () => {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
      console.log(`${item} added to the collection.`);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed from the collection.`);
      } else {
        console.log(`${item} not found in the collection.`);
      }
    },
    listItems: function () {
      if (items.length === 0) {
        console.log("The collection is empty.");
      } else {
        console.log("Items: ", items.join(", "));
      }
    },
  };
};

const itemManager = createItemManager();

itemManager.addItem("Item1");
itemManager.addItem("Item2");
itemManager.listItems();

itemManager.removeItem("Item1");
itemManager.listItems();

itemManager.removeItem("Item3");
itemManager.listItems();

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      console.log("Calculating result:", key);
      return result;
    }
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(7));
console.log(memoizedFactorial(6));
