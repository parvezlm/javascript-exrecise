// Quick Left Rotation

function leftRotate(arr, k) {
    for (let i = 0; i < k; i++) {
      let elm = arr.shift(); 
      arr.push(elm)
    }
   
    return arr;
  }
  
  
  let res = leftRotate([1, 2, 3, 4, 5, 6], 12);
  console.log(res);
  
  