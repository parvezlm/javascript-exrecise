var reverseArr = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr
};




let res = reverseArr([2,4,6,8,10,12]);
console.log(res)
//output: [12,10,8,6,4,2]