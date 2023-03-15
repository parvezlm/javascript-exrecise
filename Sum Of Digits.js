//Sum Of Digits

function sumOfDigits(num) {
    let arr = num.toString().split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    return sum;
}

let res = sumOfDigits(1234);
console.log(res);
// output: 10


/**
 * using reduce method
 * + before curr, converting string value to number
 */

 function sumOfDigits2(num) {
    let arr = num.toString().split('');
    let sum = arr.reduce((acc, curr) => {
        acc += +curr;
        return acc;
    }, 0);

    return sum;
}

let res2 = sumOfDigits2(1234);
console.log(res2);
// output: 10
