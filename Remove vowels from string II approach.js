// Remove vowels from string
function removeVowels(str) {
    let newStr = '';
    return str.replace(/[aeiou]/g,'');
}

let res = removeVowels('what is your name ?');
console.log(res);
//output : wht s yr nm ?