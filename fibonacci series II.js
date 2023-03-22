// fibonacci series
function fibb(num) {
    let series = [0, 1];
    for (let i = 0; i <= num - 2; i++) {
        series.push(series[i] + series[i + 1]);
    }
    series.shift();
    return series;
}

let res = fibb(7);
console.log(res);