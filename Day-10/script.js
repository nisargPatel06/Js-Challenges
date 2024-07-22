// Activity 1
const btn1 = document.querySelector("#btn-1");
const changeText = document.getElementById("changeText");
btn1.addEventListener("click", () => {
  changeText.innerText = "This is new content..";
});
const div = document.querySelector("#toggleImg");
const img = document.querySelector("#toggleImg>img");
let flag = true;
div.addEventListener("dblclick", () => {
  if (flag == true) {
    img.style.opacity = 0;
    flag = false;
  } else {
    img.style.opacity = 1;
    flag = true;
  }
});

// Activity 2
const toggleBg = document.querySelector("#toggleBg");
toggleBg.addEventListener("mouseover", () => {
  toggleBg.style.backgroundColor = "lightcoral";
});
toggleBg.addEventListener("mouseout", () => {
  toggleBg.style.backgroundColor = "lightblue";
});

// Activity 3
const inp1 = document.querySelector("#input-1");
inp1.addEventListener("keydown", (e) => {
  console.log(e.key);
});
const inp2 = document.querySelector("#input-2");
const displatText = document.querySelector("#displatText");
inp2.addEventListener("keyup", (e) => {
  displatText.innerText = `Current value : ${inp2.value}`;
});

// Activity 4
const form = document.querySelector("#userForm");
const submitBtn = document.querySelector("#submitBtn");
const city = document.querySelector("#city");
const displayCity = document.querySelector("#displayCity");
city.addEventListener("change", () => {
  displayCity.innerText = `Selected city : ${city.value}`;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Activity 5
const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    console.log(e.target.textContent);
  }
});
const parent = document.getElementById("parent");
const addChildButton = document.getElementById("addChild");
addChildButton.addEventListener("click", () => {
  const newChild = document.createElement("div");
  newChild.textContent = "New Child Element";
  parent.appendChild(newChild);
});
parent.addEventListener("click", (e) => {
  if (e.target !== addChildButton) {
    console.log(e.target.textContent);
  }
});
