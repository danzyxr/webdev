class Polygon {
  constructor(sides, side_len) {
    this.sides = sides;
    this.side_len = side_len;
    this.name = 'Polygon';
  }
}

class Square extends Polygon {
  constructor(side_len) {
    super(4, side_len);
    this.name = 'Square';
  }
}
