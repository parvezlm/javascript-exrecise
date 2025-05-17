const str = 'a.b.c.d.e';
const strArr = str.split('.');
const obj = strArr.reduceRight(cb);

function cb(acc, curr) {
    return {[curr]: acc};
}

console.log(obj);

//// a.b.c.d.e => {a: { b: { c: { d: e } } } }
