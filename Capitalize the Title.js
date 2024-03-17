var capitalizeTitle = function(title) {
    title = title.split(' ');
    let arr = [];
    title.forEach((item) => {
      if (item.length > 2) {
        let elm = item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
        arr.push(elm)
      } else {
        arr.push(item.toLowerCase());
      }
    })
    return arr.join(' ');
};

let res = capitalizeTitle("capiTalIze tHe titLe");
console.log(res);

// output: "Capitalize The Title"