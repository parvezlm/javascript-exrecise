// Find the smallest and second smallest element in an array
let minElm = [];
function minAnd2ndMin(arr, k) {
   arr = [...new Set(arr)];
   let min = Math.min(arr[0], arr[arr.length - 1]);
   for (let i = 0; i < arr.length; i++) {
     if (min > arr[i]) {
        min = arr[i];
     }
   }
  
  minElm.push(min);
  arr.splice(arr.indexOf(min), 1);
  if (minElm.length !== k) {
    minAnd2ndMin(arr, k);
  }
  
  return minElm;
}


let res = minAnd2ndMin([1, 2, 1, 3, 6, 7], 2);
console.log(res);




