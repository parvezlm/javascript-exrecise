// Display longest name

function longest(arr) {
  let max = 0;
  let longString = '';
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].length) {
      max = arr[i].length;
      longString = arr[i];
    }
  }
  return longString;
}

let res = longest(["Geek", "Geeks", "Geeksfor",
  "GeeksforGeek", "GeeksforGeeks"]);
console.log(res);

// output: GeeksforGeeks