function groupAnagram(arr) {
    const map = new Map();
    for (let item of arr) {
      let sortedItem = item.split('').sort().join('');
      if (!map.has(sortedItem)) map.set(sortedItem, []);
      map.get(sortedItem).push(item);
    }
    return [...map.values()]
  }
  
  let res = groupAnagram(['eat', 'tea', 'tan', 'nat', 'bat']);
  console.log(res)

  //output: [ ['eat', 'tea'], [ 'tan', 'nat' ], [ 'bat' ] ]
