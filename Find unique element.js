// Find unique element

function findUnique(arr) {
    let obj = hashing(arr);
    for (let elm in obj) {
        if (obj[elm] === 1) {
            return elm;
        }
    }
}

function hashing(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }
    return count;
}

let res = findUnique([2, 2, 2, 10, 2]);
console.log(res);
// output: 10