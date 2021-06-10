const company = {
  sales: [[{name: 'Kate'}, 1, {name: 'Jury'}], {name: 'Alice', salary: 600}],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  },
  finance: "Cap"
};


function copyObject(objectFrom) {
    
  const newCopiedObject = {};
  
  (function internalCheacking(objectFrom) {
    if (Object.prototype.toString.call(objectFrom) === "[object Object]") {
      for (const key in objectFrom) {    
        if (Object.prototype.toString.call(objectFrom[key]) === "[object Object]") {          
          newCopiedObject[key] = copyObject(objectFrom[key]);
        } else if (Array.isArray(objectFrom[key])) {
          newCopiedObject[key] = [];          
          for (const iterator of objectFrom[key]) { 
            if (Object.prototype.toString.call(iterator) === "[object Object]") {
              newCopiedObject[key].push(copyObject(iterator));
            } else if (Array.isArray(iterator)){              
              newCopiedObject[key].push(internalCheacking(iterator));
            } else {
              newCopiedObject[key] = iterator;
            }         
          }
        } else {
          newCopiedObject[key] = objectFrom[key];
        }      
      }
    } else if (Array.isArray(objectFrom)){
      const additionalArray = []
      for (const iterator of objectFrom) {
        if (Object.prototype.toString.call(iterator) === "[object Object]") {
          additionalArray.push(copyObject(iterator));
        } else if (Array.isArray(iterator)){
          additionalArray.push(internalCheacking(iterator));
        } else {
          additionalArray.push(objectFrom[iterator]);
        }         
      }
      return additionalArray;
    }
  }(objectFrom))
  return newCopiedObject; 
}

const big = copyObject(company)
big.finance = 'Good'
console.log(big);
console.log(company);

