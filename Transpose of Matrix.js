// Transpose of Matrix
function transpose(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
          let temp = arr[i][j];
          arr[i][j] = arr[j][i];
          arr[j][i] = temp;
       }
     }
    return arr;
  }
  
  let matrix = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
  ];
  let res = transpose(matrix);
  console.log(res);
  
  