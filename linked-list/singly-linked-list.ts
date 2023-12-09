class Node {
  value: number;
  next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class SinglyLinkedList {
  head: Node | null = null;
  size: number = 0;

  display() {
    if (!this.head) {
      console.log('Linked list is empty!')
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
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.size++;
  }

  insertAtBegin(value: number) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

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

    const newNode = new Node(value);
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (i === index - 1) {
        let nextNode = current.next;
        current.next = newNode;
        newNode.next = nextNode;
        this.size++;
        break;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  removeAtEnd() {
    let current = this.head;

    if (!this.head) {
      console.log('List is empty');
    }

    while(current.next.next) {
      current = current.next;
    }

    current.next = null;
    this.size--;
  }

  removeAtBegin() {
    this.head = this.head.next;
    this.size--;
  }

  removeAtIndex(index: number) {
    if (index > this.size) {
      console.log('Linked list does not have that index!');
    }

    if (index === 0) {
      removeAtBegin();
    }

    if (index === this.size) {
      removeAtEnd();
    }
    
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (index - 1 === i) {
        current.next = current.next.next;
        this.size--;
        break;
      } else {
        i++;
        current = current.next;
      }
    }
  }
}

const LL = new SinglyLinkedList();
LL.insertAtEnd(255);
LL.insertAtEnd(22);
LL.insertAtEnd(11);
LL.insertAtEnd(12);
LL.insertAtEnd(13);
LL.insertAtEnd(14);
LL.insertAtEnd(15);
LL.removeAtIndex(4);
LL.display();