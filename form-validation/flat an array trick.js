let nestedArr = [1,2,[3,4,[5,6,[7,8,9,[10]]]]];
let flatArr = nestedArr.toString().split(',').map(Number);

console.log(flatArr)

//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
