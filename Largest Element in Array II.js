// Largest Element in Array using sorting

function largest(arr) {
  return sortArr(arr)[sortArr(arr).length - 1]
}

function sortArr(arr) {
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minIndex = j;
            }
        }
        
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    
    return arr;
}

let res = largest([ 1, 2, 0, 3, 2, 4, 5]);
console.log(res);
