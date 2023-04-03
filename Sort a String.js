// Sort a String
function sortStr(str) {
    str = str.split('');
    let minIndex;
    for (let i = 0; i < str.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] < str[minIndex]) {
                minIndex = j;
            }
        }
        let temp = str[minIndex];
        str[minIndex] = str[i];
        str[i] = temp;
    }
    return str.join('');
}


let res = sortStr('javascript');
console.log(res);
// output: 'aacijprstv'