// Display longest name

function longest(arr) {
  let max = '';
  for (let i = 0; i < arr.length; i++) {
    if (max.length < arr[i].length) {
      max = arr[i];
    }
  }
  return max;
}

let res = longest(["Geek", "Geeks", "Geeksfor",
  "GeeksforGeek", "GeeksforGeeks"]);
console.log(res);

// output: GeeksforGeeks