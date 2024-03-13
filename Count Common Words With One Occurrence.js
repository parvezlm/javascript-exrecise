var countWords = function(words1, words2) {
  let count = 0;
  words_1 = words1.length >= words2.length ? words1 : words2;
  words_2 = words2.length > words1.length ? words1 : words2;
  
  let map1 = createHashTable(words_1);
  let map2 = createHashTable(words_2)
  
  for (let item of map1.keys()) {
    if (map1.get(item) === 1 && (words_2.includes(item) && map2.get(item) === 1)) {
      count++;
    }
  }
  
  return count;
    
};

function createHashTable(words) {
  let map = new Map();
   for (let item of words) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    } 
  }
  return map;
}

let res = countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]);
console.log(res)

//output: 2
