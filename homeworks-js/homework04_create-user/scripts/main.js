//__________________________________________________________________
// Первый вариант, когда функция создает и возвращает объект newUser
//__________________________________________________________________

// function createNewUser() {
//   let newUser = {
//     firstName: prompt('Enter your First Name'),
//     lastName: prompt('Enter your Last Name')
//   };
//   return newUser;
// }

// let newUser = createNewUser();

// function getLogin() {
//   let login = null; 
//   let firstLetterOfFirstName = this.firstName[0].toLowerCase();
//   let lastNameLowerCase = this.lastName.toLowerCase();
//   login = firstLetterOfFirstName + lastNameLowerCase;
//   return login;
// }

// newUser.getLogin = getLogin;

// console.log(newUser);
// console.log(newUser.getLogin())

//_______________________________________________________________________________________
// Второй вариант - создание объекта через функцию - конструктор, а также изменение свойств через get и set. Можно добавить куча разных проверок на вводимые данные, но такой задачи нет в данном задании
//_______________________________________________________________________________________

function CreateNewUser() {
  let firstName = prompt('Enter your First Name');
      lastName = prompt('Enter your Last Name');  
  Object.defineProperties(this, {
    'firstName': {
      get: function () { return firstName; },
      set: function (newValue) {
        alert("Changing firstName via setter");
        firstName = newValue;
      },
    },
    'lastName': {
      get: function () { return lastName; },
      set: function (newValue) {
        alert("Changing lastName via setter");
        lastName = newValue;
      },
    }
  });
}

let newUser = new CreateNewUser();

newUser.getLogin = function () {  
  return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`
}

for (let key in newUser) {
  console.log(`${key}: ${newUser[key]}`);
}
console.log(newUser);
console.log(newUser.getLogin());