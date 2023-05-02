// forEach() polyfill

let arr = [1, 2, 3, 4, 5];
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

arr.myForEach((item, i, arr) => {
    console.log(item);
});

// output: 1,2,3,4,5