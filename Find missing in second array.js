// Find missing in second array

function findMissing(arr1, arr2) {
  let num = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      num.push(arr1[i])
    }
   }
  return num;
}

let res = findMissing([4, 3, 5, 9, 11], [4, 9, 3, 11, 10]);
console.log(res);
// output: [5]