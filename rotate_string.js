/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    let arr = s.split('');
    for (let item of s) {
        let char = arr.shift();
        arr.push(char);
        if (arr.join('') === goal) return true;
    }
    return false;
};


let res = rotateString("abcde", "abced");
console.log(res);
//output: true