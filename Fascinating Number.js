
/**
 * Fascinating Number
 * + sign before sortConcatNums, convert string to number
 * Fascinating Number: When a number(should contain 3 digits or more) is multiplied by 2 and 3, 
   and when both these products are concatenated with the original number, 
   then it results in all digits from 1 to 9 present exactly once.
 */


function fascinating(num) {
    let facNum = 123456789;
    let mulWith_2 = num * 2;
    let mulWith_3 = num * 3;
    let concatNums;
    let sortConcatNums;

    if (num.toString().length <= 2) return 'Not Fascinating';

    concatNums = num.toString() + mulWith_2.toString() + mulWith_3.toString();
    sortConcatNums = concatNums.split('').sort().join('');
    return facNum === +sortConcatNums ? 'Fascinating' : 'Not Fascinating';

}

let res = fascinating(192);
console.log(res);

// output : Fascinating