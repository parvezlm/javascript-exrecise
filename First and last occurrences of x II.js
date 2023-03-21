// First and last occurrences of x usning leaner search 

function search(arr, num) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
          res.push(i);
      }
   }
   return [res[0], res[res.length - 1]];
}

let res = search([ 1, 3, 5, 5, 5, 5, 7, 123, 125], 7);
console.log(res);