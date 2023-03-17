// Pattern of Strings
function pattern(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str.slice(0, str.length - i))
      }
  }
  
pattern('parvez');

/*
output : 
parvez
parve
parv
par
pa
p
*/