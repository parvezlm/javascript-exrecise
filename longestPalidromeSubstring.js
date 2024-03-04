/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let map = new Map();
    let str = '';
    if (s.length === 1) return s;
    for (let i = 0; i < s.length; i++) {
        str = s[i];
        for (let j = i + 1; j <= s.length; j++) {
            if (reverseStr(str) === str) {
                map.set(str.length, str);
            }
            str += s[j]
        }
    }

    let logestPalindromicSubStr = [...map.values()]
    logestPalindromicSubStr.sort((a, b) => a.length - b.length);
    return logestPalindromicSubStr[logestPalindromicSubStr.length - 1]
};

function reverseStr(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

let result = longestPalindrome('babad');
console.log(result);

//output: bab
