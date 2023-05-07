// Adding Array Elements

function minOperations(arr, k) {
    let elms = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < k) {
            elms.push(arr[i]);
            arr.splice(i, 1);
            i = -1;
        }
    }
    return sumOfelms(elms, arr);
}

function sumOfelms(_arr, arr) {
    let count = 0;
    let sum = _arr.reduce((acc, curr) => {
        acc += curr;
        count++;
        return acc;
    }, 0)

    arr.unshift(sum);


    return count === 0 ? 0 : count - 1;
}

let res = minOperations([1, 10, 12, 9, 2, 3], 6);
console.log(res);


// output: 2
