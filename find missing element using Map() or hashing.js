// find missing element using Map() or hashing
function MissingNumber(arr) {
  let stack = new Map();
  for (let elm of arr) {
     stack[elm] = elm;
  }
  
  for (let i = 1; i <= arr.length; i++) {
    if (stack[i] !== i) {
      return i;
    }
  }
  
  return arr.length === 0 ? 1 : arr.length + 1;
}

let res = MissingNumber([1,2,3,5]);
console.log(res);
// output : 4