// find element in array using recursion 

function findNum(arr, num, i) {
    if (!arr.includes(num)) {
        return 'Not available';
    }

    if (arr[i] == num) {
        return { index: i, num: arr[i] }
    } else {
        index++;
    }
    return findNum(arr, num, index);
}

let index = 0;
let res = findNum([1, 2, 3, 4, 5], 5, index);
console.log(res);

// output: 
// {
//     index: 4,
//     num: 5
//   }