// Maximize sum(arr[i]*i) of an Array
function Maximize(arr) {
    let sum = 0;
    arr = sortArr(arr);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i;
    }
    
    return sum;
}

// sort array
function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1;
        }
    }
    return arr;
}

let res = Maximize([3, 5, 6, 1 ]);
console.log(res);