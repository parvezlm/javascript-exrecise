var findDifference = function(nums1, nums2) {
  let diffOfArr = [findElement(nums2, nums1), findElement(nums1, nums2)];
  return diffOfArr;
};

function findElement(nums1, nums2) {
  let map = new Map();
  let difference = [];
 
  nums1 = [...new Set(nums1)]; // removing duplicates
  nums2 = [...new Set(nums2)]; // removing duplicates
   
  //set element in map
  for (let item of nums1) {
    map.set(item, item);
  }
  
  //check if an array element does not exist in another array
  for (let item of nums2) {
    if (!map.has(item)) {
      difference.push(item)
    }
  }
  
  return difference;
}

let res = findDifference([1, 2, 3], [2, 4, 6]);
console.log(res)

//output: [[1,3],[4,6]]