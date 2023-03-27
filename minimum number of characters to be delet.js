// minimum number of characters to be deleted to make both the strings anagram.

function remAnagram(s1, s2) {
  let newStr = 0;
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  for (let i = 0; i < s1.length; i++) {
     if (!s2.includes(s1[i])) {
         newStr++;
     }
  }
  
  let dupElm = findDup(s1) ? 1 : 0;
  
  return newStr + dupElm;
}

function findDup(str) {
  let obj = {};
  let dupElm = '';
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  
  for (let key in obj) {
    if (obj[key] >= 2) {
      dupElm = key;
    }
  }
return dupElm
  
}

let res = remAnagram('bcadeh', 'hea');
console.log(res);