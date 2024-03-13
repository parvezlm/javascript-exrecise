/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    let medians = [];
    if (nums.length === 1) return [nums[0]];
    for (let i = 0; i <= nums.length - k + i; i++) {
        medians.push(sortArr(nums.slice(i, k)));
        k = k + 1;
    }
    return medians;
};

function sortArr(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let mid = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    }
    return sortedArr[mid];
}

let res = medianSlidingWindow([1,4,3,2], 4);
console.log(res);
// output: [2.5]