var kthDistinct = function(arr, k) {
    let map = new Map();
    let distinct = [];
    
    for (let item of arr) {
      map.set(item, (!map.get(item) ? 1 : map.get(item) + 1));
    }
    
    for (let item of map.keys()) {
      if (map.get(item) === 1) {
        distinct.push(item);
      }
    }
    
    return !distinct[k - 1] ? '' : distinct[k - 1];
  };
  
  
  let res = kthDistinct(["a","b","a"], 3)
  console.log(res)