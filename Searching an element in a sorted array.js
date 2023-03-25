// Searching an element in a sorted array
function searchInSorted(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    
    if (num > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    
  }
  return -1;
}

let res = searchInSorted([1,2,3,4,6], 1);
console.log(res);