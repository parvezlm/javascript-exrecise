// Convert array into Zig-Zag fashion

function zigZag(arr) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (flag) {
            checkGreater(arr, i);
        } else {
            checkLesser(arr, i);
        }
        flag = !flag;
    }
    return arr;
}

// swap if elm is greather then to the next 
function checkGreater(arr, index) {
    if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
    }
}

// swap if elm is less then to the next
function checkLesser(arr, index) {
    if (arr[index] < arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
    }
}

let res = zigZag([4, 3, 7, 8, 6, 2, 1]);
console.log(res);