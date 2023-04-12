// flat nested array
let flatedArr = [];
function flatArr(arr) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatArr(item);
    } else {
      if (flatedArr.indexOf(item) === -1) {
        flatedArr.push(item);
      }
    }
  })
  return flatedArr;
}

let res = flatArr([1,[2,3, [1,3,4]], [5,6,7, [4,5,8]]]);
console.log(res);

// output: [1, 2, 3, 4, 5]