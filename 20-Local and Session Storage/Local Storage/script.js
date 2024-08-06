// Activity 1
localStorage.setItem("message", "Hello!!");
const message = localStorage.getItem("message");
console.log(message);

const myObj = {
  id: 28782,
  age: 30,
  city: "Surat",
};
localStorage.setItem("myObj", JSON.stringify(myObj));
const retrivedObj = JSON.parse(localStorage.getItem("myObj"));
console.log(retrivedObj);

// Activity 2
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  document.getElementById(
    "userData"
  ).innerHTML = `Name: ${name}<br>Email: ${email}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("name");
  const savedEmail = localStorage.getItem("email");

  if (savedName && savedEmail) {
    document.getElementById(
      "userData"
    ).innerHTML = `Name: ${savedName}<br>Email: ${savedEmail}`;
  }
});

localStorage.setItem("item1", "value1");
localStorage.setItem("item2", "value2");

console.log("Before removal:", localStorage);

document.getElementById("removeButton").addEventListener("click", () => {
  localStorage.removeItem("item1");
  console.log("After removal:", localStorage);
});
