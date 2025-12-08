function lengthOfLongestSubstring(str) {
    let palStr = [];
    
    for (let i = 0; i < str.length; i++) {
     let char = str[i];
      for (let j = i + 1; j < str.length; j++) {
        char += str[j];
        if (char === reverseStr(char)) {
          palStr.push(reverseStr(char))
        }
      }
    }  
    
    return palStr[0].length
  }
  
  function reverseStr(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
     revStr += str[i]; 
    }
    
    return revStr;
  }
  
  let res = lengthOfLongestSubstring("racecar");
  console.log(res);