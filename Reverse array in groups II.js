// Reverse array in groups

function reverseInGroups(arr, k) {
    let itration = Math.floor(arr.length / 2);
    let index = 0;
    let res = [];
    for (let i = 0; i < itration; i++) {
       res = [...res, ...reverseArr(arr.slice(index, k))];
       index = k;
       k += k;
    }
    return res;
  }
  
  function reverseArr(arr) {
    let rvrsArr = arr.reverse();
    return rvrsArr;
  }
  
  let res = reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  console.log(res);
//   output: [3, 2, 1, 6, 5, 4, 9, 8, 7]
  