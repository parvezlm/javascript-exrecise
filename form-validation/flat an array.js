function flatArr(arr) {
    let fltArr = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
         fltArr = [...fltArr, ...flatArr(item)]
      } else {
        fltArr.push(item);
      }
    }
    return fltArr;
  }
  
  let res = flatArr([1,2,[3,4,[5,6,[7,8,9,[10]]]]]);
  console.log(res)

  //outpuot : [1,2,3,4,5,6,7,8,9,10]


  // ============== updated approach ================
  let nestedArr = [1,2,[3,4,[5,6,[7,8,9,[10]]]]];

  function flattenArr(arr) {
    let result = [];
    
    arr.forEach(function(item) {
      if (Array.isArray(item)) {
          result.push(...flattenArr(item))
      } else {
        result.push(item);
      }
      
    })
    
    return result;
  }

  let res2 = flattenArr(nestedArr);
  console.log(res2)

  //output: [1,2,3,4,5,6,7,8,9,10]

