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