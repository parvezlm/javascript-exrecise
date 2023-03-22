// fibonacci series using recursion
function printFibb(num) {
    if (num <= 1) return num;
    return printFibb(num - 1) + printFibb(num - 2);
 }
 
 for (let i = 1; i <= 7; i++) {
   console.log(printFibb(i))
 }