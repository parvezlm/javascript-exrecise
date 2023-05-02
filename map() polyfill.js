// map() polyfill

let arr = [1, 2, 3, 4, 5];
Array.prototype.myMap = function(callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
}


let res = arr.myMap((item, i, arr) => {
    return item * 8;
});

console.log(res);
//output: [8, 16, 24, 32, 40]