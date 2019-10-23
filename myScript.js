// console.log("hello, world");
// console.log("Testing git stuff!");

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);

// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// if (false != true) {
//     console.log("That makes sense");
//     if (1 < 2) {
//         console.log("No surprise there");
//     }
// }

// let doubled = 1;
// for (let i = 0; i < 10; i++) {
//     doubled = doubled * 2;
//     console.log(doubled);
// }

// let n = 20;
// while (true) {
//     if (n % 7 == 0) {
//         console.log(n);
//         break;
//     }
//     n++;
// }

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

// looping a triangle

let hash = "#";
for (let i = 0; i < 7; i++) {
    console.log(hash);
    hash += '#';
}

// using string.length

for (let muns = '$'; muns.length <= 7; muns += '$') {
    console.log(muns);
}

let star = '*'
while (true) {
    if (star.length > 7) {
        break;
    }
    console.log(star);
    star += '*';
}