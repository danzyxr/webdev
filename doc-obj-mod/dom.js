console.dir(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.title);
document.title = "myDOM";
console.log(document.title);

let mainHeader = document.getElementById("main-header");
mainHeader.style.borderBottom = "solid 6px azure";

let mh = document.querySelector("#main-header");
mh.style.borderBottom = "solid 3px azure";

let items = document.getElementsByClassName("list-group-item");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "azure";
}

let oddItems = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = "lightblue";
  oddItems[i].addEventListener("mousemove", hideElement);
}

var itemList = document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "skyblue";
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "skyblue";

console.log(`There are ${itemList.childElementCount} child elements!`);

for (let i = 0; i < itemList.children.length; i++) {
  itemList.children[i].textContent = `${(i + 4) ** 2}`;
  console.log(itemList.children[i]);
}

let newDiv = document.createElement("div");

newDiv.id = "myID";
newDiv.className = "container";
newDiv.style.fontSize = "1.5rem";

let newDivText = document.createTextNode("Heyyoo!");
newDiv.appendChild(newDivText);

let header_cn = document.querySelector("header .container");
let header_h1 = document.querySelector("header h1");

header_cn.insertBefore(newDiv, header_h1);

function mouse(e) {
  let main = document.getElementById("main");
  let box = document.getElementById("box");
  let output = document.getElementById("output");

  let x = e.offsetX;
  let y = e.offsetY;
  let z = Math.sqrt(e.offsetX * e.offsetY);
  // let z = Math.random() * 255 + 1;

  main.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  // box.style.backgroundColor = randomColor();
  box.style.backgroundColor = `rgb(${x * 1.5}, ${y * 6.69}, ${z * 3.14})`;
  output.innerHTML = `<h3>(` + x + `, ` + y + `)</h3>`;
}

let box = document.getElementById("box");
box.addEventListener("mousemove", mouse);

function randomColor() {
  let r = Math.random() * 255 + 1;
  let g = Math.random() * 255 + 1;
  let b = Math.random() * 255 + 1;
  let randomColor = `rgb(${r},${g},${b})`;
  return randomColor;
}

function printColor() {
  let output = document.getElementById("output");
  output.innerHTML = `<h3>` + main.style.backgroundColor + `</h3>`;
}

function clicked(e) {
  // console.log("Event type: ", e.type);
  let main = document.querySelector("#main");

  if (main.style.backgroundColor !== "mintcream") {
    main.style.backgroundColor = "mintcream";
  } else {
    main.style.backgroundColor = "pink";
  }

  printColor();

  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
}

function doubleClicked(e) {
  console.log(`${e.type}`);
  if (main.style.backgroundColor !== "lightgreen") {
    main.style.backgroundColor = "lightgreen";
  }
  printColor();
}

function hideElement(e) {
  e.currentTarget.style.visibility = "hidden";
  console.log(e.currentTarget);
}

let myButton = document.querySelector("#button");
myButton.addEventListener("dblclick", doubleClicked);
myButton.addEventListener("click", clicked);

function eventType(e) {
  console.log("Event:", e.type);
}

function inputValue(e) {
  console.log(e.target.value);
  document.getElementById("output").innerHTML = e.target.value;

  eventType(e);
}

let form = document.querySelector("form");
let itemInput = document.querySelector("input[type='text']");

itemInput.addEventListener("keypress", inputValue);

itemInput.addEventListener("focus", eventType);
itemInput.addEventListener("blur", eventType);

itemInput.addEventListener("cut", eventType);
itemInput.addEventListener("paste", eventType);
