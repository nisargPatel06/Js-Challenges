class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greet() {
    console.log(`Hello! ${this.firstName} ${this.lastName}`);
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }
  static message() {
    console.log(`This is a static method inside Person class.`);
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
Person.message();
const person = new Person("Harman", "Mavi", 21);

console.log(`Full name: ${person.fullName}`);
person.fullName = "Tanmay Singh";
console.log(`Full name: ${person.fullName}`);

person.greet();
person.updateAge(25);

class Student extends Person {
  static studentCount = 0;
  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
    Student.studentCount++;
    console.log(`Total students: ${Student.studentCount}`);
  }
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.firstName} & my student ID is ${this.studentId}.`
    );
  }
}
const student1 = new Student("Nisarg", "Patel", 30, "3264");
const student2 = new Student("Darshil", "Morker", 25, "2164");
console.log(student2.getStudentId());
student2.greet();

class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdrawal amount");
    }
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new Account(1000);
console.log(`Initial balance: $${account.getBalance()}`);

account.deposit(500);
console.log(`Balance after deposit: $${account.getBalance()}`);

account.withdraw(200);
console.log(`Balance after withdrawal: $${account.getBalance()}`);

account.withdraw(1500);
