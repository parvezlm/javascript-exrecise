// reduce() polyfill

Array.prototype.myReduce = function (callback, initial_val) {
 let acc = initial_val;
  
  for (let i = 0; i < this.length; i++) {
     if (acc) {
       acc = callback(acc, this[i], i, this);
     } else {
       acc = this[i];
     }
  }
  return acc;
}

const nums = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
let res = nums.myReduce(findNum);
console.log(res);

function findNum(acc, curr_val, curr_index, arr) {
  acc += curr_val;
  return acc;
}





// output: 'javascript'