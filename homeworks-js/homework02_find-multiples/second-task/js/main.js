let minNumber = prompt('Set integer number for "m" - have to be less, than "n"');
let maxNumber = prompt('Set integer number for "n" - have to be more, than "m"');
const simpleNumbersArray = [];

while (Math.round(Number(minNumber)) !== Number(minNumber) || 
      Math.round(Number(maxNumber)) !== Number(maxNumber) || 
      Number.isNaN(Number(minNumber)) || 
      Number.isNaN(Number(maxNumber)) || 
      minNumber === null || 
      maxNumber === null ||
      minNumber.length === 0 ||
      maxNumber.length === 0 || 
      minNumber >= maxNumber) {
        minNumber = prompt('Set integer number for "m" - have to be less, than "n"');
        maxNumber = prompt('Set integer number for "n" - have to be more, than "m"');
}

minNumber = Number(minNumber);

nextPrime:
for (Number(minNumber); minNumber <= maxNumber; minNumber++){
  if (minNumber <= 1) {
    continue nextPrime;
  } else {
    for (let j = 2; j < minNumber; j++) {
      if (minNumber % j == 0) continue nextPrime;
    }

    simpleNumbersArray.push(minNumber);
  }
}

console.log(simpleNumbersArray);