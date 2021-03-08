// Chessboard

const chess = ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';

console.log(`Literally: \n\n${chess}`);

// Chessboard w/ for loop

const row_1 = ' # # # #';
const row_2 = '# # # # ';

console.log('For loop chess:\n');

for (let i = 1; i <= 8; i++) {
  if (i % 2 !== 0) {
    console.log(row_1);
  } else {
    console.log(row_2);
  }
}

// Modify for n x n grid
// I forgot that I can += a string!

const n = 13;
let big_chess = '';

console.log('\nn x n chess:\n');

for (let i = 1; i <= n; i++) {
  for (let i = 1; i <= n; i++) {
    big_chess += ' #';
  }

  big_chess += '\n';

  for (let i = 1; i <= n; i++) {
    big_chess += '# ';
  }

  big_chess += '\n';
}

console.log(big_chess);
