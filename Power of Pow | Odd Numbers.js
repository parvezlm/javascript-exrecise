// Power of Pow | Odd Numbers
function sum_of_square_oddNumbers(num) {
    let oddNum = findOdd(num);
    let sumOfOdd = 0;
    for (let i = 0; i < oddNum.length; i++) {
        sumOfOdd += oddNum[i] ** 2;
    }
    return sumOfOdd;
}

//find odd number
function findOdd(num) {
    let oddNum = [];
    for (let i = 0; i <= num * 2; i++) {
        if (i % 2 !== 0) {
            oddNum.push(i);
        }
    }
    return oddNum;
}

let res = sum_of_square_oddNumbers(3);
console.log(res);
// output : 35