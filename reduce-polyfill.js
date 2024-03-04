let arr = [1,2,3,4,5, 6];

Array.prototype.myReduce = function(callback, initialVal) {
  let acc = initialVal || 0;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
}

let data = arr.myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0)

console.log(data)

