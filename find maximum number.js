var maxNumber = function(nums, k) {
  let max = 0;
  for (let i = 0; i < nums.length - k; i++) {
    max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    console.log(max)
  }
  
};

let res = minimumRecolors([4,1,3,5,1,2,3,2,1,1,5], 3);
console.log(res);