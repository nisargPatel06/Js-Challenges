import { reverse } from "lodash-es";
import axios from "axios";

const array = [1, 2, 3, 4, 5];
const reversedArray = reverse([...array]);

console.log("Original Array:", array);
console.log("Reversed Array:", reversedArray);

axios
  .get("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=1")
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
