function flatPolyfill(arr, depth = 100) {
    let result = [];

    arr.forEach(function() {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flatPolyfill(item, depth - 1));
        } else {
            result.push(item);
        }
    })

    return result;
}


let nestedArr = [1,2,[3,4,[5,6,[7,8,9,[10]]]]];
let res = flatPolyfill(nestedArr, 2);
console.log(res)

