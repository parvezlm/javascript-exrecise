let arr = [1,2,3,4,5];

//polyfill of map()
Array.prototype.myMap = function(callback) {
  let arr  = [];
  for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, arr));
  }
  return arr;
}

let res = arr.myMap((item, index, arr) => item + 2);
console.log('Map polyfill', res);

//polyfill of filter() 
Array.prototype.myFilter = function(callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, arr)) {
      arr.push(this[i]);
    }
  }
  return arr;
}

let filterRes = arr.myFilter((item, index, arr) => item % 2 === 0);
console.log('Filter polyfill', filterRes);


//polyfill of find()
Array.prototype.myFind = function(callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
}


let d = arr.myFind((item, i, arr) => item > 2);
console.log('Find polyfill', d)


