function secondHighNum(arr) {
    let max = -Infinity;
    let secondMax = - Infinity;
    
     for (let i = 0; i < arr.length; i++) {
       if (max < arr[i]) {
         secondMax = max;
         max = arr[i];
       } else if (max > arr[i] && arr[i] > secondMax) {
         secondMax = arr[i];
       }
     }
    return secondMax
   }
   
   let res = secondHighNum([2,5,4,6,8,7]);
   console.log(res);
   
   //output: 7
