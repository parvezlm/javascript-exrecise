// Power of Pow | Even Number
function sum_of_square_evenNumbers(num) {
    let evenNum = findEven(num);
    let sum = 0;
    for (let i = 0; i < evenNum.length; i++) {
        sum += evenNum[i]** 2; 
    }
    return sum;
}

//find even number
function findEven(num) {
  let arr = [];
  for (let i = 1; i <= num * 2; i++) {
      if (i % 2 === 0) {
          arr.push(i);
      }
   }
   return arr;
}

let res = sum_of_square_evenNumbers(3);
console.log(res);