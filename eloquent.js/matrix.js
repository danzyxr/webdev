class Matrix {
  constructor(width, height, ele = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = ele(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y === this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };

    this.x++;

    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }

    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let m = new Matrix(2, 2, (x, y) => `x is ${x} & y is ${y}`);
for (let { x, y, value } of m) {
  console.log(x, y, value);
}

// Inheritance & super

class SymmetricMatrix extends Matrix {
  constructor(size, ele = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return ele(y, x);
      else return ele(x, y);
    });
  }

  get secret() {
    return "Shh!";
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let sym = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(sym.get(2, 3));
console.log(sym.secret);

// Inheritance & instanceof

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
console.log(new Matrix(2, 2) instanceof Object);
console.log([1] instanceof Array);
