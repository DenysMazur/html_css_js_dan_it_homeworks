window.addEventListener('load', () => {
  toModifyTabs();
  toModifyTabsContent();
  if (toCheackActiveClass()) {
    toShowTextContent()
  }
})

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('tabs-title')) {
    if (event.target.classList.contains('active')) {
      return;
    } else {
      const currentActiveTab = document.querySelector('.tabs-title.active');
      currentActiveTab.classList.remove('active');
      event.target.classList.add('active');
      toModifyTabsContent();
      toShowTextContent();
    }
  }
})

function toShowTextContent() {
  const currentActiveTab = document.querySelector('.tabs-title.active');
  const liveTabsContentCollection = document.querySelector('.tabs-content').childNodes;
  let counter = 0;
  for (let index = 0; index < liveTabsContentCollection.length; index++) {
    const liveTabsContent = liveTabsContentCollection[index].data;
    if (liveTabsContent === undefined) {
      continue;
    } else if (liveTabsContent.trim() === currentActiveTab.dataset.hero) {
      counter++;
      liveTabsContent.trim() === currentActiveTab.dataset.hero
      let currentIndex = index;
      while (liveTabsContentCollection[currentIndex] instanceof Element === false) {
        currentIndex++;
      }
      liveTabsContentCollection[currentIndex].hidden = false;
    }
  }
  if (counter === 0) {
    toModifyTabsContent();
  }
}

function toCheackActiveClass() {
  const tabsColection = document.querySelectorAll('.tabs-title');
  for (let index = 0; index < tabsColection.length; index++) {
    if (tabsColection[index].classList.contains('active')) {
      return true;
    }
  }
  return false;
}

function toModifyTabs() {
  const tabsColection = document.querySelectorAll('.tabs-title');
  for (let index = 0; index < tabsColection.length; index++) {
    tabsColection[index].dataset.hero = `${tabsColection[index].innerHTML.trim()}`;
  }
}

function toModifyTabsContent() {
  const tabsContentCollection = document.querySelector('.tabs-content').children;
  for (let index = 0; index < tabsContentCollection.length; index++) {
    tabsContentCollection[index].hidden = true;
  }
}
