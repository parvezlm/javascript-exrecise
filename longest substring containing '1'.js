// longest substring containing '1'
function longestStr(str1, str2) {
    let firstStr = findStr(str1)
    let secondStr = findStr(str2);
    return {firstStr, secondStr};
  }
  
  function findStr(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 1) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }
  
  let res = longestStr('110', '11101110');
  console.log(res)
//   output: 2, 3