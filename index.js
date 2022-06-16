//Task 1
const makeObjectDeepCopy = (obj) => {
  if (typeof obj === 'object') {
    const cloneObj = {};
    const objKeys = Object.keys(obj);
    objKeys.forEach((key) => {
      cloneObj[key] = makeObjectDeepCopy(obj[key]);
    })
    return cloneObj;
  } else {
    return obj;
  }
}

//Task 2
const selectFromInterval = (arr, firstInt, secondInt) => {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array.');
  }

  const max = Math.max(firstInt, secondInt);
  const min = Math.min(firstInt, secondInt);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error('Not a valid number.');
    }
    if (
      arr[i] >= min &&
      arr[i] <= max
    ) {
      result.push(arr[i]);
    }
  }
  return result;
}

//Task 3
myIterable[Symbol.iterator] = function* () {
  if (this.from > this.to) {
    throw new Error('First argument < second one.');
  }

  if (typeof this.from !== 'number' || typeof this.to !== 'number') {
    throw new Error('Arguments must be numbers.');
  }

  if (this.from === undefined || this.to === undefined) {
    throw new Error('Arguments must be defined.');
  }

  for (let i = this.from; i <= this.to; i++) {
    yield i;
  }
};
