class Stack {
  constructor(maxSize) {

    if (isNaN(maxSize)) {
      maxSize = 10;
    }

    this.size = maxSize;
    this.data = [];
  }

  push(elem) {
    if (this.data.length >= this.size) {
      throw new Error('Stack Overflow');
    }

    return this.data = [...this.data, elem];
  }

  pop() {
    if (this.data.length === 0) {
      throw new Error('Stack is empty');
    }

    return this.data = [...this.data.slice(0, this.data.length - 1)];
  }

  peek() {
    if (this.data.length === 0) {
      return null;
    }


  }

  isEmpty() {
    return this.data.length === 0;
  }

  toArray() {

  }

  static fromIterable(iterable) {
  }
}

const stack = new Stack();
stack.push('hello1')
stack.push('hello2')
stack.pop()
// stack.pop()
// stack.pop()

console.log('🍒 stack', stack)


module.exports = { Stack };