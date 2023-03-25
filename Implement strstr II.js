// Implement strstr with predefined methods
function strstr(str, sstr) {
  if (str.includes(sstr)) {
    return str.indexOf(sstr);
  }
  return -1;
}

let res = strstr('GeeksForGeeks', 'rGe');
console.log(res);