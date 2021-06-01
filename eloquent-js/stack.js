/* Stack */

const letters = [];

const word = 'racecar';

let revw = '';

for (const i in word) {
  letters.push(word[i]);
}

console.log(letters);

for (const w in word) {
  console.log(`w: ${w}`);
  revw += letters.pop();
}

console.log(revw);

if (revw === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is NOT a palindrome.`);
}

// Building the stack

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  getStack() {
    return this.storage;
  }

  isEmpty() {
    if (this.count === 0) return true;
  }

  size() {
    return this.count;
  }
}

// Using the stack

const myStack = new Stack();

console.log(myStack.isEmpty());

myStack.push('data');
myStack.push('asdf');
myStack.push('item');
myStack.push('tyvm');

console.log(myStack.size());
console.log(myStack.getStack());

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

console.log(myStack.size());
console.log(myStack.getStack());
