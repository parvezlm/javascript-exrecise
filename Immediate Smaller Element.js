// Immediate Smaller Element
function immediateSmaller(arr) {
    let smaller = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
            smaller.push(arr[i + 1]);
        } else {
            smaller.push(-1)
        }
    }
    return smaller
}

let res = immediateSmaller([5, 6, 2, 3, 1, 7]);
console.log(res);