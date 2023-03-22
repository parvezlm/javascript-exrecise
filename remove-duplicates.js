//remove duplicates and sort array another way
function rmoveDuplicate(arr) {
    let obj = {};
    arr.forEach(item => {
        obj[item] = 0;
    });

    return Object.keys(obj);

}

let _res = rmoveDuplicate([1, 8, 7, 56, 90, 1, 7, 7, 4, 8, 90]);
console.log(_res);