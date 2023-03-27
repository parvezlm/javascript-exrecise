// Check if a string is Isogram or not
function isIsogram(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    
    for (let key in obj) {
      if (obj[key] >= 2) {
        return 1;
      }
    }
    
    return 0;
    
  }
  
  
  let res = isIsogram('machine');
  console.log(res);