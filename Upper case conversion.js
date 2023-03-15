//Upper case conversion
function transform(str) {
    let arr = str.split(' ');
    let modifyArr = [];
    for (let i = 0; i < arr.length; i++) {
        let elm = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        modifyArr.push(elm);
    }
    return modifyArr.join(' ');
}

let res = transform('i love programming');
console.log(res); 
//output: I Love Programming