// Activity 1
sessionStorage.setItem("message", "Hello!!");
const message = sessionStorage.getItem("message");
console.log(message);

const myObj = {
  id: 28782,
  age: 30,
  city: "Surat",
};
sessionStorage.setItem("myObj", JSON.stringify(myObj));
const retrivedObj = JSON.parse(sessionStorage.getItem("myObj"));
console.log(retrivedObj);

// Activity 2
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);

  document.getElementById(
    "userData"
  ).innerHTML = `Name: ${name}<br>Email: ${email}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const savedName = sessionStorage.getItem("name");
  const savedEmail = sessionStorage.getItem("email");

  if (savedName && savedEmail) {
    document.getElementById(
      "userData"
    ).innerHTML = `Name: ${savedName}<br>Email: ${savedEmail}`;
  }
});

sessionStorage.setItem("item1", "value1");
sessionStorage.setItem("item2", "value2");

console.log("Before removal:", sessionStorage);

document.getElementById("removeButton").addEventListener("click", () => {
  sessionStorage.removeItem("item1");
  console.log("After removal:", sessionStorage);
});
