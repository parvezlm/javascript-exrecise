// First and last occurrences of x usnig binary search
function search(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  let firstOccr = firstNlastOcur(arr, num, null, mid - 1);
  let lastOccr = firstNlastOcur(arr, num, mid + 1, null);
  return {firstOccr, lastOccr};
}

function firstNlastOcur(arr, num, startPos, endPos) {
  let start = 0;
  let end = arr.length - 1;
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (num === arr[mid]) {
       ans = mid;
       if (startPos) {
         start = startPos
       } else {
         end = endPos;
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




