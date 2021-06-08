let userNumber = prompt("Enter the integer positive number > 0");

while (Number.isNaN(Number(userNumber)) || userNumber === null || userNumber.length === 0 || Number(userNumber) <= 0) {
  userNumber = prompt("Enter the integer positive number > 0", userNumber);
}

function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}

alert(`${Number(userNumber)}! = ${factorial(Number(userNumber))}`);