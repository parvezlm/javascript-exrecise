// reverse array using destructuring
const arr = [1,2,3,4,5];
let i = 0;
let j = arr.length - 1;
while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
}

console.log(arr);
// output : [5,4,3,2,1]