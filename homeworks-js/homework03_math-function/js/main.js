let firstOperand = prompt('Enter the first number');
let secondOpernad = prompt('Enter the second number');
let calculationAction = prompt('What would you like to do with figures?, Enter math operation: ', '+ - / *');

while (Number.isNaN(Number(firstOperand)) || 
Number.isNaN(Number(secondOpernad)) || 
firstOperand === null || 
secondOpernad === null ||
calculationAction === null ||
firstOperand.length === 0 ||
secondOpernad.length === 0 ||
calculationAction.length === 0) {
  if (firstOperand === null) {
    firstOperand = 'Enter the first number'
    firstOperand = prompt('Enter the first number', firstOperand);
  } else firstOperand = prompt('Enter the first number', firstOperand);
  
  if (secondOpernad === null) {
    secondOpernad = 'Enter the second number'
    secondOpernad = prompt('Enter the second number', secondOpernad);
  } else secondOpernad = prompt('Enter the second number', secondOpernad);

  if (calculationAction === null) {
    calculationAction = 'Enter the symbol of math operation'
    calculationAction = prompt('What would you like to do with figures?, Enter math operation: ', calculationAction);
  } else calculationAction = prompt('What would you like to do with figures?, Enter math operation: ', calculationAction);  
}

function calculation(firstArg, secondArg, mathOperation) {
  let result = null;
  switch (mathOperation) {
    case '+':
      result = Number(firstArg) + Number(secondArg);
      break;
      case '-':
        result = firstArg - secondArg;
        break;
        case '*':
          result = firstArg * secondArg;
          break;
          case '/':
            result = firstArg / secondArg;
            break; 
    default:
      break;
  }

  return result;
}
console.log(`First arg: ${firstOperand}\nSecond arg: ${secondOpernad}\nMathematician operatin: ${calculationAction}`);
console.log(`Result of operation: ${firstOperand} ${calculationAction} ${secondOpernad} = ${calculation(firstOperand, secondOpernad, calculationAction)}`);
