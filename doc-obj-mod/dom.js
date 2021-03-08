console.dir(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.title);
document.title = 'myDOM';
console.log(document.title);

const mainHeader = document.getElementById('main-header');
mainHeader.style.borderBottom = 'solid 6px azure';

const mh = document.querySelector('#main-header');
mh.style.borderBottom = 'solid 3px azure';

const items = document.getElementsByClassName('list-group-item');

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'azure';
}

const oddItems = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = 'lightblue';
  oddItems[i].addEventListener('mousemove', hideElement);
}

const itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'skyblue';
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'skyblue';

console.log(`There are ${itemList.childElementCount} child elements!`);

for (let i = 0; i < itemList.children.length; i++) {
  itemList.children[i].textContent = `${(i + 4) ** 2}`;
  console.log(itemList.children[i]);
}

const newDiv = document.createElement('div');

newDiv.id = 'myID';
newDiv.className = 'container';
newDiv.style.fontSize = '1.5rem';

const newDivText = document.createTextNode('Heyyoo!');
newDiv.appendChild(newDivText);

const headerContainer = document.querySelector('header .container');
const headerOne = document.querySelector('header h1');

headerContainer.insertBefore(newDiv, headerOne);

function mouse(e) {
  const main = document.getElementById('main');
  const box = document.getElementById('box');
  const output = document.getElementById('output');

  const x = e.offsetX;
  const y = e.offsetY;
  const z = Math.sqrt(e.offsetX * e.offsetY);

  main.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  box.style.backgroundColor = randomColor();
  box.style.backgroundColor = `rgb(${x * 1.5}, ${y * 6.69}, ${z * 3.14})`;
  output.innerHTML = `<h3>(` + x + `, ` + y + `)</h3>`;
}

const box = document.getElementById('box');
box.addEventListener('mousemove', mouse);

function randomColor() {
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  const randomColor = `rgb(${r},${g},${b})`;
  return randomColor;
}

function printColor() {
  const main = document.querySelector('#main');
  const output = document.getElementById('output');
  output.innerHTML = `<h3>` + main.style.backgroundColor + `</h3>`;
}

function clicked(e) {
  console.log('Event type: ', e.type);
  const main = document.querySelector('#main');

  if (main.style.backgroundColor !== 'mintcream') {
    main.style.backgroundColor = 'mintcream';
  } else {
    main.style.backgroundColor = 'pink';
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
  const main = document.querySelector('#main');
  if (main.style.backgroundColor !== 'lightgreen') {
    main.style.backgroundColor = 'lightgreen';
  }
  printColor();
}

function hideElement(e) {
  e.currentTarget.style.visibility = 'hidden';
  console.log(e.currentTarget);
}

const myButton = document.querySelector('#button');
myButton.addEventListener('dblclick', doubleClicked);
myButton.addEventListener('click', clicked);

function eventType(e) {
  console.log('Event:', e.type);
}

function inputValue(e) {
  console.log(e.target.value);
  document.getElementById('output').innerHTML = e.target.value;

  eventType(e);
}

const form = document.querySelector('form');
form.innerHTML = 'asdf';

const itemInput = document.querySelector("input[type='text']");

itemInput.addEventListener('keypress', inputValue);

itemInput.addEventListener('focus', eventType);
itemInput.addEventListener('blur', eventType);

itemInput.addEventListener('cut', eventType);
itemInput.addEventListener('paste', eventType);
