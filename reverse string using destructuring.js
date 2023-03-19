// reverse string using destructuring
const str = 'javascript';
const arr = str.split('');
let i = 0;
let j = arr.length - 1;
while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
}

console.log(arr.join(''));
// output : tpircsavaj