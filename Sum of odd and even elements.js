// Sum of odd and even elements

function find_sum(num) {
    let evenSum = sumOfnums(find_even_odd(num)[0]);
    let oddSum = sumOfnums(find_even_odd(num)[1]);
    return [evenSum, oddSum];
}

//find even num
function find_even_odd(num) {
    let evens = [];
    let odds = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        } else {
            odds.push(i);
        }
    }
    return [evens, odds];
}

// functoin sum of nums
function sumOfnums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let res = find_sum(5);
console.log(res);
// output : 6, 9


//=====================**** short version ***===============
function find_sum2(num) {
    let evens = 0;
    let odds = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evens += i;
        } else {
            odds += i;
        }
    }
    return [evens, odds];
}

let res2 = find_sum2(5);
console.log(res2);
// output : 6, 9