function test(label, body) {
  if (!body()) {
    console.log(`Failed: ${label}`);
  }
}

test('Convert Latin text to uppercase', () => {
  return 'Hello'.toUpperCase() == 'HELLO';
});

test('Convert Greek text to uppercase', () => {
  return 'Χαίρετε'.toUpperCase() == 'ΧΑΊΡΕΤΕ';
});

test("Don't convert case-less chars", () => {
  return '!@#'.toUpperCase() == '!@#';
});

function numberToString(n, base = 10) {
  let sign = '';
  let result = '';

  if (n < 0) {
    sign = '-';
    n = 0 - n;
  }

  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);

  return sign + result;
}

test('Convert number to string in base 2', () => {
  return numberToString(-32, 2) == '-100000';
});
