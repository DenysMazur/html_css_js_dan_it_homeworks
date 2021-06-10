function CreateNewUser() {
  let firstName = prompt('Enter your First Name');
      lastName = prompt('Enter your Last Name');
      birthday = prompt('Enter the date of birhday', 'dd.mm.yyyy'); 
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
    },
    'birthday': {
      get: function () { return birthday; },
      set: function (newValue) {
        alert("Changing lastName via setter");
        birthday = newValue;
      },
    }
  });
  this.getLogin = function() {  
    return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`;
  };
  
  this.getAge = function() {
    return `${new Date().getFullYear() - this.birthday.slice(-4)}`;
  };

  this.getPassword = function() {
    return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(-4)}`
  }
};

const newUser = new CreateNewUser();

console.log(newUser);
console.log("Full years of User: " + newUser.getAge());
console.log("Password: " + newUser.getPassword());