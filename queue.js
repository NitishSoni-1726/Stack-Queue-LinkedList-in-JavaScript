export class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
    return item;
  }
  dequeue() {
    let deletedElement = this.queue[0];
    this.queue.splice(0, 1);
    return deletedElement;
  }
  peek() {
    return this.queue[0];
  }
  printQueue() {
    return this.queue;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  emptyQueue() {
    return (this.queue = []);
  }
}
