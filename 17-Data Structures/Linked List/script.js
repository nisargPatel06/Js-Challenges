class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else {
      let temp = this.head;
      while (temp.next) temp = temp.next;
      temp.next = newNode;
    }
  }

  remove() {
    if (!this.head) return console.log("List is Empty!");

    if (!this.head.next) {
      const removedValue = this.head.value;
      this.head = null;
      return console.log(`Removed: ${removedValue}`);
    }

    let temp = this.head;
    while (temp.next.next) temp = temp.next;

    const removedValue = temp.next.value;
    temp.next = null;
    return console.log(`Removed: ${removedValue}`);
  }

  display() {
    let temp = this.head;
    let values = "";
    while (temp) {
      values += `${temp.value} `;
      temp = temp.next;
    }
    console.log(`LL: ${values}`);
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.display();

list.remove();
list.display();
list.remove();
list.display();
list.remove();
