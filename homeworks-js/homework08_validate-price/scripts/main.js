function createSpan() {
  const currentSpan = document.createElement('span');
  currentSpan.innerHTML = `Текущая цена: ${currentInput.dataset.number} $`;
  return currentSpan;
}

function createButton() {
  const currentButton = document.createElement('button');
  currentButton.innerHTML = 'X';
  currentButton.style.cssText = `border-radius: 50%;
  margin-left: 5px;
  ;`
  currentButton.addEventListener('click', () => {
    let collectionOfChilds = document.querySelector('.div-for-span').children;
    for (const iterator of collectionOfChilds) {
      iterator.remove();
    }
    collectionOfChilds = document.querySelector('.div-for-span').children;
    for (const iterator of collectionOfChilds) {
      iterator.remove();
    }
    currentInput.value = '';
  })
  return currentButton;
}

(function createDivForSpan() {
  const currentDiv = document.createElement('div');
  currentDiv.classList.add('div-for-span')
  currentDiv.style.height = '20px';
  currentDiv.style.marginBottom = '5px';
  currentDiv.style.paddingLeft = '80px';
  document.body.append(currentDiv);
}())

function createParagrath() {
  const paragrath = document.createElement('p');
  paragrath.style.cssText = `margin: 0px`
  paragrath.innerHTML = 'Price $:';
  paragrath.classList.add('paragrath');
  return paragrath;
}

function createInput() {
  const input = document.createElement('input');
  input.classList.add('mainInput');
  input.type = 'number';
  input.setAttribute('data-number', '0');
  input.style.cssText = `border: 3px solid black;
    opacity: 0.7;
    margin-left: 30px;
    `;
  return input;
}

function createNodeForText() {
  const nodeForText = document.createElement('h3');
  nodeForText.innerHTML = 'Please enter correct price';
  nodeForText.classList.add('error-text');
  nodeForText.style.color = 'red';
  nodeForText.style.marginLeft = '25px';
  return nodeForText;
}

document.body.append(createParagrath());
document.querySelector('.paragrath').append(createInput());
const currentInput = document.querySelector('.mainInput');

currentInput.addEventListener('focus', () => {
  document.querySelector('.mainInput:focus').style.cssText = `border: 3px solid green;
  outline: none;
  opacity: 0.7;
  margin-left: 30px;
  `;
})

currentInput.addEventListener('blur', () => {
  currentInput.style.borderColor = 'black';
  if (currentInput.value !== '' && currentInput.value >= 0) {
    if (document.querySelector('.error-text')) {
      document.querySelector('.error-text').remove();
    }
    if (document.querySelector('.div-for-span').children.length > 0) {
      currentInput.dataset.number = currentInput.value;
      currentInput.style.color = 'green';
      document.querySelector('.div-for-span').children[0].innerHTML = `Текущая цена: ${currentInput.dataset.number} $`;
    } else {
      currentInput.dataset.number = currentInput.value;
      currentInput.style.color = 'green';
      cheackValue();
    }
  } else if (currentInput.value !== '' && currentInput.value < 0) {
    currentInput.style.borderColor = 'red';
    if (document.querySelector('.error-text')) {
      return;
    } else {
      document.body.append(createNodeForText());
    }
    if (document.querySelector('.div-for-span').children.length > 0) {
      for (const iterator of document.querySelector('.div-for-span').children) {
        iterator.remove();
      }
      for (const iterator of document.querySelector('.div-for-span').children) {
        iterator.remove();
      }
    }
  }
})

function cheackValue() {
  if (currentInput.dataset.number >= 0) {
    document.querySelector('.div-for-span').append(createSpan());
    document.querySelector('.div-for-span').append(createButton());
  }
}
