// First Repeating Element
function firstRepeated(arr) {
    let obj = createObj(arr);
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] >= 2) {
            return {element: arr[i], MinIndex: i};
        }
    }
    return -1;
}

function createObj(arr) {
    let obj = {};
    for (let item of arr) {
        if (item in obj) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    }
    return obj;
}


let res = firstRepeated([2, 3, 4, 5, 4, 3, 5, 6, 4, 2]);
console.log(res);

/** 
 * outpout:
 * {
    element: 10,
    MinIndex: 1
  }
*/
