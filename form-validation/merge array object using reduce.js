const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 1, city: 'New York' },
    { id: 2, country: 'USA' },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  const merge = Object.values(
      data.reduce((acc, item) => {
          if (!acc[item?.id]) {
              acc[item.id] = {...item};
          } else {
              acc[item.id] = {...acc[item.id], ...item}
          }
          return acc;
      }, {})    
  )
  
  console.log(merge);
  // output: [ { id: 1, name: 'Alice', age: 25, city: 'New York' }, { id: 2, name: 'Bob', age: 30, country: 'USA' }, { id: 3, name: 'Charlie', age: 35 } ]  