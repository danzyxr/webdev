// What are symbols?

class Obj {
  constructor(x) {
    this.x = x;
  }
}

const foo = new Obj('bar');

const sym = Symbol('name');
console.log(sym === Symbol('name'));
Obj.prototype[sym] = 42;
console.log(foo[sym]);

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue wool`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

const stringObject = {
  [toStringSymbol]() {
    return 'a mithril vest';
  }
};

console.log(stringObject[toStringSymbol]());

const okIter = 'OK'[Symbol.iterator]();
console.log(okIter.next());
console.log(okIter.next());
console.log(okIter.next());
