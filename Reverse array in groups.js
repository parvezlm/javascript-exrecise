// Reverse array in groups
function reverseInGroups(arr, k) {
    for(let i = 0; i < arr.length; i += k)
    {
        let left = i;
 
        // To handle case when k is not
        // multiple of n
        let right = Math.min(i + k - 1, arr.length - 1);
        let temp;
         
        // Reverse the sub-array [left, right]
        while (left < right)
        {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return arr;
}

let res = reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
console.log(res);