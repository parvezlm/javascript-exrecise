// Remove vowels from string
function removeVowels(str) {
    let newStr = '';
    let arr = str.split('');
    let vowels = ['a','e','i','o','u'];
    for (let i = 0; i < arr.length; i++) {
      if (vowels.includes(arr[i])) {
          arr.splice(i, 1);
          i = -1;
       }
     }
     
     return arr.join('');
  }
  
  let res = removeVowels('what is your name ?');
  console.log(res);
//   output: wht s yr nm ?