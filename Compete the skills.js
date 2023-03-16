// Compete the skills
function scores(arr1, arr2) {
  let len = arr1.length;
  let count_a = 0;
  let count_b = 0;
  for (let i = 0; i < len; i++) {
      if (arr1[i] > arr2[i]) {
          count_a++;
      } else if (arr1[i] < arr2[i]){
          count_b++;
      }
   }
   
   return [count_a, count_b];
}

let res = scores([4, 2, 7], [5, 2, 8]);
console.log(res);
//output : [ 0, 2 ]