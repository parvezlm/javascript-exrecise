// find() polyfill

let arr = [1, 2, 3, 4, 5];
Array.prototype.myFind = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i]);
            return arr;
        }
    }
}


let res = arr.myFind((item, i, arr) => {
    return item > 2
});

console.log(res);
// output : [3]