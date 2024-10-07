function findMedianSortedArrays (nums1, nums2) {
    let arr = [...nums1, ...nums2];
    let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr)
    let index = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 !== 0) {
      return sortedArr[index];
    } else {
      let nums = sortedArr[index] + sortedArr[index - 1];
      return nums / 2;
    }
};

let res = findMedianSortedArrays([3], [-2,-1]);
console.log(res);
//output: -1;