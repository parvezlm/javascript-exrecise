// filter() polyfill

let arr = [1, 2, 3, 4, 5];
Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}


let res = arr.myFilter((item, i, arr) => {
    return item > 2;
});

console.log(res);
// output: [3, 4, 5]