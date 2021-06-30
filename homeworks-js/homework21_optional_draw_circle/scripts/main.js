const currentButton = document.querySelector('.main-button');
currentButton.style.borderRadius = '5px';
currentButton.style.display = 'block';

document.addEventListener('click', (event) => {  
  if (event.target.classList.contains('main-button')) {
    if (currentButton.nextElementSibling.tagName !== "INPUT") {
      currentButton.insertAdjacentElement('afterend', toCreateInput());
      currentButton.nextElementSibling.insertAdjacentElement('afterend', toCrateSpan());
      currentButton.nextElementSibling.nextElementSibling.insertAdjacentElement('afterend', toCreateButton());
    }
  }

  if (event.target.classList.contains('button-for-create-circles')) {
    const currentInput = document.querySelector('.input-for-diameter');
    const currentSpan = document.querySelector('.info-span');
    if (currentInput.value === '' || currentInput.value <= 0) {
      currentSpan.style.color = 'red';
    } else {
      currentSpan.style.color = 'black';
      const collectionOfCircles = document.querySelectorAll('.circle');
      if (collectionOfCircles.length > 0 && collectionOfCircles.length <= 100) {
        for (let index = 0; index < collectionOfCircles.length; index++) {
          collectionOfCircles[index].remove();          
        }
        for (let index = 0; index < 100; index++) {
          document.body.append(toCreateCircle(currentInput.value));        
        }
      } else {
        for (let index = 0; index < 100; index++) {
          document.body.append(toCreateCircle(currentInput.value));
        }
      }     
      
    }
  }

  if (event.target.classList.contains('circle')) {
    event.target.remove();
  }

})

function toCreateCircle(diameter) {
  const newCircle = document.createElement('div');
  newCircle.style.display = 'inline-block';
  newCircle.style.height = `${diameter}px`;
  newCircle.style.width = `${diameter}px`;
  newCircle.style.borderRadius = '50%';
  newCircle.style.marginLeft = '5px';
  newCircle.style.marginRight = '5px';
  newCircle.style.marginTop = '5px';
  newCircle.style.marginBottom = '5px';
  newCircle.style.backgroundColor = `rgb(${randomInteger()}, ${randomInteger()}, ${randomInteger()})`;
  newCircle.classList.add('circle')
  return newCircle;
}

function randomInteger(min = 0, max = 255) {  
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function toCrateSpan() {
  const newSpan = document.createElement('span');
  newSpan.innerHTML = 'диаметр круга, px (должна быть цифра > 0)';
  newSpan.classList.add('info-span');
  newSpan.style.marginLeft = '5px';
  return newSpan;
}

function toCreateInput() {
  const newInput = document.createElement('input');
  newInput.style.marginTop = '5px';
  newInput.type = 'number';
  newInput.classList.add('input-for-diameter')
  return newInput;
}

function toCreateButton() {
  const newButton = document.createElement('button');
  newButton.innerHTML = 'Нарисовать';
  newButton.style.display = 'block';
  newButton.style.marginTop = '5px';
  newButton.style.borderRadius = '5px';
  newButton.classList.add('button-for-create-circles');
  return newButton;
}