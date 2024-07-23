// Activity 1 (Understanding Promises)
const promiseResolve = new Promise((resolve) => {
  setTimeout(() => resolve("Promise Resolved.."), 2000);
});
promiseResolve.then((message) => console.log(message));
const promiseReject = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Promise Rejected..")), 2000);
});
promiseReject.catch((error) => console.error(error.message));

// Activity 2 (Chaining Promises)
const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
fetchData("Fetching user data from server..", 2500)
  .then((message) => {
    console.log(message);
    return fetchData("Fetching order details..", 500);
  })
  .then((message) => {
    console.log(message);
    console.log("All data fetched successfully");
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

// Activity 3 (Async await..)
const resolve = async () => {
  try {
    const result = await promiseResolve;
    console.log("Result of resolve function: ", result);
  } catch (error) {
    console.log(error);
  }
};
resolve();
const reject = async () => {
  try {
    await promiseReject;
  } catch (error) {
    console.log("Result of reject function: ", error.message);
  }
};
reject();

// Activity 4 (fetching data from API)
// Through promises
const url = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
// Through async await
const fetchUsers = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
fetchUsers();

// Activity 5 (Concurrent Promises)
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A resolved!"), 2500)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B resolved!"), 3000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C resolved!"), 3500)
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
