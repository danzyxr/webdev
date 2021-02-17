class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(val) {
    this.celsius = (val - 32) / 1.8;
  }
  get kelvin() {
    return this.celsius + 273.15;
  }
  set kelvin(val) {
    this.celsius = val - 273.15;
  }
  static fromFahrenheit(val) {
    return new Temperature((val - 32) / 1.8);
  }
  static fromKelvin(val) {
    return new Temperature(val - 273.15);
  }
}

let t = new Temperature(22);
console.log(t.celsius);
console.log(t.fahrenheit);
console.log(t.kelvin);

let newTemp = Temperature.fromFahrenheit(77);
console.log(newTemp.celsius);
console.log(newTemp.fahrenheit);
console.log(newTemp.kelvin);
