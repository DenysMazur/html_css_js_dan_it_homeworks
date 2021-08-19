class Employee {
  constructor (name = 'Name', age = 0, salary = 0) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    return this._age = newAge;
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    return this._salary = newSalary;
  }
}

class Programmer extends Employee {
  constructor (name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  get salary() {
    return super.salary * 3;
  }
  
  set salary(newSalary) {
    return super.salary = newSalary;
  }
}

const mike = new Programmer('Mike', 22, 800, 'en');
const andrew = new Programmer('Andrew', 28, 1800, 'en/ru');
const mary = new Programmer('Mary', 30, 2800, 'en/ru/sp');

console.log(mike);
console.log(andrew);
console.log(mary);
