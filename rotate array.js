// rotate array clock wise
function rotateArr(arr, n) {
    for (let i = 0; i < n; i++) {
        let elm = arr.pop();
        arr.unshift(elm);
    }
    return arr;
}

let res = rotateArr([1, 2, 3, 4, 5], 3);
console.log(res);

//   output: [3,4,5,1,2]