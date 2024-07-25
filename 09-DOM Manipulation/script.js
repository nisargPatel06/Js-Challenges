// Activity 1
const content = document.getElementById("content");
const box = document.querySelector(".box-1");
content.innerText = "New text using innerText";
box.style.backgroundColor = "orange";

// Activity 2
const divElem = document.createElement("div");
divElem.innerText = "Appended text";
document.body.appendChild(divElem);
const liElem = document.createElement("li");
const ul = document.querySelector("ul");
liElem.innerText = "About";
ul.appendChild(liElem);

// Activity 3
divElem.remove();
const navList = document.getElementById("navList");
if (navList.lastChild) {
  navList.removeChild(ul.lastChild);
}

// Activity 4
const img = document.querySelector("img");
img.src =
  "https://images.unsplash.com/photo-1721504483802-6503a4ba6eeb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.alt = "A fire pit near house";
const elem = document.getElementById("elem");
elem.classList.add("highlight");
setTimeout(() => {
  elem.classList.remove("highlight");
}, 4000);

// Activity 5
const button = document.querySelector("button");
const changeText = document.getElementById("changeText");
button.addEventListener("click", () => {
  changeText.innerText = "This is new content..";
});
const box2 = document.getElementById("box-2");
box2.addEventListener("mouseover", () => {
  box2.style.border = "2px solid red";
});
