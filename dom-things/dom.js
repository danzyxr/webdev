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

let myButton = document.querySelector("#button");

function clicked() {
  document.querySelector("#main").style.backgroundColor = "mintcream";
}

myButton.addEventListener("click", clicked);
