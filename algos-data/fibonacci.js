let a, b, sum;

a = 0;
b = 1;

while (a < 255) {
  console.log(`${a}\n`);
  sum = a + b;
  a = b;
  b = sum;
}
