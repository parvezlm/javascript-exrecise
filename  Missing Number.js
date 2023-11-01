// Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
function missingNumber(arr) {
    let num = arr.length + 1;
    let total = (num * (num - 1)) / 2;
    for (let item of arr) {
        total -= item;
    }
    return total;
}

let res = missingNumber([9,6,4,2,3,5,7,0,1]);
console.log(res);
// output: 8