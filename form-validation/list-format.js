function formatList(items) {
    let str = '';
    if (!items.length) return '';
    if (items.length === 1) return items[0];
  
    for (let i = 0; i < items.length - 1; i++) {
      if (!str) {
         str += items[i] + ', ';
      } else {
        str += items[i] + ', ';
      }
    }
   
    return str + 'and ' + items.at(-1);
  }
  
  let res = formatList(['apple', 'banana']);
//   let res = formatList(['apple', 'banana', 'cherry]);
//   let res = formatList(['one', 'two', 'three', 'four']);
  console.log(res);
  
  //output: apple and bananna
  //output: apple, banana and cherry
  //output: one, two, three and four