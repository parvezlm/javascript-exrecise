// Sum of elements in a matrix
function sumOfMatrix(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
     }
     return sum;
}
  
let res = sumOfMatrix([[1,0,1], [-8,9,-2]]);
console.log(res);
