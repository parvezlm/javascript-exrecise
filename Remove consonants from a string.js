// Remove consonants from a string

function removeConsonants(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
        result += str[i];
    }
  }
  return result ? result : 'No Vowel';
}


let res = removeConsonants('abEkipo');
console.log(res);

//output :aEio