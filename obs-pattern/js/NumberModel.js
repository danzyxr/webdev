class NumberModel {
  constructor() {
    this.number = 0;
    this.color = 'grey';
    this.observers = [];
  }

  increment() {
    const colors = ['red', 'green', 'blue'];
    this.number++;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.notifyObservers();
  }

  decrement() {
    const colors = ['orange', 'yellow', 'purple'];
    this.number--;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.notifyObservers();
  }

  addObserver(o) {
    this.observers.push(o);
  }

  notifyObservers() {
    for (const o of this.observers) {
      o.update(this);
    }
  }
}
