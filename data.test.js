import { test, expect } from "vitest";
import { Stack } from "./stack";
import { Queue } from "./queue";

test("Stack Test", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.push(4)).toEqual(4);
  expect(stack.pop()).toEqual(4);
  expect(stack.print()).toEqual([1, 2, 3]);
  expect(stack.peek()).toEqual(3);
});

test("Queue Test", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  expect(queue.isEmpty()).toEqual(false);
  expect(queue.enqueue(5)).toEqual(5);
  expect(queue.dequeue()).toEqual(1);
  expect(queue.printQueue()).toEqual([2, 3, 4, 5]);
  expect(queue.peek()).toEqual(2);
  expect(queue.emptyQueue()).toEqual([]);
  expect(queue.isEmpty()).toEqual(true);
});

test("Linked List Test");
