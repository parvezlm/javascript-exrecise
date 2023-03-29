// Balanced Array
function minValueToBalance(arr) {
  let mid = Math.floor(arr.length / 2);
  let fhalf = arr.slice(0, mid);
  let shalf = arr.slice(mid);
  let elm = [sum(fhalf), sum(shalf)].sort((a, b) => a - b);
  return elm[1] - elm[0];
}

function sum(arr) {
  let sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  return sum;
}



let res = minValueToBalance([1, 2, 1, 2, 1, 3]);
console.log(res);
