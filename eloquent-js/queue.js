class Queue {
  constructor(data = new Array()) {
    this.collection = data;
  }

  print() {
    console.log(this.collection);
  }

  enqueue(waiting = '', priority = 0) {
    this.collection.push(waiting);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

let q = new Queue(['Alice', 'Barry', 'Celio']);

console.log(q.size());
console.log(q.isEmpty());
console.log(q.front());
console.log(q.dequeue());
q.enqueue('Danny');
q.print();
