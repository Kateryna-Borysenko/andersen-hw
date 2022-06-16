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

//Task 3
