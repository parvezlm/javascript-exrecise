function slidingWin(arr, k) {
  let maxSum = -Infinity;
  let currSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
       currSum += arr[i];
       
       if (i >= k - 1) {
         maxSum = currSum;
         currSum -= arr[i - (k - 1)];
       } 
  }
  
  return maxSum
  
}




let res = slidingWin([2,4,3,7,6,5], 3);
console.log(res);