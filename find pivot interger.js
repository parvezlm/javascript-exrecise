/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sum = (n + 1) * n / 2;
    let pivotInt = Math.sqrt(sum);
    return pivotInt * pivotInt === sum ? pivotInt : -1;
};

//output: 6;