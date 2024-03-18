var areOccurrencesEqual = function (s) {
    let map = {};
    for (let item of s) {
        map[item] = (map[item] ? map[item] + 1 : 1);
    }

    let values = [...Object.values(map)];
    let keys = [...Object.keys(map)];
    let equ = 0;

    for (let item of keys) {
        if (map[item] === values[values.length - 1]) {
            equ++
        }
    }

    return equ === keys.length;
};

let res = areOccurrencesEqual('abacbc');
console.log(res);

//output: true;

