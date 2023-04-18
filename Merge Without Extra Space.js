// Merge Without Extra Space

function merge(arr1, arr2) {
    let _arr = sortArr([...arr1, ...arr2]);
    arr1 = _arr.slice(0, arr1.length);
    arr2 = _arr.slice(-arr2.length);
    return { arr1, arr2 }
}

// sort array using quick sort
function sortArr(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...sortArr(left), pivot, ...sortArr(right)];
}

let res = merge([1, 3, 5, 7], [0, 2, 6, 8, 9]);
console.log(res);

/**
 * output:
  arr1: [0, 1, 2, 3],
  arr2: [5, 6, 7, 8, 9]
 */