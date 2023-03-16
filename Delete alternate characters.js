// Delete the characters at odd indices of the string.
function delAlternate(str) {
    let res = '';
    let i = 0;
    
    while (i < str.length) {
        if (i  % 2 === 0) {
            res += str[i];
        }
        i++;
    }
    return res;
}

let res = delAlternate('GeeksforGeeks');
console.log(res);
//output: GesoGes