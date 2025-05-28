function lengthOfLongestSubstring(s) {
    let arr = s.split('');
    let sameElm = arr.every(item => item === arr[0]);
    arr = arr.slice(1);
   let str = arr.reduce((acc, item) => {
         
         if (!acc[item]) {
             acc[item] = item
         } 
       return acc;
   }, {})
 
     // for (let i = 1; i < arr.length; i++) {
     //     obj[arr[i]] = obj[arr[i]] || arr[i];
     // }
    
 //   console.log(obj)
 
   return Object.values(str).join('').length;
 //   return sameElm ? arr[0] : arr;
 }
 
 
 let res = lengthOfLongestSubstring("abcabcbb");;
 console.log(res)
//output: 3


//solution 2 using sliding windows
// function lengthOfLongestSubstring(s) {
//   let set = new Set();
//   let maxLength = 0;
//   let left = 0;

//   for (let right = 0; right < s.length; right++) {
//       while (set.has(s[right])) {
//           set.delete(s[left]);
//           left++;
//       }
//       set.add(s[right]);
//       maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// let res2 = lengthOfLongestSubstring("abcabcbb");
// console.log(res2);  // Output: 3 ("abc")

