// Check if two arrays are equal or not

function check(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  if (arr1.length !== arr2.length) {
    return 'not equal';
  }
  
  let count = 0;
  
  arr1.forEach((item, i) => {
    if(item == arr2[i]) {
      count++;
    }
  })
  
  
  return arr1.length === count ? 'Equal' : 'not Equal';
}

let res = check([1,2,5,4,6], [2,4,5,6,1]);
console.log(res);

//outptu : "Equal"