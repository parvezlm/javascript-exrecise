/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let map = new Map();
    let arr = [...s1.split(' '), ...s2.split(' ')];
    let common = [];


    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }

    for (let item of map.keys()) {
        if (map.get(item) === 1) {
            common.push(item)
        }
    }

    return common;
};

let res = uncommonFromSentences("this apple is sweet", "this apple is sour")
console.log(res);
//outpot: ["sweet", "sour"]
