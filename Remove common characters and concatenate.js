// Remove common characters and concatenate

//concating strings
function concatenatedString(s1, s2) {
    let elm1 = removeDup(s1, s2);
    let elm2 = removeDup(s2, s1);
    return elm1 + elm2;
}

// remove duplicates form string
function removeDup(str1, str2) {
  let elm = '';
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      let regExp = new RegExp(str2[i], 'g');
      elm = str1.replace(regExp, '');
      str1 = elm;
    }
  }
  return elm;
}

let res = concatenatedString('abcs', 'cxzca');
console.log(res);
//output : "bsxz"