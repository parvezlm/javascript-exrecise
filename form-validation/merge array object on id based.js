function mergeData(arr1, arr2) {
    let data = [...arr1, ...arr2];
    
    for (let i = 0; i < data.length; i++) {
       for (let j = i + 1; j < data.length; j++) {
            if (data[i]?.id === data[j]?.id) {
             data[i] = {...data[i], ...data[j]};
             data.splice(j, 1)
         }
       }
    }
   
    return data;
}

let data1 = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
let data2 = [
    {id: 2, age: 25},
    {id: 3, name: 'Charlie'},
    {id: 1, age: 30},
    {id: 3, country: 'Aus'}
]

let res = mergeData(data1, data2);
console.log(res)
//output: [ { id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob', age: 25 }, { id: 3, name: 'Charlie', country: 'Aus' } ]
