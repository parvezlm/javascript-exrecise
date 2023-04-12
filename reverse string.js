// reverse string

function reverseStr(str) {
    let arr = str.split(' ');
    let reverseWordArr = [];
    arr.forEach(item => {
        reverseWordArr.push(reverseWord(item))
    });

    return reverseWordArr.join(' ');  
    // return reverseWordArr.reverse().join(' ');
}

function reverseWord(word) {
    let str = '';
    for (let i = word.length - 1; i >= 0; i--) {
        str += word[i]
    }
    return str;
}

let res = reverseStr('Hello how are you');
console.log(res);

// output : "olleH woh era uoy"   //=> first return output
// output : "uoy era woh olleH" //=> second return output
