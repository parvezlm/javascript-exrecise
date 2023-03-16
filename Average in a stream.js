// Average in a stream
function streamAvg(arr) {
    let sum = 0;
    let avg = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        avg.push((sum / (i + 1)).toFixed(2));
    }
    return avg;
 }
 
 let res = streamAvg([10, 20, 30, 40, 50]);
 console.log(res);
 //output: [ '10.00', '15.00', '20.00', '25.00', '30.00' ]
