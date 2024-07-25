// Activity 1 (try-catch)
const throwError = () => {
  throw new Error("This is an intentional error.");
};
try {
  throwError();
} catch (error) {
  console.error("An error occurred: ", error.message);
}
const divide = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Denominator cannot be Zero!");
  }
  return numerator / denominator;
};
try {
  console.log(divide(5, 0));
} catch (error) {
  console.error("Error: ", error.message);
} finally {
  // Activity 2 (finally block)
  console.log("Finally block..");
}

// Activity 3 (Custom Error Objects)
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}
const throwCustomError = () => {
  throw new CustomError("This is a custom error!");
};
try {
  throwCustomError();
} catch (error) {
  console.error(error.message);
}
const validate = (string) => {
  if (string == "") {
    throw new CustomError("String cannot be empty!");
  }
  console.log(`String: ${string}`);
};
try {
  validate("");
} catch (error) {
  console.error(error.message);
}

// Activity 4 (Error Handling in Promises)
const promise = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      resolve("Promise Resolved..");
    } else {
      reject(new Error("Promise Rejected.."));
    }
  });
};
// promise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
const handlePromise = async () => {
  try {
    const message = await promise();
    console.log(message);
  } catch (error) {
    console.error(error.message);
  }
};
handlePromise();

// Activity 5 (Graceful Error Handling in Fetch)
const url = "https://invalid.com/endpoint";
// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error.message);
//   });
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};
fetchData();
