// Given an integer array nums, find a subarray that has the largest product, and return the product.

function maxProduct(arr) {
    let num = 1;
    let products = [];
    for (let i = 0; i < arr.length; i++) {
        products.push(arr[i + 1] ? arr[i] * arr[i + 1] : 0);
    }
  return sortArr(products);
}

function sortArr(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr[arr.length - 1];
}


let res = maxProduct([2,3,-2,4]);
console.log(res);
//output: 0