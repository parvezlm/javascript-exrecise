function maxSlidingWindow(arr, k) {
  let max = [];
  
  for (let i = 0; i < arr.length - k + 1; i++) {
    let subArr = arr.slice(i, k + i);
    max.push(Math.max(...subArr, -Infinity));
  }
  return max;
}

let nums = [1,3,-1,-3,5,3,6,7], k = 3;
let res = maxSlidingWindow(nums, k);
console.log(res);

//output: [3,3,5,5,6,7]
