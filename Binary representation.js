// Binary representation
function getBinaryRep(num) {
    let binary = num.toString(2).padStart(30,"0");
    return binary
 }

 //second approach
 function getBinaryRep2(num) {
    let binary = num.toString(2);
    let zero = '';
    for (let i = 0; i < len - (binary.length); i++) {
        zero += '0';
    }
    
   return zero + binary;
 }
 
 let res = getBinaryRep(2);
 console.log(res);
//  outpput : 000000000000000000000000000010;

let res2 = getBinaryRep(2);
 console.log(res2);
//  outpput : 000000000000000000000000000010;