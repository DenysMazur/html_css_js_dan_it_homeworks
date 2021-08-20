const books = [
  { 
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70 
  }, 
  {
   author: "Скотт Бэккер",
   name: "Воин-пророк",
  }, 
  { 
    name: "Тысячекратная мысль",
    price: 70
  }, 
  { 
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70
  }, 
  {
   author: "Дарья Донцова",
   name: "Детектив на диете",
   price: 40
  },
  {
   author: "Дарья Донцова",
   name: "Дед Снегур и Морозочка",
  }
];

function createListOnPage(array) {
  let container = document.querySelector('#root');
  let list = document.querySelector('ul');

  if (!container) {
    createContainer();
    container = document.querySelector('#root');
    container.append(createList());
  }

  if (!list) {
    list = document.querySelector('ul');
  }

  array.forEach((element, index) => {
    try {
      validateDataOfObject (element, index);
      const currentListItem = createListItem();
      for (const key in element) {
          const text = `${key}: ${element[key]}`;
          currentListItem.append(createParagrath(text)); 
      }
      list.append(currentListItem);
    } catch (error) {
      console.log(error.message);
    }    
  })
}

function validateDataOfObject(object, index) {

  if (!object.hasOwnProperty('author')) {
    throw new Error(`Object on position ${index} in array has empty property author`);
  } else if (!object.hasOwnProperty('name')) {
    throw new Error(`Object on position ${index} in array has empty property name`);
  } else if (!object.hasOwnProperty('price')) {
    throw new Error(`Object on position ${index} in array has empty property price`);
  } else return true;

}

function createContainer() {
  const container = document.createElement('div');
  container.id = 'root';
  document.body.prepend(container);
}

function createList() {
  const list = document.createElement('ul');
  return list;
}

function createParagrath(text) {
  const paragrath = document.createElement('p')
  paragrath.innerHTML = text;
  return paragrath;
}

function createListItem() {
  const listItem = document.createElement('li');
  return listItem
}

createListOnPage(books);