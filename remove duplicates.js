// remove duplicates form array
function rmoveDuplicate(arr) {
    output = [];
    arr.forEach(item => {
        if (!output.includes(item)) {
            output.push(item);
        }
    });
    return output;
  }
  
  let res = rmoveDuplicate([ 1, 8, 7, 56, 90,1,7,7,4,8,90]);
  console.log(res);