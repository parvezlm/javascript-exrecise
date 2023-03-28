// First element to occur k times
function firstElementKTime(arr, k) {
    let count = {};
    for (num of arr) {
      if (num in count) {
        count[num] += 1;
      } else {
        count[num] = 1;
      }
      
      if (count[num] === k) {
        return num
      }
    }
    return count;
  }
  
  let res = firstElementKTime([1, 7, 4, 3, 4, 8, 7], 2);
  console.log(res);
  //output: 4