/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    let start = 0;
    let end = s.length - 1;
    let charTaken;
    while (start < end && s[start] === s[end]) {
       charTaken = s[start];
        while (start < end && s[start] === charTaken) {
            start++;
        }
        while (start <= end && s[end] === charTaken) {
            end--;
        }
    }
    return end - start + 1;
};

let res = minimumLength("aabccabba");
console.log(res);
//output: cca
