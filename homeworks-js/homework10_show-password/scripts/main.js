document.addEventListener('click', (event) => {  
  if (event.target.classList.value === 'fas fa-eye icon-password') {
    event.target.classList.value = 'fas fa-eye-slash icon-password';
    event.target.previousElementSibling.type = 'text';
  } else if (event.target.classList.value === 'fas fa-eye-slash icon-password') {
    event.target.classList.value = 'fas fa-eye icon-password';
    event.target.previousElementSibling.type = 'password';
  }
})

document.addEventListener('submit', (event) => {
  event.preventDefault();
  const arrayOfInputsValue = [];
  const collectionOfLabels = document.querySelectorAll('.input-wrapper');
  const lastLabel = collectionOfLabels[collectionOfLabels.length - 1];
  const currentSpan = document.querySelector('.error-span');
    for (const iterator of event.target) {
      if (iterator.tagName === 'INPUT') {
        if (iterator.value === '') {
          if (currentSpan === null) {
            lastLabel.insertAdjacentElement("beforeend", toCreateSpan('Zero'));          
          } else {
            currentSpan.innerHTML = 'Пароль не должен быть пустым';
            currentSpan.style.color = 'red';
          }
          return;
        } else if (iterator.value.includes(' ') === true || iterator.value.trim() === '') {
          if (currentSpan === null) {
            lastLabel.insertAdjacentElement("beforeend", toCreateSpan('ZeroStart'));          
          } else {
            currentSpan.innerHTML = 'Пароль не должен содержать пробелы';
            currentSpan.style.color = 'red';
          }
          return;
        }        
        arrayOfInputsValue.push(iterator.value);
      }
    }  
  if (arrayOfInputsValue.length === 2) {
    const [firstStr, secondStr] = arrayOfInputsValue;
    if (firstStr === secondStr) {
      if (currentSpan === null) {
        lastLabel.insertAdjacentElement("beforeend", toCreateSpan('Match'));          
      } else {
        currentSpan.innerHTML = 'You are welcome';
        currentSpan.style.color = 'green';
      }
      return;
    } else {
      if (currentSpan === null) {
        lastLabel.insertAdjacentElement("beforeend", toCreateSpan('NotMatch'));          
      } else {
        currentSpan.innerHTML = 'Нужно ввести одинаковые значения';
        currentSpan.style.color = 'red';
      }
    }

    
  }
})

function toCreateSpan(error) {
  const currentSpan = document.createElement('span');
  currentSpan.style.position = 'absolute';
  currentSpan.style.bottom = '7px';
  currentSpan.style.fontSize = '10px'
  currentSpan.style.display = 'block';
  currentSpan.classList.add('error-span');
  if (error === 'Zero') {
    currentSpan.style.color = 'red';
    currentSpan.innerHTML = 'Пароль не должен быть пустым';
  } else if (error === 'NotMatch') {
    currentSpan.style.color = 'red';
    currentSpan.innerHTML = 'Нужно ввести одинаковые значения';
  } else if (error === 'Match') {
    currentSpan.style.color = 'green';
    currentSpan.innerHTML = 'You are welcome';
  } else if (error === 'ZeroStart') {
    currentSpan.style.color = 'red';
    currentSpan.innerHTML = 'Пароль не должен содержать пробелы';
  }
  return currentSpan;
}
