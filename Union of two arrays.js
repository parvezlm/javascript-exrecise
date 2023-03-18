// Union of two arrays
function doUnion(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return [...new Set(arr)].length;
}

let res = doUnion([1,2,3,4,5], [1,2,3]);
console.log(res);
//ouptput : 5