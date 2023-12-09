class Node {
  value: number;
  prev: Node | null = null;
  next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class DoublyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  size: number = 0;

  display() {
    if (!this.head) {
      console.log('Doubly linked list is empty!')
    }

    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  insertAtEnd(value: number) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size++;
  }

  insertAtBegin(value: number) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtIndex(value: number, index: number) {
    if (index > this.size) {
      console.log('Linked list does not have that index!');
    }

    if (index === 0) {
      insertAtBegin(value);
    }

    if (index === this.size) {
      insertAtEnd(value);
    }

    const nodeToAdd = new Node(value);
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (i === index - 1) {
        let nextNode = current.next;
        current.next = nodeToAdd;
        nodeToAdd.prev = current;
        nodeToAdd.next = nextNode;
        nextNode.prev = nodeToAdd;
        this.size++;
        break;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  removeAtEnd() {
    let current = this.tail;

    if (!this.head) {
      console.log('List is empty');
    }

    current.prev = this.tail;
    current.next = null;
    this.size--;
  }
}

const DLL = new DoublyLinkedList();
DLL.insertAtBegin(12);
DLL.insertAtBegin(24);
DLL.insertAtBegin(44);
console.log('hello')