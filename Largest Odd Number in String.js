var largestOddNumber = function(num) {
  if (num.slice(-1) % 2 !== 0) return num;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return num.slice(0, i + 1)
    }
  }
  return "";
};

let res = largestOddNumber("3691669784801845146");
console.log(res);
//output: 36916697848018451