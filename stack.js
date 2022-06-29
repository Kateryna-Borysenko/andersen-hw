class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.top = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
      this.tail = node;
    } else {
      this.top.prev = node;
      node.next = this.top;
      this.top = node;
    }

    this.size++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const node = this.tail;

    if (this.size === 1) {
      this.top = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.size--;

    return node.value;
  }

  find(value) {
    let current = this.top;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  toArray() {
    const arr = [];
    let current = this.top;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error('Entity must be iterable');
    }

    const list = new LinkedList();

    for (const elem of iterable) {
      list.append(elem);
    }

    return list;
  }
}


class Stack {
  constructor(maxSize) {

    if (isNaN(maxSize)) {
      maxSize = 10;
    }

    this.size = maxSize;
    this.list = new LinkedList();
  }

  push(elem) {
    if (this.list.length >= this.size) {
      throw new Error('Stack Overflow');
    }

    this.list.append(elem);
  }

  pop() {
    if (this.list.length === 0) {
      throw new Error('Stack is empty');
    }

    return this.list.pop();
  }

  peek() {
    if (this.list.length === 0) {
      return null;
    }

    return this.list.tail.value;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  toArray() {
    return this.list.toArray();
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error('Entity must be iterable');
    }

    const stack = new Stack();

    for (const elem of iterable) {
      stack.push(elem);
    }

    return stack;
  }
}

module.exports = { Stack };