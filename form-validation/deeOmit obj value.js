function deepOmit(obj, keysToOmit) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      deepOmit(obj[key], keysToOmit);
    } else if (keysToOmit.includes(key)) {
      delete obj[key];
    }
  }

  return obj;
}

let res = deepOmit([{a:1, b:2}, {b: 3, c: 4}], ['c']);
console.log(res);
//output: [{a:1, b:2}, {b: 3}]