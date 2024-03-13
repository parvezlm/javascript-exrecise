var maxSlidingWindow = function (nums, k) {
    let maxNums = [];
    for (let i = 0; i <= nums.length - k + i; i++) {
        maxNums.push(findMax(nums.slice(i, k)));
        k = k + 1;
    }
    return maxNums;
};

function findMax(arr) {
    let res = arr.sort((a, b) => a - b);
    return res[res.length - 1];
}


let res = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
// output: [3,3,5,5,6,7]
