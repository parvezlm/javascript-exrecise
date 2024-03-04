var lengthOfLongestSubstring = function(s) {
 let set = new Set();
 let left = 0;
 let maxSize = 0;
  
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[i]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  
  return maxSize;
};

console.log(lengthOfLongestSubstring('abcabcbb'))