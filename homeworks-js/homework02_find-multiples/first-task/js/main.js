let requestedUserNumber = prompt('Enter the nunmber, that no less, than 5, more than 0 and integer');
const devider = 5;
let arrayOfNumbers = [];

while (Number.isNaN(Number(requestedUserNumber)) || requestedUserNumber === null || requestedUserNumber.length === 0 || Math.round(Number(requestedUserNumber)) !== Number(requestedUserNumber)) {
   requestedUserNumber = prompt('You need enter the nunmber, that no less, than 5,more than 0 and integer');
}

for (let i = 1; i <= requestedUserNumber; i++) {
  if (i % devider === 0) {
    arrayOfNumbers.push(i)
  } else {
    continue;
  }  
}

if (arrayOfNumbers.length === 0) {
  alert('Sorry, no numbers');
} else {
  console.log(arrayOfNumbers);
}