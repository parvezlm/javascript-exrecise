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
