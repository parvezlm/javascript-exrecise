/**
 * The dice problem
 * {1: 6, 2: 5, 3: 4, 4: 3, 5: 2 ,6: 1}
*/

function oppositeFaceOfDice(num) {
    return 7 - num;
}

let res = oppositeFaceOfDice(3);
console.log(res);
// output: 4