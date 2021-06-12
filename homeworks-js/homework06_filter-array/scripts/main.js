const currentArray = ['hello', 'world', 23, '23', null];

function filterBy(array, type) {
  let newFilteredArray = array.filter((item) => typeof(item) !== type);
  console.log(newFilteredArray);
  return newFilteredArray;
}

filterBy(currentArray, 'string');