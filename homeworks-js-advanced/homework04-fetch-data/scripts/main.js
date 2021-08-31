fetch('https://ajax.test-danit.com/api/swapi/films')
  .then(response => response.json())
  .then(data => {
    addListOfFilmsOnPage(data);
    return data;
  })
  .then(data => { 
    const charactersData = receiveCharactersLinksFromData(data);
    const fetchedRequestsData = charactersData.map((element) => {
      let requests = element.map(url => fetch(url));
      return requests;
    })
    return fetchedRequestsData;
  })
  .then(fetchedRequestsDataArray => {
    let counter = 0;
    fetchedRequestsDataArray.forEach(requests => {
      counter++;
      const currentListElement = document.querySelector(`ul li:nth-child(${counter})`)
      Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(responses => Promise.all(responses.map(response => response.name)))
      .then(characters => {
        const childCollectionOfCurrentElement = currentListElement.children;
        Array.from(childCollectionOfCurrentElement).forEach(element => {
          if(element.classList.contains('lds-ellipsis')) {
            element.style.display = 'none';
          }
        })
        const textOfCharacters = `Characters: ${characters.toString()}`;
        const paragrathOfCharacters = createParagraph(textOfCharacters);
        currentListElement.append(paragrathOfCharacters);
      })
    })
  })
  .catch(err => console.log(err.message));

function createList() {
  const list = document.createElement('ul');
  const locationOfList = document.querySelector('body');
  locationOfList.append(list);
}

function createListItem() {
  const listItem = document.createElement('li');
  return listItem;
}

function createParagraph(content) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = content;
  return paragraph;
}

function addListOfFilmsOnPage(data) {
  createList();
  const currentList = document.querySelector('ul');
  data.forEach(({episodeId, name: title, openingCrawl: description}) => {
    const textEpisode = `episode: ${episodeId}`;
    const textTitle = `${title}`;
    const textDescription = `${description}`;
    const currentListItem = createListItem();

    currentListItem.append(createParagraph(textEpisode), createParagraph(textTitle), createParagraph(textDescription), createSpinner());
    currentList.append(currentListItem);        
  })
}

function receiveCharactersLinksFromData(data) {
  const charactersData = data.map(({characters}) => {
    return characters;
  });
  return charactersData;
}

function createSpinner() {
  const spinner = document.createElement('div');
  spinner.classList.add('lds-ellipsis');
  spinner.innerHTML = '<div></div><div></div><div></div>';
  return spinner;
}