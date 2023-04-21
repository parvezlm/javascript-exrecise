// Check if two arrays are equal or not

function check(arr1, arr2) {
    arr1 = sortArr(arr1);
    arr2 = sortArr(arr2);
    if (arr1.length !== arr2.length) {
        return 'not equal';
    }

    const arr = [];
    let count = 0;

    arr1.forEach((item, i) => {
        if (item == arr2[i]) {
            // arr.push(true)
            count++;
        }
    })


    return arr1.length === count ? 'Equal' : 'not Equal';
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

let res = check([1,2,5,4,6], [2,4,5,6,1]);
console.log(res);
//output: Equal