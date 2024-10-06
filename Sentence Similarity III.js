function areSentencesSimilar (sentence1, sentence2) {
    if (sentence1 === sentence2) return true;
    let words1 = sentence1.split(' ');
    let words2 = sentence2.split(' ');
    while (words1.at(0) === words2.at(0)) {
      words1.shift();
      words2.shift()
    }
    while (words1.at(-1) === words2.at(-1)) {
      words1.pop();
      words2.pop();
    }
    
    return !!words1.length || !!words2.length;
  };
  
  let res = areSentencesSimilar("My name is Haley", 'My Haley');
  console.log(res);
  //output: true