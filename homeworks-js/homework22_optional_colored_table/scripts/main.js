window.addEventListener('load', () => {
  document.body.append(toCreateTable(30));
  
  document.querySelector('.main-table-white').addEventListener('click', (event) => {    
    if (event.target.classList.contains('main-table-column')) {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
      } else {
        event.target.classList.add('active');
      }
    }
  })

  document.body.addEventListener('click', (event) => {
    if (event.path.length <= 4) {      
      if (document.querySelector('[data-name]')) {
        if (document.querySelector('[data-name]').dataset.name === document.querySelector('[data-name]').classList.value) {
          document.querySelector('[data-name]').classList.remove(`${document.querySelector('[data-name]').dataset.name}`);
          document.querySelector('[data-name]').classList.add(`${document.querySelector('[data-name]').dataset.nameToggle}`)
        } else {
          document.querySelector('[data-name]').classList.remove(`${document.querySelector('[data-name]').dataset.nameToggle}`);
          document.querySelector('[data-name]').classList.add(`${document.querySelector('[data-name]').dataset.name}`)
        }
      }
    }
  })
})

function toCreateTable(sizeOftable = 30) {
  const newTable = document.createElement('table');
  let counter = sizeOftable;
  let innerText = 1;
  newTable.classList.add('main-table-white');
  newTable.dataset.name = 'main-table-white';
  newTable.dataset.nameToggle = 'main-table-black';
  while(counter > 0){
    newTable.append(toCrateRow(sizeOftable, innerText));
    innerText +=sizeOftable;
    counter--;
  }  
  return newTable;
}

function toCrateRow(numberOfColumns = 30, innerText = 1) {
  const newRow = document.createElement('tr');
  let size = numberOfColumns;
  let counter = innerText;
  while (size > 0) {
    newRow.append(toCreateColumn(counter))
    counter++;
    size--;
  }
  return newRow;
}

function toCreateColumn(counter) {
  const newColumn = document.createElement('td');
  newColumn.classList.add('main-table-column');
  newColumn.innerHTML = `${counter}`
  return newColumn;
}