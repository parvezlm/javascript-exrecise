// Leaders in an array
function leader(arr, num) {
  let sum = [];
  let led = [];
  for (let i = 0; i < arr.length; i++) {
    let elm = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (elm > arr[j]) {
         sum.push(true);
      } else {
        sum.push(false);
      }
    } 
   
    if (sum.includes(false)) {
       sum = [];
    } else {
      led.push(arr[i])
    }
  }
  
  return led;
}

function checkFalsy(arr) {
   
}

let res = leader([16,17,4,3,5,2]);
console.log(res);
// output: [17, 5, 2]