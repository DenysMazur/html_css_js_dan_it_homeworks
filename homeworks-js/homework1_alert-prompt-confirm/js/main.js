let userName = prompt('Name?');
let userAge = prompt('Age?');

while (userName === null || userAge === null || Number.isNaN(Number(userAge))) {
  if (userName === null) {
    userName = prompt('Name', `${userName = ''}`);
  } else {
    userName = prompt('Name', userName);
  }
    
  if (userAge === null) {
    userAge = prompt('Age?', Number(userAge));
  } else {
    userAge = prompt('Age?', userAge);
  }  
}

if (userAge < 18) {
  alert('You are not allowed to visit this website');
} else if (userAge >=18 && userAge <=22) {
  const userPermit = confirm('Are you sure you want to continue?');
  if (userPermit) {
    alert(`Welcome, ${userName}`);
  } else {
    alert('You are not allowed to visit this website');
  }
} else {
  alert(`Welcome, ${userName}`);
}