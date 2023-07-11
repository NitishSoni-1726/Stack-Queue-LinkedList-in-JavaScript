export class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
    return item;
  }
  pop() {
    return this.stack.pop();
  }
  print() {
    return this.stack;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
