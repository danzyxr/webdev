// Chessboard

let chess = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";

console.log(chess);

// Chessboard w/ for loop

let row_1 = " # # # #";
let row_2 = "# # # # ";

for (let i = 1; i <= 8; i++) {
  if (i % 2 !== 0) {
    console.log(row_1);
  } else {
    console.log(row_2);
  }
}

// Modify for n x n grid
// I forgot that I can += a string!

let n = 13;
let big_chess = "";

for (let i = 1; i <= n; i++) {
  for (let i = 1; i <= n; i++) {
    big_chess += " #";
  }

  big_chess += "\n";

  for (let i = 1; i <= n; i++) {
    big_chess += "# ";
  }

  big_chess += "\n";
}

console.log(big_chess);
