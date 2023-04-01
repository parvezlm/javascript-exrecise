// Segregate Even and Odd numbers
function segregateEvenOdd(arr) {
    let even = [];
    let odd = [];
    for (let elm of arr) {
        if (elm % 2 === 0) {
            even.push(elm);
        } else {
            odd.push(elm)
        }
    }

    return [...sortArr(even), ...sortArr(odd)];

}

// sort array using quick sort
function sortArr(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sortArr(left), pivot, ...sortArr(right)];
}

let res = segregateEvenOdd([12, 34, 45, 9, 8, 90, 3]);
console.log(res);

//output: [8, 12, 34, 90, 3, 9, 45]