/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let str = [];

    if (s.length === 1) return s[0];

    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j < s.length; j++) {
            let elm = s.slice(i, j + 1);
            str.push(elm);
        }
    }

    //remove nullish value
    str = str.filter((item, i) => {
        if (item) {
            return item;
        }
    });

    return checkPalindrome(str);
};


function checkPalindrome(arr) {
    let palindromeStr = [];

    for (let i = 0; i < arr.length; i++) {
        let reverseStr = arr[i].split('').reverse().join('');
        if (arr[i] === reverseStr && arr[i].length >= 1) {
            palindromeStr.push(arr[i])
        }

    }

    let sortedArr = palindromeStr.sort((a, b) => a.length - b.length);
    return sortedArr[sortedArr.length - 1];
}