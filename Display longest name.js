// Display longest name

function longest(arr) {
  let obj = {};
  for (let item of arr) {
    if (item in obj) {
      obj[item] += item.length
    } else {
      obj[item] = item.length;
    }
  }
  
  const lengthVal = Object.values(obj).sort((a, b) => a - b);
  const longElm = findElm(obj,lengthVal.slice(-1))
  return longElm;
}

function findElm(obj,len) {
  for (let item in obj) {    
    if (obj[item] === len[0]) {
      return item;
    }
  }
}

let res = longest(["GeeksforGeeks","Geek", "Geeks", "Geeksfor",
  "GeeksforGeek"]);
console.log(res);

// output: GeeksforGeeks