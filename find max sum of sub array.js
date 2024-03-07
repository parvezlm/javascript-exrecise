var maxSumSubarr = function(nums, k) {
  let maxSum = -Infinity;
  let wSum = 0;
  let sum = [];
  
  for (let i = 0; i < k; i++) {
    wSum += nums[i];
  }
  
  for (let i = k; i < nums.length; i++) {
    wSum = wSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, wSum)
  }
  
  return maxSum;
};

let res = maxSumSubarr([4,1,3,5,1,2,3,2,1,1,5], 5);
console.log(res);

//output: 9