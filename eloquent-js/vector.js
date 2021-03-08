class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    const newX = this.x + v.x;
    const newY = this.y + v.y;
    return new Vector(newX, newY);
  }

  subtract(v) {
    const newX = this.x - v.x;
    const newY = this.y - v.y;
    return new Vector(newX, newY);
  }

  get array() {
    return [this.x, this.y];
  }

  get length() {
    const sqr = this.array.map((n) => n * n);
    const sum = sqr.reduce((acc, cur) => acc + cur);
    const len = Math.sqrt(sum);
    return len;
  }

  get normals() {
    return this.array.map((n) => n / this.length);
  }
}

const v = new Vector(3, 4);

console.log(v.array);
console.log(v.length);
console.log(v.normals);
