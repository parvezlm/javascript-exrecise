// Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubArray(nums) {
    let sum = nums[0];
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        if (curr > sum) sum = curr;
        if (curr < 0) curr = 0;
    }
    return sum;
}

let res = maxSubArray([5,4,-1,7,8]);
console.log(res);
// output: 23
