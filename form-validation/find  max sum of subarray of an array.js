const arr = [3,4,5,6,7,8,9];
const w = 4;
let currSum = 0;
let max = 0;

for (let i = 0; i < w; i++) {
    currSum += arr[i];
}

max = currSum;

for (let i = 1; i <= arr.length - w; i++) {
    currSum = currSum - arr[i - 1] + arr[i + w - 1];
    
    if (currSum > max) {
        max = currSum;
    }
}

console.log(max);

//output: 30


// ========== 2nd approach ==========
let res = [];

for (let i = 0; i < arr.length - w + 1; i++) {
    res.push(sumOfArr(arr.slice(i, w + i)))
}

let result = res.sort((a, b) => a - b);
console.log(result.at(-1));

function sumOfArr(arr) {
    return arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0)
}

// output: 30
