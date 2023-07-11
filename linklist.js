class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}
export class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.nodes = 1;
  }
  traverse(index) {
    if (index > this.nodes || index < 0) {
      return `Index should be less that or equal to no of Nodes i.e ${this.nodes} and index can't be negative`;
    } else {
      let currentNode = this.head;
      if (index === 0) {
        currentNode = this.head;
      } else {
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
        }
      }
      return currentNode;
    }
  }
  insert(element, index) {
    const newNode = new Node(element);
    if (index === undefined) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.nodes++;
    } else {
      if (index > this.nodes || index < 0) {
        return `Index should be less that or equal to no of Nodes i.e ${this.nodes} and index can't be negative`;
      } else if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.nodes++;
      } else {
        const leaderNode = this.traverse(index - 1);
        const nextNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.nodes++;
        if (index === this.nodes) {
          this.tail = this.tail.next;
        } else {
          this.tail = this.tail;
        }
      }
    }
  }
  delete(index) {
    if (index > this.nodes || index < 0) {
      return `Index should be less that or equal to no of Nodes i.e ${this.nodes} and index can't be negative`;
    } else if (index === undefined) {
      const lastSecondNode = this.traverse(this.nodes - 2);
      lastSecondNode.next = null;
      this.tail = lastSecondNode;
      this.nodes--;
    } else if (index === 0) {
      this.head = this.traverse(index + 1);
      this.nodes--;
    } else {
      const nodeBeforeAskedToDelete = this.traverse(index - 1);
      const nodeAfterAskedToDelete = this.traverse(index + 1);
      nodeBeforeAskedToDelete.next = nodeAfterAskedToDelete;
      this.nodes--;
    }
  }
  display() {
    return this;
  }
}

const linklist = new LinkedList(1);
linklist.insert(2);
linklist.insert(3);
linklist.insert(4);
linklist.delete(1);
console.log(linklist.display());
