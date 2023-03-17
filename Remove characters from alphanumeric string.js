// Remove characters from alphanumeric string
function string(str) {
    const hasNumber = /\d/g;
    let digits = [];
    for (let i = 0; i < str.length; i++) {
        if (!!str[i].match(hasNumber)) {
            digits.push(str[i]);
        }
    }
    return digits.join('');
}

let res = string('AA1d23cBB4');
console.log(res);
//output : 1234