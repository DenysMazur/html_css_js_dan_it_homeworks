window.addEventListener('load', () => {
  toModifyButtons ();
})

document.addEventListener('keydown', (event) => {
  console.log(event);
  const collectionOfButtons = document.querySelectorAll('.btn');
  for (let index = 0; index < collectionOfButtons.length; index++) {
    if (collectionOfButtons[index].dataset.keyValue.toLowerCase() === event.key.toLowerCase()) {
      toResetColorInButtons();
      collectionOfButtons[index].style.backgroundColor = 'blue';
    }
  }
})

function toModifyButtons () {
  const collectionOfButtons = document.querySelectorAll('.btn');
  for (let index = 0; index < collectionOfButtons.length; index++) {
    collectionOfButtons[index].dataset.keyValue = `${collectionOfButtons[index].innerHTML.trim()}`;
  }
}

function toResetColorInButtons() {
  const collectionOfButtons = document.querySelectorAll('.btn');
  for (let index = 0; index < collectionOfButtons.length; index++) {
    collectionOfButtons[index].style.backgroundColor = '';
  }
}