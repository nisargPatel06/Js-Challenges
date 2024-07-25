// Activity 1
const changeText = document.getElementById("changeText");
document.querySelector("#btn-1").addEventListener("click", () => {
  changeText.innerText = "This is new content..";
});
const img = document.querySelector("#toggleImg>img");
let flag = true;
document.querySelector("#toggleImg").addEventListener("dblclick", () => {
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
document.querySelector("#input-1").addEventListener("keydown", (e) => {
  console.log(e.key);
});
const displatText = document.querySelector("#displatText");
document.querySelector("#input-2").addEventListener("keyup", (e) => {
  displatText.innerText = `Current value : ${inp2.value}`;
});

// Activity 4
const displayCity = document.querySelector("#displayCity");
document.querySelector("#city").addEventListener("change", () => {
  displayCity.innerText = `Selected city : ${city.value}`;
});
document.querySelector("#userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Activity 5
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    console.log(e.target.textContent);
  }
});
document.getElementById("addChild").addEventListener("click", () => {
  const newChild = document.createElement("div");
  newChild.textContent = "New Child Element";
  parent.appendChild(newChild);
});
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target !== addChildButton) {
    console.log(e.target.textContent);
  }
});
