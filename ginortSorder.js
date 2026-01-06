function ginortStringOrder(inputString) {
    const inputCharacters = inputString.split('');
    const upperCaseCharacters = inputCharacters.filter(character => /[A-Z]/.test(character)).sort();
    const lowerCaseCharacters = inputCharacters.filter(character => /[a-z]/.test(character)).sort();
    const evenDigits = inputCharacters.filter(character => /[02468]/.test(character)).sort((a, b) => a.localeCompare(b));
    const oddDigits = inputCharacters.filter(character => /[13579]/.test(character)).sort((a, b) => a.localeCompare(b));
    
    return lowerCaseCharacters.join('') + upperCaseCharacters.join('') + oddDigits.join('') + evenDigits.join('');
}
  
  let res = ginortSOrder("Sorting4321");
  console.log(res);

  //output: "ginortS1324"
