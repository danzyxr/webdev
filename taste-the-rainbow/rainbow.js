const hexSpan = document.querySelector("#hex-span");
const colorButton = document.querySelector(".colorButton");
const bodyBackground = document.querySelector("body");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function changeColor() {
  let r = Math.floor(Math.random() * colors.length);
  bodyBackground.style.backgroundColor = colors[r];
  hexSpan.innerHTML = colors[r];
}

window.addEventListener("load", changeColor);

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getHex() {
  let hexNum = "#";
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * hexArray.length);
    hexNum += hexArray[r];
  }
  bodyBackground.style.backgroundColor = hexNum;
  hexSpan.innerHTML = hexNum;
}

colorButton.addEventListener("click", getHex);
