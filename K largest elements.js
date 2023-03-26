// K largest elements
let kLargNum = [];
function kLargest(arr, k) {
  let max = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
          max = arr[i];
      }
  }
  
  kLargNum.push(max);
  arr.splice(arr.indexOf(max), 1);
  
  if (kLargNum.length !== k) {
     kLargest(arr, k);
  } 
 
  return kLargNum;
}


let res = kLargest([12,5,787,1,23], 2);
console.log(res);

