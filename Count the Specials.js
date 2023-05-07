// Count the Specials

function countSpecials(arr, k) {
    let num = Math.floor(arr.length / k);
    let countObj = findCounts(arr, k);
    let count = 0;
    for (let item in countObj) {
        if (countObj[item] >= num) {
            count++;
        }
    }
    return count;
}

function findCounts(arr, k) {
    let obj = {};
    for (let item of arr) {
        if (item in obj) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    }
    return obj;
}


let res = countSpecials([1, 4, 1, 2, 4], 2);
console.log(res);
// output: 2
