//find duplicate in object

function findDup(input1, input2) {
    let obj = {};
    for (let key in input1) {
      if (input1[key] === input2[key]) {
        obj[key] = input1[key]
      }
    }
    return obj
  }
  
  let res = findDup({a:1, b:2, c:3, d:10, e:12}, {a:2, e:12,f:6 ,d:10});
  console.log(res);

//   output: {d: 10, e: 12}