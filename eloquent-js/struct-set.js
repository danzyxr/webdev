function MySet() {
  const collection = [];

  this.has = (ele) => {
    return collection.indexOf(ele) !== -1;
  };

  this.values = () => {
    return collection;
  };

  this.add = function (ele) {
    if (!this.has(ele)) {
      collection.push(ele);
      return true;
    }

    return false;
  };

  this.remove = function (ele) {
    if (this.has(ele)) {
      const index = collection.indexOf(ele);
      collection.splice(index, 1);
      return true;
    }

    return false;
  };

  this.size = () => {
    return collection.length;
  };

  this.unite = function (set) {
    const union = new MySet();
    const setA = this.values();
    const setB = set.values();

    setA.forEach((ele) => {
      union.add(ele);
    });

    setB.forEach((ele) => {
      union.add(ele);
    });

    return union;
  };

  this.intersect = function (set) {
    const intersection = new MySet();
    this.values().forEach((ele) => {
      if (set.has(ele)) intersection.add(ele);
    });

    return intersection;
  };

  this.differ = function (set) {
    const difference = new MySet();
    this.values().forEach((ele) => {
      if (!set.has(ele)) difference.add(ele);
    });

    return difference;
  };

  this.subset = function (superset) {
    return this.values().every((ele) => {
      return superset.has(ele);
    });
  };
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