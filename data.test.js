import { test, expect } from "vitest";
import { Stack } from "./stack";
import { Queue } from "./queue";
import { LinkedList } from "./linklist";
import { reverse } from "./array";

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

test("Linked List Test", () => {
  const linkedList = new LinkedList(10);
  expect(linkedList.display()).toEqual({
    head: {
      value: 10,
      next: null,
    },
    tail: {
      value: 10,
      next: null,
    },
    nodes: 1,
  });
  linkedList.insert(12);
  expect(linkedList.display()).toEqual({
    head: {
      value: 10,
      next: {
        value: 12,
        next: null,
      },
    },
    tail: { value: 12, next: null },
    nodes: 2,
  });
  linkedList.insert(7, 0);
  expect(linkedList.display()).toEqual({
    head: {
      value: 7,
      next: {
        value: 10,
        next: {
          value: 12,
          next: null,
        },
      },
    },
    tail: { value: 12, next: null },
    nodes: 3,
  });
  linkedList.delete();
  expect(linkedList.display()).toEqual({
    head: {
      value: 7,
      next: {
        value: 10,
        next: null,
      },
    },
    tail: { value: 10, next: null },
    nodes: 2,
  });
  linkedList.delete(0);
  expect(linkedList.display()).toEqual({
    head: {
      value: 10,
      next: null,
    },
    tail: { value: 10, next: null },
    nodes: 1,
  });
});

test("Array Reverse", () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4];
  const array3 = [1, 2];
  const array4 = [1];
  const array5 = [];

  expect(reverse(array1)).toEqual([5, 4, 3, 2, 1]);
  expect(reverse(array2)).toEqual([4, 3, 2, 1]);
  expect(reverse(array3)).toEqual([2, 1]);
  expect(reverse(array4)).toEqual([1]);
  expect(reverse(array5)).toEqual([]);
});
