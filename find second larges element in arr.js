// find second largest number in arr

function findSecondLargest(arr) {
 arr = arr.sort((a, b) => a - b); 
 let res = 0;
 for (let i = 0; i < arr.length - 1; i++) {
   if (res !== arr[i]) {
     res = arr[i];
   }
 }
  return res
}

let res = findSecondLargest([1,2,-2,11,7,1]);
console.log(res);

//output: 7