// Find median in a stream

function findMedianStream(arr) {
    let stream = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        let mid = sum / (i + 1);
        stream.push(mid);
    }
    return stream;
}

let res = findMedianStream([5, 10, 15]);
console.log(res);
// output: [5, 7.5, 10]
