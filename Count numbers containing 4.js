// Count numbers containing 4
function countNumberswith4(num) {
    let count = 0;
    for (var i = 1; i <= num; i++) {
       if (i.toString().includes(4)) {
         count++;
       }
    }
    return count;
  }
  
  let res = countNumberswith4(40);
  console.log(res);
//   output : 5