// Implement strstr without predefined methods
function strstr(str, sstr) {
   let elm = '';
   for (let i = 0; i < str.length; i++) {
       elm = str.slice(i, sstr.length + i);
       if (elm === sstr) {
         return i;
       }
   }
  return -1;
}

let res = strstr('GeeksForGeeks', 'ksF');
console.log(res);