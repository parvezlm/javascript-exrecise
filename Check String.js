// Check String
function check(str) {
  let res = [];
  for (let i = 1; i < str.length; i++) {
      if (str[0] !== str[i]) {
          return false;
      } 
   }
   return true;
}

let res = check('ggggg');
console.log(res);

//output : true;