// 1 - Understanding Promises
const promiseResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved..");
  }, 2000);
});
promiseResolve.then((message) => {
  console.log(message);
});
const promiseReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected.."));
  }, 2000);
});
promiseReject.catch((error) => {
  console.error(error.message);
});

// 2 - Chaining Promises
const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
fetchData("Fetching user data...", 2000)
  .then((message) => {
    console.log(message);
    return fetchData("Fetching orders for user...", 500);
  })
  .then((message) => {
    console.log(message);
    console.log("All data fetched successfully!");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// 3 - Using Async/Await
const resolve = async () => {
  try {
    await promiseResolve;
    console.log("- This func waits until the promise resolves..");
  } catch (error) {
    console.log(error);
  }
};
resolve();
const reject = async () => {
  try {
    await promiseReject;
    console.log("- This func waits until the promise rejects..");
  } catch (error) {
    console.log("- Error:", error.message);
  }
};
reject();

// 4 - Fetching Data from API
fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.error("Problem with the fetch operation:", error);
  });
const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Problem with the fetch operation:", error);
  }
};
fetchUsers();

// 5 - Concurrent Promises
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A resolved!"), 3000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B resolved!"), 3500)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C resolved!"), 4000)
);

Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
Promise.race([promiseA, promiseB, promiseC])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
