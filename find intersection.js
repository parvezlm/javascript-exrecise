var intersection = function(nums1, nums2) {
  let map = new Map();
  let intersec = [];
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  for (let item of nums1) {
    map.set(item, item);
  }
  
  for (let item of nums2) {
    if (map.has(item)) {
      intersec.push(item);
    }
  }
  
  return intersec;
};

let res = intersection([4,9,5], [9,4,9,8,4]);
console.log(res);

// output: [9,4]