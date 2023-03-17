// find factorial

function find_fact(num) {
    let sumOfFact = 1;
    for (let i = 1; i <= num; i++) {
        sumOfFact *= i;
    }
    return sumOfFact;
}

let res = find_fact(5);
console.log(res);
// output : 120
