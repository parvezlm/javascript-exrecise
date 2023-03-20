// Cyclically rotate an array by one
function search(arr, k) {
    let elm = arr.pop();
    arr.unshift(elm);
    return arr;
  }
  
  let res = search([9, 8, 7, 6, 4, 2, 1, 3], 3);
  console.log(res);