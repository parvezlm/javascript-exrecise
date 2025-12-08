function lengthOfLongestSubstring(str) {
    let subStr = '';
    for (let i = 1; i < str.length; i++) {
      if (!subStr.includes(str[i])) {
        subStr += str[i];
      }
    }
    return subStr.length
  }
  
  let res = lengthOfLongestSubstring('pwwkew');
  console.log(res)

  // output : 3
