class MySet {
  constructor(data = new Array()) {
    this.collection = data;
  }

  has(ele) {
    return this.collection.indexOf(ele) !== -1;
  }

  values() {
    return this.collection;
  }

  add(ele) {
    if (!this.has(ele)) {
      this.collection.push(ele);
      return true;
    } else {
      return false;
    }
  }

  remove(ele) {
    if (this.has(ele)) {
      const index = this.collection.indexOf(ele);
      this.collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.collection.length;
  }

  unite(otherSet) {
    const union = new MySet();
    const setA = this.values();
    const setB = otherSet.values();

    setA.forEach((ele) => {
      union.add(ele);
    });
    setB.forEach((ele) => {
      union.add(ele);
    });

    return union;
  }

  intersect(otherSet) {
    const intersection = new MySet();
    this.values().forEach((ele) => {
      if (otherSet.has(ele)) intersection.add(ele);
    });
    return intersection;
  }

  differ(otherSet) {
    const difference = new MySet();
    this.values().forEach((ele) => {
      if (!otherSet.has(ele)) difference.add(ele);
    });
    return difference;
  }

  subset(superSet) {
    return this.values().every((ele) => {
      return superSet.has(ele);
    });
  }
}

const setA = new MySet();
const setB = new MySet();

setA.add('a');
setA.add('b');
setA.add('c');
setA.add('x');
setA.add('y');
setA.add('z');

setB.add('a');
setB.add('b');
setB.add('c');
setB.add('1');
setB.add('2');
setB.add('3');

console.log(setA.subset(setB));
console.log(setB.intersect(setA).values());
console.log(setB.differ(setA).values());
console.log(setA.differ(setB).values());
console.log(setA.unite(setB).values());
