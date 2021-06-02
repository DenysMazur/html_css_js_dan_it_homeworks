let requestedUserNumber = prompt('Enter the nunmber, that no less, than 5');
console.log(typeof(requestedUserNumber));
console.log(requestedUserNumber.length)

while (Number.isNaN(Number(requestedUserNumber)) || requestedUserNumber === null) {
   requestedUserNumber = prompt('You need enter the nunmber, that no less, than 5');
}

console.log(requestedUserNumber);