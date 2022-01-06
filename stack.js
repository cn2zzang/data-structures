// A LIFO data structure
// Stacks are used
// -> Managing function invoacations
// -> Undo / Redo
// -> Routing (the history object)
// Singly linked list 를 이용한 Class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
