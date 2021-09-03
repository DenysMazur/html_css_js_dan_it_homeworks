class FetchRequest {  
  constructor(entity) {
    this.entity = entity;
    this.url = 'https://ajax.test-danit.com/api/json';
  }

  async getEntity() {    
      const response = await fetch(`${this.url}/${this.entity}`);
      const data = await response.json();
      return data;
  }

  async deletePost(postId) {
    const response = await fetch(`${this.url}/${this.entity}/${postId}`, {
      method: 'DELETE'
    });
    return response;   
  }

}

class Element {  
  createElement({tagName = 'div', classNames, text = ''}) {
    const element = document.createElement(tagName);
    element.classList.add(classNames)
    element.innerHTML = text;
    return element;
  }
}

class Card extends Element {
  constructor({id, body, title, name, email}, postRequest) {
    super();
    this.id = id;
    this.body = body;
    this.title = title;
    this.name = name;
    this.email = email;
    this.postRequest = postRequest;
  }

  createContainer() {
    const cardContainer = this.createElement({
      classNames: 'container'
    })
    cardContainer.dataset.postId = `${this.id}`;
    return cardContainer;
  }

  createHeader() {
    return this.createElement({
      classNames: 'header',
      text: `<b>Name</b>: ${this.name} <b>E-mail</b>: ${this.email}`
    })
  }

  createContent() {
    return this.createElement({
      classNames: 'content'
    })
  }

  createContentTitle() {
    return this.createElement({
      classNames: 'content__title',
      text: `<b>Title</b>: ${this.title}`
    })
  }

  createContentText() {
    return this.createElement({
      classNames: 'content__text',
      text: `<b>Content</b>: ${this.body}`
    })
  }

  creatButtonDel() {
    const button = this.createElement({
      tagName: 'button',
      classNames: 'content__button',
      text: 'Delete Post'
    })
    button.onclick = this.remove.bind(this);
    return button;
  }

  remove() {
    this.postRequest.deletePost(this.id)
      .then(response => {
        if(response.ok) {
          this.cardContainer.remove();
        } else {
          throw new Error("Can't remove");
        }
      })    
  }

  render() {
    const renderPlace = document.querySelector('body');    
    this.cardContainer = this.createContainer();    
    const header = this.createHeader();
    const content = this.createContent();
    const contentTitle = this.createContentTitle();
    const contentText = this.createContentText();
    const buttonDel = this.creatButtonDel();    
    content.append(contentTitle, contentText);
    this.cardContainer.append(header, content, buttonDel);
    renderPlace.prepend(this.cardContainer);
  }
}

window.addEventListener('load', () => {
  const usersRequest = new FetchRequest('users');
  const postsRequest = new FetchRequest('posts');
  Promise.all([postsRequest.getEntity(), usersRequest.getEntity()])
    .then(data => {
      const [posts, users] = data;
      posts.forEach(({id, body, title, userId}) => {
        const [user] = users.filter((user) => {
          return user.id === userId;
        })
        const {name, email} = user;
        const card = new Card ({id, body, title, name, email}, postsRequest);
        card.render();     
      })      
    })
    .catch(err => console.error(err.message))
})
