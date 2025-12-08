function longestSubstring(str, k) {
  obj = {};
  for (let char of str) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  return countLength(obj, k);
}

function countLength(obj, k) {
  let keys = Object.keys(obj);
  let count = 0;
  keys.forEach((key) => {
    if (obj[key] >= k) {
      count += obj[key];
    }
  })
  return count;
}


let res = longestSubstring('ababbc', 2);
console.log(res);