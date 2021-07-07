window.addEventListener('load', () => {
  toModifyImgVision(toGetCollectionOfImg());
  toSetCorrectDataset();
  toChangeVisionOfImg(toGetCollectionOfImg());
  toStartAnimation(toGetCollectionOfImg());

})

function toStartAnimation(collection) {
  document.querySelector('.timer-seconds').innerHTML = 3;
  document.querySelector('.timer-miliseconds').innerHTML = 0;
  toStartSecondsTimer();
  setTimeout(() => {
    toStartMiliSecondsTimer()
  }, 500);
  setTimeout(() => {
    toStartMiliSecondsTimer()
  }, 1500);
  setTimeout(() => {
    toStartMiliSecondsTimer()
  }, 2500);
  
  const timerId = setInterval(() => {
    const currentImg = document.querySelector('[data-hidden]');
    let nextImg = currentImg.nextElementSibling;
    if (!nextImg) {      
      nextImg = collection[0];
      nextAnimationMove(currentImg, nextImg);
    } else {
      nextAnimationMove(currentImg, nextImg);
      
    }
    toStartSecondsTimer();
    setTimeout(() => {
      toStartMiliSecondsTimer()
    }, 500);
    setTimeout(() => {
      toStartMiliSecondsTimer()
    }, 1500);
    setTimeout(() => {
      toStartMiliSecondsTimer()
    }, 2500);
  }, 3000);
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('stop-slider')) {
      clearInterval(timerId);
    }
    if (event.target.classList.contains('start-slider')) {
      toStartAnimation(collection);
    }
  })

}

function toStartSecondsTimer() {
  let reverseSeconds = 3;
  let timerSeconds = setInterval(() => {
    reverseSeconds--;
    document.querySelector('.timer-seconds').innerHTML = reverseSeconds;
    if (reverseSeconds === 0) {
      clearInterval(timerSeconds);  
    }
  }, 1000);
  
}
function toStartMiliSecondsTimer() {
  let reverseMiliSeconds = 10;
  let timerMiliSeconds = setInterval(() => {
    reverseMiliSeconds = reverseMiliSeconds - 5;
    document.querySelector('.timer-miliseconds').innerHTML = reverseMiliSeconds;
    if (reverseMiliSeconds === 0) {
      clearInterval(timerMiliSeconds);  
    }
  }, 500);
  
}

function nextAnimationMove(currentElement, nextElement) {
  currentElement.style.opacity = 0;
  currentElement.style.transition = "opacity 0.5s";
  nextElement.style.opacity = 0;
  nextElement.style.transition = "all 2.5s";
  currentElement.addEventListener('transitionend', () => {
    currentElement.hidden = true;
    currentElement.removeAttribute('style');
    currentElement.removeAttribute('data-hidden');
    nextElement.hidden = false;
    nextElement.dataset.hidden = false;
    requestAnimationFrame (() => {
      requestAnimationFrame(() => nextElement.style.opacity = 1);
    })    

  })   

}

function toGetCollectionOfImg() {
  const collectionOfImgs = document.querySelectorAll('.image-to-show');
  //любая проверка на наличие коллекции
  return collectionOfImgs;
}

function toChangeVisionOfImg(collection) {
  collection.forEach(element => {
    if ('hidden' in element.dataset) {
      element.hidden = false;
    }
  })
}

function toModifyImgVision(collection) {
  collection.forEach(element => {
    element.hidden = true;
  })
}

function toCheckDataset(collection) {
  let markOfDatasetCount = 0;
  collection.forEach(element => {
    if (element.dataset.hidden === 'false') {
      markOfDatasetCount++;
      return;
    }
  })
  return markOfDatasetCount;
}

function toAddDatasetOnFirstImg(collection) {
  collection[0].dataset.hidden = 'false';
}

function toResetDataset(collection) {
  collection.forEach(element => {
    if ('hidden' in element.dataset) {
      element.removeAttribute('data-hidden');
    }
  })
}
function toSetCorrectDataset() {
  if (toCheckDataset(toGetCollectionOfImg()) === 0 || toCheckDataset(toGetCollectionOfImg()) > 1) {
    toAddDatasetOnFirstImg(toGetCollectionOfImg());
  }
}
