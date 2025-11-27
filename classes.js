// People base class
class People {
  #age;              // private instance field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
    
  }

  // Instance method
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // Getter for private field // encapsulation
  getAge() {
    return this.#age;
  }

}

// Student subclass
class Student extends People {
  #grade; // private field

  constructor(name, age, grade) {
    super(name, age); // call People constructor
    this.#grade = grade;
  }

  // Instance method
  study() {
    console.log(`${this.name} is studying in grade ${this.#grade}.`);
  }

  getGrade() {
    return this.#grade;
  }

  // Overriding greet
  greet() {
    console.log(`Hi, I’m student ${this.name}, age ${this.getAge()}.`);
  }
}

// Staff subclass
class Staff extends People {
  #role; // private field

  constructor(name, age, role) {
    super(name, age); // call People constructor
    this.#role = role;
  }

  // Instance method
  work() {
    console.log(`${this.name} works as a ${this.#role}.`);
  }

  getRole() {
    return this.#role;
  }

  // Overriding greet
  greet() {
    console.log(`Hello, I’m staff member ${this.name}, age ${this.getAge()}.`);
  }
}

// ---- Example usage ----

const alice = new Student("Alice", 16, 10);
const bob = new Staff("Bob", 35, "Teacher");

alice.greet(); // Hi, I’m student Alice, age 16.
alice.study(); // Alice is studying in grade 10.

bob.greet();   // Hello, I’m staff member Bob, age 35.
bob.work();    // Bob works as a Teacher.

console.log(alice.getAge()); // 16
console.log(bob.getRole());  // Teacher