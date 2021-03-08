// Prompt for user
// Doesn't work in Node.js

let yourName;

do {
  yourName = prompt('Who are you?');
} while (!yourName);

console.log(yourName);

// True or false?

if (false !== true) {
  console.log('That makes sense');
  if (1 < 2) {
    console.log('No surprise there');
  }
}

// Prompt w/ switch

switch (prompt('Weather?').toLowerCase()) {
  case 'rainy':
    console.log('Bring an umbrella.');
    break;
  case 'sunny':
    console.log('Dress lightly.');
  case 'cloudy':
    console.log('Go outside!');
    break;
  default:
    console.log('Idk...');
    break;
}
