function areSentencesSimilar(sentence1, sentence2) {
  // If the sentences are equal, no need to check further
  if (sentence1 === sentence2) return true;

  // Split the sentences into words
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');

  // Remove common words from the beginning until there are no more common words
  while (words1[0] === words2[0]) {
    words1.shift(); // Remove the first element from words1
    words2.shift(); // Remove the first element from words2
  }

  // Remove common words from the end until there are no more common words
  while (words1[words1.length - 1] === words2[words2.length - 1]) {
    words1.pop(); // Remove the last element from words1
    words2.pop(); // Remove the last element from words2
  }

  // After all the common words are removed, if there are words left in either sentence, then the sentences are not similar
  return words1.length > 0 || words2.length > 0;
}
  
  let res = areSentencesSimilar("My name is Haley", 'My Haley');
  console.log(res);
  //output: true