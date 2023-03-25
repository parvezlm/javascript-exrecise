// Number of occurrence
function firstElementKTime(arr, num) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  return obj[num] ? obj[num] : 0; 
}


let res = firstElementKTime([1, 1, 2, 2, 2, 2, 3], 2);
console.log(res);