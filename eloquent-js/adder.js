// Adder

let i = 0;
let sum = 1;
while (i < 10) {
  sum = sum * 2;
  i = i + 1;
}
console.log(sum);

// Double all digits

let doubled = 1;

for (let i = 0; i < 10; i++) {
  doubled = doubled * 2;
  console.log(doubled);
}

// While, mod, break

let x = 20;

while (true) {
  if (x % 7 === 0) {
    console.log(x);
    break;
  }
  x++;
}
