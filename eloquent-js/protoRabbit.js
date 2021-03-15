// Exploring prototypes with rabbits
// Custom prototype for custom object

const protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

const killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('Omae Wa Mou Shindeiru');
console.log(killerRabbit);

// Custom constructor for custom prototype

function makeRabbit(type) {
  const rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

const coolRabbit = makeRabbit('cool');
coolRabbit.speak("That's cool");
console.log(coolRabbit);

// A better way: constructor fn...

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

const weirdRabbit = new Rabbit('weird');
weirdRabbit.speak("What's the smallest weird number?");
console.log(weirdRabbit);

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) === Rabbit.prototype);

// Poly morph ic

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

console.log(weirdRabbit.toString());

// The exact same thing using modern syntax

class Hare {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} hare says '${line}'`);
  }
}

const hairyHare = new Hare('hairy');
hairyHare.speak('I need a haircut...');
console.log(hairyHare);

// Classes can also be expressed with new

const obj = new (class {
  getWord() {
    return 'Yo';
  }
})();

console.log(obj.getWord());

// Adding prototypal properties post-creation!

Hare.prototype.teeth = 'small';
const killerHare = new Hare('killer');
killerHare.teeth = 'long, sharp, and bloody';
console.log(killerHare.teeth);
console.log(hairyHare.teeth);
