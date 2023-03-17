// Greatest of three numbers
function greatestOfThree(...args) {
    for (let i = 0; i < args.length; i++) {
        if (args[i] > args[i + 1]) {
            let temp = args[i];
            args[i] = args[i + 1];
            args[i + 1] = temp;
        }
    }
    return `${args[args.length - 1]} is greatest among the three`;
 }
 
 let res = greatestOfThree(-4,-3,-2);
 console.log(res);