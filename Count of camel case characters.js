// Count of camel case characters
function countCamelCase(str) {
    let alph = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
        if (alph.indexOf(str[i]) !== -1) {
            count++;
        }
     }
     return count;
  }
  
  let res = countCamelCase('ckjkUUYII');
  console.log(res);
  
//output :  5