//Task 1
Array.prototype.myFilter = function (callback, context) {
  array = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
}


//Task 2
function createDebounceFunction(callback, delay) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), delay);
  }
}