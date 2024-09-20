/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky (arr) {
    let map = new Map();
    let lucky = [];
    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }
    for (let key of map.keys()) {
        if (key === map.get(key)) {
            lucky.push(key);
        }
    }
    let luckyElm = lucky.sort((a, b) => a - b);
    return lucky.length === 0 ? -1 : lucky[lucky.length - 1];
};

let res = findLucky([4,3,2,2,4,1,3,4,3]);
console.log(res)

//output: 3