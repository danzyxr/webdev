/* Stack */

let letters = [];

let word = "racecar";

let revw = "";

for (i in word) {
  letters.push(word[i]);
}

console.log(letters);

for (w in word) {
  revw += letters.pop();
}

console.log(revw);

if (revw === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is NOT a palindrome.`);
}

// Building the stack

let Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.getStack = function () {
    return this.storage;
  };

  this.isEmpty = function () {
    if (this.count === 0) return true;
  };

  this.size = function () {
    return this.count;
  };
};

// Using the stack

let myStack = new Stack();

console.log(myStack.isEmpty());

myStack.push("data");
myStack.push("asdf");
myStack.push("item");
myStack.push("tyvm");

console.log(myStack.size());
console.log(myStack.getStack());

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

console.log(myStack.size());
console.log(myStack.getStack());
