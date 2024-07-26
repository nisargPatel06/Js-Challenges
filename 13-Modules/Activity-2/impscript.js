import checkSpecificChar from "./expscript.js";
import { add, sub, mul, div } from "./expscript.js";

console.log(`Add: ${add(5, 6)}`);
console.log(`Sub: ${sub(5, 6)}`);
console.log(`Mul: ${mul(5, 6)}`);
console.log(`Div: ${div(5, 6)}`);

console.log(checkSpecificChar("chai", "w"));
