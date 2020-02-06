console.log("hello, world");
console.log("Testing git stuff!");

let result = 1;
let counter = 0;

// Add all digits

while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}

console.log(result);

// let yourName;

// do {
//     yourName = prompt("Who are you?");
// }
// while (!yourName);
// console.log(yourName);

// True or false?

if (false != true) {
    console.log("That makes sense");
    if (1 < 2) {
        console.log("No surprise there");
    }
}

// Double all digits

let doubled = 1;

for (let i = 0; i < 10; i++) {
    doubled = doubled * 2;
    console.log(doubled);
}

let x = 20;

while (true) {
    if (x % 7 == 0) {
        console.log(x);
        break;
    }
    x++;
}

// switch (prompt("What's the weather like?")) {
//     case "rainy":
//         console.log("Bring an umbrella.");
//         break;
//     case "sunny":
//         console.log("Dress lightly.");
//     case "cloudy":
//         console.log("Go outside!");
//         break;
//     default:
//         console.log("Idk...");
//         break;
// }

// Looping a triangle

let hash = "#";

for (let i = 0; i < 7; i++) {
    console.log(hash);
    hash += '#';
}

// Triangle w/ string.length

for (let muns = '$'; muns.length <= 7; muns += '$') {
    console.log(muns);
}

// Triangle w/ while loop

let star = '*'

while (true) {
    if (star.length > 7) {
        break;
    }
    console.log(star);
    star += '*';
}

// Fizzbuzz

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
        console.log(i + ": fizzbuzz");
    } else if (i % 3 == 0) {
        console.log(i + ": fizz");
    } else if (i % 5 == 0) {
        console.log(i + ": buzz");
    }
}

// Chessboard

let chess = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";

console.log(chess);

// Chessboard w/ for loop

let row_1 = " # # # #";
let row_2 = "# # # # ";

for (let i = 1; i <= 8; i++) {
    if (i % 2 != 0) {
        console.log(row_1);
    } else {
        console.log(row_2);
    }
}

// Modify for n x n grid
// I forgot that I can += a string... ugh

let n = 13
let big_chess = '';

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
};

// Function declaration semicolons

makeNoise();

const power = function (base, exponent) {
    return base ** exponent;
};

console.log(power(3, 2));

// Functions within functions?

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(3);

// Finish this function later!

// safeMode = false;

// let launchMissiles = function () {
//     missileSystem.launch("Launching!");
// };
// if (safeMode) {
//     launchMissiles = function () {
//         console.log("SAFE MODE");
//     };
// }

// launchMissiles()

function cube(x) {
    return x ** 3;
}

// No semicolon needed

console.log(cube(2));

// Call before delcaration?

console.log("The future is now!", future());

function future() {
    return ("But you'll never have flying cars.");
}

const quadratic = (a, b, c, x) => {
    let y = a * (x ** 2) + (b * x) + c
    return y
};

const sum = (a, b) => a + b;

// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken();
// }

// console.log(chicken() + " came first.");

// Optional arguments!!

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(6));
console.log(minus(9, 3));

// C L O S U R E

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(36);
let wrap2 = wrapValue(69);
console.log(wrap1());
console.log(wrap2());

// This is really cool

function multiplier(factor) {
    return number => number * factor;
}

let thrice = multiplier(3);
console.log(thrice(9));

// Recursion

function recur_power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(recur_power(3, 9));

// This is really, really cool

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return (
                find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`)
            );
        }
    }
    return find(1, "1");
}

console.log(findSolution(36));