const canvas = document.querySelector("#canvas-base");
const ctx = canvas.getContext("2d");

/*
const bgBtn = document.querySelector("#bg-btn");
bgBtn.addEventListener("click", changeBackground);

const clBtn = document.querySelector("#cl-btn");
clBtn.addEventListener("click", clearBackground);

function changeBackground() {
  if (canvas.style.background === "black") {
    canvas.style.background = "linear-gradient(azure, lightskyblue, cornflowerblue)";
  } else {
    canvas.style.background = "black";
  }
}

function clearBackground() {
  canvas.style.background = "transparent";
}
*/

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArr = [];
let particleAmount = 50;

const mouse = {
  x: null,
  y: null
};

window.addEventListener("mousemove", function (pos) {
  mouse.x = pos.x;
  mouse.y = pos.y;
});

setInterval(function () {
  mouse.x = undefined;
  mouse.y = undefined;
}, 200);

class Particle {
  constructor(x, y, size, weight, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.weight = weight;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.size -= 0.05;

    if (this.size < 0) {
      this.size = Math.random() * 10 + 2;
      this.weight = Math.random() * 2 - 0.5;
      this.x = mouse.x + (Math.random() * 20 - 10);
      this.y = mouse.y + (Math.random() * 20 - 10);
    }

    this.y += this.weight;
    this.weight += 0.2;

    if (this.y > canvas.height - this.size) {
      this.weight *= -1;
    }
  }
}

function init() {
  particleArr = [];
  for (let i = 0; i < particleAmount; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 5 + 2;
    let weight = 1;
    let color = "pink";
    particleArr.push(new Particle(x, y, size, weight, color));
  }
}

function normal() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function trails() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  normal();
  // trails();
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].update();
    // particleArr[i].draw();
  }
  connect();
  requestAnimationFrame(animate);
}

init();
animate();

function connect() {
  let opacityValue = 1;
  for (let i = 0; i < particleArr.length; i++) {
    for (let j = i; j < particleArr.length; j++) {
      let xDist = (particleArr[i].x - particleArr[j].x) ** 2;
      let yDist = (particleArr[i].y - particleArr[j].y) ** 2;
      let distance = (xDist + yDist) ** 0.5;

      if (distance < 200) {
        opacityValue = 1 - distance / 100;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, " + opacityValue + ")";
        ctx.lineWidth = 1;
        ctx.moveTo(particleArr[i].x, particleArr[i].y);
        ctx.lineTo(particleArr[j].x, particleArr[j].y);
        ctx.stroke();
      }
    }
  }
}
