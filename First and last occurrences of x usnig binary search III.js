// First and last occurrences of x usnig binary search
function search(arr, num) {
    let firstOccr = firstNlastOcur(arr, num, true);
    let lastOccr = firstNlastOcur(arr, num, false);
    return {firstOccr, lastOccr};
  }
  
  function firstNlastOcur(arr, num, firstOccr) {
    let start = 0;
    let end = arr.length - 1;
    let ans = 0;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (num === arr[mid]) {
         ans = mid;
         if (firstOccr) {
           end = mid - 1;
         } else {
           start = mid + 1;
         }
      } else if (num > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  }

let res = search([ 1, 3, 5, 5, 5, 5, 67, 123, 125], 5);
console.log(res);




