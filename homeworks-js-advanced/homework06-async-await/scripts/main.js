const sendRequestButton = document.querySelector('.btn-default');

async function receiveId() {
  const response = await fetch(`https://api.ipify.org/?format=json`);
  const data = await response.json();
  return data;
}

async function getUserInfoByIp() {
  const {ip} = await receiveId();
  const response = await fetch(`http://ip-api.com/json/${ip}?fields=continent,country,regionName,city,district`);
  const data = await response.json();
  return data;
 
}

class UserInfo {
  constructor({continent, country, regionName, city, district}) {
    this.continent = continent;
    this.country = country;
    this.regionName = regionName;
    this.city = city;
    this.district = district;
  }

  render() {
    if(document.querySelector('.container-info')) {
      const divContainer = document.querySelector('.container-info');
      divContainer.remove();
    }  
    const divInfo = document.createElement('div');
    divInfo.classList.add('container-info');
    divInfo.innerHTML = `<p>continent: ${this.continent}</p>
    <p>country: ${this.country}</p>
    <p>regionName: ${this.regionName}</p>
    <p>city: ${this.city}</p>
    <p>district: ${this.district}</p>
    `
    sendRequestButton.insertAdjacentElement("afterend", divInfo)
  }

}

sendRequestButton.addEventListener('click', async () => {  
  const userData = await getUserInfoByIp()
  const userInfo = new UserInfo(userData);
  userInfo.render();  
})

