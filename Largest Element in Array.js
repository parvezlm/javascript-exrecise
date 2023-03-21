// Largest Element in Array

function largest(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
          max = arr[i]
      }
   }
   return max;
}

let res = largest([ 1, 2, 0, 3, 2, 4, 5]);
console.log(res);