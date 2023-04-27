//Maximum of all subarrays of size k

function max_of_subarrays(arr, k) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(i, k + i);
    if (subArr.length === k) {
      obj[i] = findMax(subArr);
    }
  }
  return obj;
}

// find max element in array
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  
  return {arr, max};
  
}

let res = max_of_subarrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 3);
console.log(res);
// output:
// {
//     0: [object Object] {
//       arr: [1, 2, 3],
//       max: 3
//     },
//     1: [object Object] {
//       arr: [2, 3, 1],
//       max: 3
//     },
//     2: [object Object] {
//       arr: [3, 1, 4],
//       max: 4
//     },
//     3: [object Object] {
//       arr: [1, 4, 5],
//       max: 5
//     },
//     4: [object Object] {
//       arr: [4, 5, 2],
//       max: 5
//     },
//     5: [object Object] {
//       arr: [5, 2, 3],
//       max: 5
//     },
//     6: [object Object] {
//       arr: [2, 3, 6],
//       max: 6
//     }
//   }


