const obj = {
    name: 'jhon',
    age: 25,
    address: {
      line1: 'xyz',
      line2: 'asdf'
    },
    contact: {
      mobile: 9876543234,
      gmail: 'example.com'
    }
  }
  
  function flatObj(obj) {
    let keys = Object.keys(obj);
    for (let key of keys) {
       if (typeof obj[key] === 'object') {
         obj = {...obj, ...obj[key]};
         delete obj[key];
       }
    }
    return obj;
  }
  
  let res = flatObj(obj);
  console.log(res)

  //output:  {
//   age: 25,
//   gmail: "example.com",
//   line1: "xyz",
//   line2: "asdf",
//   mobile: 9876543234,
//   name: "jhon"
// }