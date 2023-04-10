//find missing number using binary search

function MissingNumber(arr) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] - mid === 1 && arr[mid+1]-(mid+1) === 2) {
        return arr[mid] + 1;
      }
     
      if (arr[mid] - mid === 1) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      
    }
  }
  
  let res = MissingNumber([6,1,2,8,3,7,10,9,5]);
  console.log(res);
//   output : 4