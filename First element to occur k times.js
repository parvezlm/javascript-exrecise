// First element to occur k times

function firstElementKTime(arr, num) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  
  return findElm(obj, num);
  
}

function findElm(values, num) {
  for (let key in values ) {
    if (num === values[key]) {
       return key;
    }
  }
  return -1;
}

let res = firstElementKTime([1, 7, 4, 3, 4, 8, 7], 2);
console.log(res);