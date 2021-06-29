const testArrayFirst = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const tesArraySecond = ["1", "2", "3", "sea", "user", 23];
const testArrayThird = ["Kharkiv", "Kiev", ["Borispol", "Irpin", ["Deli", "Dublin"]], "Odessa", "Lviv", "Dnieper"];

function toAddArrayOnPage(array, ...args) {

  function contentOfAdding(currentArray) {
    const newArray = currentArray.map((element) => {
      return toCheackElementOfArray(element);
    })
    return newArray;
  }

  function toCheackElementOfArray(elementOfArray) {
    if (Array.isArray(elementOfArray)) {
      for (const iterator of elementOfArray) {
        return elementOfArray.map((element) => toCheackElementOfArray(element));
      }
    } else {
      return createElementOfList(elementOfArray);
    }
  }

  function createElementOfList(textOfElement) {
    const listItem = document.createElement('li');
    listItem.append(textOfElement);
    return listItem;
  }

  function createList(newArray) {
    const totalList = document.createElement('ul');
    for (let index = 0; index < newArray.length; index++) {
      if (Array.isArray(newArray[index])) {    
        newArray[index - 1].append(createList(newArray[index]));
      } else {
        totalList.append(newArray[index]);
      }      
    }
    return totalList;
  }

  if (args.length === 0) {
    document.body.append(createList(contentOfAdding(array)))
  } else if (args.length === 1) {
    for (const iterator of args) {
      let placeOfPlacing = document.querySelectorAll(`${iterator}`);
      if (placeOfPlacing.length === 0) {
        placeOfPlacing = document.createElement(`${iterator}`);
        placeOfPlacing.append(createList(contentOfAdding(array)));
        document.body.append(placeOfPlacing);
      } else if (placeOfPlacing.length > 1) {
        alert('Element have to be one on the page. If it is necessary ask to do additional control for such adding');
      } else {
        placeOfPlacing[0].append(createList(contentOfAdding(array)));
      }
    }
  } else {
    alert('Not correct data');
  }

}

toAddArrayOnPage(testArrayThird, 'div');
