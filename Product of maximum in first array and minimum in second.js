// Product of maximum in first array and minimum in second

function find_multiplication(arr1, arr2) {
    let max = findMax(arr1);
    let min = findMin(arr2);
    return max * min;
  }
  
  function findMin(arr) {
    let min = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i]
      }
    }
    return min;
  }
  
  function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }
  
  
  let res = find_multiplication([5, 7, 9, 3, 6, 2], [1, 2, 6, -1, 0, 9]);
  console.log(res);
//   output : -9
  
  