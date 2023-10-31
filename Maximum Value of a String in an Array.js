// Maximum Value of a String in an Array
function maximumValue(arr) {
    const reg = new RegExp('^[0-9]+$');
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans = Math.max(ans, reg.test(arr[i]) ? arr[i] : arr[i].length);
    }
    return ans;
}

let res = maximumValue(["alic3","bob","3","4","00000"]);
console.log(res);
// output: 5
