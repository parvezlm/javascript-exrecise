// Subarray with given sum
function subarraySum(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum == num) {
        return [i + 1, j + 1];
      }
    }
  }
  
}

let res = subarraySum([1,2,3,4,5,6,7,8,9,10], 15);
console.log(res);
// output: [1, 5]
