function addDashCreditCard(cardNumber) {
    let str = cardNumber.toString();
    let char = '';
    let dashAdded = '';
    
    for (let i = 0; i < str.length; i++) {
      char += str[i];
      if (char.length === 4) {
         if (dashAdded) {
           dashAdded += '-';
         }
        dashAdded += char;
        char = '';
      }
    }
    
      return dashAdded
  }
  
  let res = addDashCreditCard(1234567890123456);
  console.log(res)
  
  //output: 1234-5678-9012-3456