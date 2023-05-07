// Segregate Even and Odd numbers
function segregateEvenOdd(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }

    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b)

    return [...even, ...odd]

}


let res = segregateEvenOdd([12, 34, 45, 9, 8, 90, 3]);
console.log(res);

//   output: [8, 12, 34, 90, 3, 9, 45]