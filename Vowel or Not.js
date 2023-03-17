//Vowel or Not
function isVowel(char) {
   let vowels = ['a', 'e', 'i', 'o', 'u'];
   return vowels.indexOf(char) !== -1 ? 'Yes' : 'No';
}

let res = isVowel('a');
console.log(res);
//output: Yes