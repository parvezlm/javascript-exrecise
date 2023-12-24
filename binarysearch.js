// binary search
function binarysearch(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + (end - start) / 2));
        if (arr[mid] === k) {
            return mid;
        }
        
        if (k > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        
    }
    
    return -1;
}

let res = binarysearch([1, 2, 3, 4, 5], 1);
console.log(res);

//214 068 530