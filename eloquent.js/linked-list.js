class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertTail(data) {
    let current = null;
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  insertAtIndex(data, index) {
    if (index === 0 || index < 0) {
      this.insertHead(data);
      return;
    }
    if (index > this.size || !index) {
      this.insertTail(data);
      return;
    }

    let count = 0;
    let current = this.head;
    let previous = null;

    const node = new Node(data);

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  getAtIndex(index) {
    let count = 0;
    let current = this.head;

    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }

    return null;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.size) {
      console.log(`${index} out of range.`);
      return;
    }

    let count = 0;
    let current = this.head;
    let previous = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  printLLData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  clearLL() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();

ll.insertHead("A");
ll.insertTail("B");
ll.insertTail("C");
ll.insertAtIndex("asdf", -0);
ll.insertAtIndex(0, -3);
ll.insertAtIndex("I am the alpha", -Infinity);
ll.insertAtIndex("I am the omega", null);
ll.removeAtIndex(1);
ll.removeAtIndex(1);

ll.printLLData();

ll.clearLL();
