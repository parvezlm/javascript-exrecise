function deepOmit(obj, keysToOmit) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepOmit(item, keysToOmit));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (!keysToOmit.includes(key)) {
        acc[key] = deepOmit(value, keysToOmit);
      }
      return acc;
    }, {});
  }

  return obj; // primitive value
}


let res = deepOmit({a: { b: { c: 2, d: 3 }, c: 5 }, c: 1 }, ['c']);
console.log(res);

//output: {a:{ b: { d: 3 }}}

