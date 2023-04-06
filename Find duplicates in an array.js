// Find duplicates in an array
function duplicates(arr) {
  let obj = hash(arr);
  let dupElm = [];
  obj.forEach((item, i) => {
    if (obj.get(i) >= 2) {
       dupElm.push(i);
    }
  });
  return dupElm;
}

// create object of Element
function hashMap(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
}

let res = duplicates([1, 2, 3, 6, 3, 6, 1]);
console.log(res);
// output : [1, 3, 6]