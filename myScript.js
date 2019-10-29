console.log("hello, world");
console.log("Testing git stuff!");

let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

let yourName;

do {
    yourName = prompt("Who are you?");
}
while (!yourName);
console.log(yourName);

if (false != true) {
    console.log("That makes sense");
    if (1 < 2) {
        console.log("No surprise there");
    }
}

let doubled = 1;

for (let i = 0; i < 10; i++) {
    doubled = doubled * 2;
    console.log(doubled);
}

let n = 20;

while (true) {
    if (n % 7 == 0) {
        console.log(n);
        break;
    }
    n++;
}

switch (prompt("What's the weather like?")) {
    case "rainy":
        console.log("Bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside!");
        break;
    default:
        console.log("Idk...");
        break;
}

// looping a triangle

let hash = "#";

for (let i = 0; i < 7; i++) {
    console.log(hash);
    hash += '#';
}

// triangle w/ string.length

for (let muns = '$'; muns.length <= 7; muns += '$') {
    console.log(muns);
}

// triangle w/ while loop

let star = '*'

while (true) {
    if (star.length > 7) {
        break;
    }
    console.log(star);
    star += '*';
}

// fizzbuzz

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
        console.log(i + ": fizzbuzz");
    } else if (i % 3 == 0) {
        console.log(i + ": fizz");
    } else if (i % 5 == 0) {
        console.log(i + ": buzz");
    }
}

// chessboard

let chess = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";
console.log(chess);

// chessboard w/ for loop

let row_1 = " # # # #";
let row_2 = "# # # # ";

for (let i = 1; i <= 8; i++) {
    if (i % 2 != 0) {
        console.log(row_1);
    } else {
        console.log(row_2);
    }
}

// modify for n x n grid
// I forgot that I can += a string... ugh

let big_chess = '';
let n = prompt("Enter a number: ");

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

// FUNCTIONS!!

const makeNoise = function () {
    console.log("Pling!");
}

makeNoise();

const power = function (base, exponent) {
    return base ** exponent;
}

console.log(power(3, 2));