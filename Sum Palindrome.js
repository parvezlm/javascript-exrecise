// Sum Palindrome
function isSumPalindrome(num) {
   let reverseNum = +num.toString().split('').reverse().join('');
   let sum = reverseNum + num;
   let rvrsSum = +sum.toString().split('').reverse().join('');
   return rvrsSum === sum ? 'palindrome' : 'Not palindrome';
}

let res = isSumPalindrome(32);
console.log(res);
//output: palindrome