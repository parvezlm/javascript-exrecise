var largestGoodInteger = function(num) {
  const goodInt = ["000","111","222","333", "444","555", "666", "777", "888", "999"];
  let max = "";
  goodInt.forEach(item => {
    if (num.includes(item)) {
      max = item;
    }
  });
  return max;
};

let res = largestGoodInteger("6777133339");
console.log(res);

// output: 777;