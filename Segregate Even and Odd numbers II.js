// Segregate Even and Odd numbers
function segregateEvenOdd(arr) {
  arr = arr.sort((a, b) => a- b);
  let even = [];
  let odd = [];
  for (let elm of arr) {
    if (elm % 2 === 0) {
      even.push(elm);
    } else {
      odd.push(elm);
    }
  }
  return [...even, ...odd];
  
}


let res = segregateEvenOdd([12, 34, 45, 9, 8, 90, 3]);
console.log(res);
//output: [8, 12, 34, 90, 3, 9, 45]