class Group {
  constructor(iter = undefined) {
    this.elems = [];
    if (iter !== undefined) {
      iter.map((n) => this.add(n));
    }
  }

  has(val) {
    return this.elems.includes(val);
  }

  add(val) {
    if (!this.has(val)) {
      this.elems.push(val);
      return this;
    } else {
      return false;
    }
  }

  delete(val) {
    if (this.has(val)) {
      this.elems = this.elems.filter((v) => v !== val);
      return this;
    } else {
      return false;
    }
  }

  static from(arr) {
    const g = new Group();
    for (const val of arr) {
      g.add(val);
    }
    return g;
  }

  get values() {
    return this.elems;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.elems.length) {
      return { done: true };
    } else {
      const result = { value: this.group.elems[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

const g = new Group();
console.log(g.add(3).add('3').add('three').values);
console.log(g.delete(3));
console.log(g.delete(6));

const myGroup = new Group([1, 2, 3, 3, 3]);
console.log(myGroup.values);

for (const val of Group.from(['a', 'b', 'c'])) {
  console.log(val);
}

console.log(myGroup);
