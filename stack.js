class Stack {
  constructor(maxSize = 10) {
    if (
      typeof maxSize !== 'number' ||
      maxSize === Infinity ||
      maxSize === -Infinity ||
      maxSize === 0
    ) {
      throw new Error('maxSize - must be number, more then 0');
    }

    this.maxSize = maxSize;
    this.stack = {};
    this.stackCounter = 0;
  }

  push(elem) {
    if (this.stackCounter >= this.maxSize) {
      throw new Error('Stack Overflow');
    }

    this.stackCounter += 1;
    this.stack[this.stackCounter] = elem;
  }

  pop() {
    if (this.stackCounter === 0) {
      throw new Error('Stack is empty');
    }

    const elem = this.stack[this.stackCounter];
    delete this.stack[this.stackCounter];
    this.stackCounter -= 1;
    return elem;
  }

  peek() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stackCounter - 1];
  }

  isEmpty() {
    return this.stackCounter === 0;
  }

  toArray() {
    return Object.values(this.stack);
  }

  static fromIterable = (iterable) => {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Entity must be iterable');
    }

    const newStack = new Stack(iterable.length);

    for (const elem of iterable) {
      newStack.push(elem);
    }

    return newStack;
  }
}

const stack = new Stack(3);

stack.push('elem1');
stack.push('elem2');
stack.push('elem3');
// stack.push('elem4');

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

console.log('🍒 stack', stack);

console.log('🍒 isEmpty', stack.isEmpty());
console.log('🍒 arr', stack.toArray());


module.exports = { Stack };