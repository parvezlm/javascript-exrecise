// Print the left element

/**
 * 
 * sortest solution
 * 
 */

// function leftElement(arr) {
//     arr.sort((a, b) => a - b);
//     let mid = Math.floor((arr.length - 1) / 2);
//     return arr[mid];
// }

function leftElement(arr) {
    let sortedArr = sortArr(arr);
    let mid = Math.floor((arr.length - 1) / 2);
    return sortedArr[mid];
}

// sort array using selection sort
function sortArr(arr) {
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        swapArr(arr, minIndex, i);
    }

    return arr;
}

//swap array elements
function swapArr(arr, minIndx, index) {
    let temp = arr[minIndx];
    arr[minIndx] = arr[index];
    arr[index] = temp;
}


let res = leftElement([7, 8, 3, 4, 2, 9, 5]);
console.log(res);
//output: 5