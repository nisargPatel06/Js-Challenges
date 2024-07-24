console.log("- Activity 1");
var age = 19;
let username = "nisargPatel06";
console.log("username: ", username);
console.log("age: ", age);

console.log("- Activity 2");
const isLoading = false;
console.log("isLoading: ", isLoading);

console.log("- Activity 3");
let user = {
  email: "nisargpatel@gmail.com",
  age: 19,
};
let marks = [28, 77, 35];
console.table({
  username: typeof username,
  age: typeof age,
  isLoading: typeof isLoading,
  user: typeof user,
  marks: typeof marks,
});

console.log("- Activity 4");
let message = 7;
console.log("message(Initial value): ", message);
message = "Thala for a reason";
console.log("message(Reassigned value): ", message);

console.log("- Activity 5");
const pi = 3.14;
pi = 3.1415;
console.log(pi);
