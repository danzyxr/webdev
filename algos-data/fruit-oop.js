class Fruit {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

class FruitFactory {
  make(type, price) {
    return new Fruit(type, price);
  }
}

class AppleFactory extends FruitFactory {
  make(price) {
    return super.make("apple", price);
  }
}

class OrangeFactory extends FruitFactory {
  make(price) {
    return super.make("orange", price);
  }
}

class GrapeFactory extends FruitFactory {
  make(price) {
    return super.make("grape", price);
  }
}

class FruitBank {
  constructor() {
    this.fruits = [];
  }
  locate(strategy) {
    return strategy.locate(this.fruits);
  }
  put(fruit) {
    this.fruits.push(fruit);
  }
}
