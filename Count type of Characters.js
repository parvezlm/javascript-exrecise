// Count type of Characters
function count(str) {
    const hasNumber = /\d/;
    const isLowerCaseLetter = /[a-z]/;
    const isUpperCaseLetter = /[A-Z]/;
    let upper = 0;
    let lower = 0;
    let spe = 0;
    let digit = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (hasNumber.test(ch)) {
            digit++;
        } else if (isUpperCaseLetter.test(ch)) {
            upper++;
        } else if (isLowerCaseLetter.test(ch)) {
            lower++;
        } else {
            spe++;
        }
    }
    return [upper, lower, digit, spe]
}

let res = count('*GeEkS4GeEkS*');
console.log(res);
//output: 6,4,1,2;