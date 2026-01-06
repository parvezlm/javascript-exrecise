
function rotateArr(arr) {
  let res = [];
  
  for (let i = arr.length - 1; i >=0; i--) {
    let subArr = [];
     for (let j = arr.length - 1; j >= 0; j--) {
       subArr.push(arr[i][j])
     }
     res.push(subArr);
  }
  return res;
}



const input = [ 
  [1,2,3], 
  [4,5,6], 
  [7,8,9] 
];

let res = rotateArr(input);
console.log(res)

// Output : [
// [9,8,7],
// [6,5,4],
// [3,2,1]
// ]