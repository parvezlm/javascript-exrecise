function longestPalindrome(str) {
    let subStr = '';
    let isPalidrome;
    for (let i = 0; i < str.length; i++) {
      subStr = str[i];
      for (let j = i + 1; j < str.length; j++) {
        subStr += str[j];
        if (checkIsPalidrome(subStr)) {
           return subStr
        }
      }
    }
  }
  
  function checkIsPalidrome(str) {
   return str.split('').reverse().join('') === str;
  }
  
  let res = longestPalindrome('babad');
  console.log(res);
  
  // output : bab
