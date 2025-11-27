
//age = 74;

let person = {
    firstname: "Ryan",
    lastname: "Crosby",
    age: 31,
    giveinfo: function(){ 
        x = "This person is: " + this.firstname + this.lastname + " they are " + this.age + " years old"; 
        return x; 
    },
    calculateDob: function(){
        currentDate = new Date(); 
        var DoB = currentDate.getFullYear() - this.age; 
        return DoB
    }

}

console.log(person)

let personTwo = {
    firstname: "Bob",
    lastname: "Smith",
    giveinfo: function(){ 
        x = "This person is: " + this.firstname + this.lastname + " they are " + this.age + "years old"; 
        return x; 
    },
    calculateDob: () => {
        currentDate = new Date(); 
        Dob = currentDate.getFullYear() - this.age; 
        return DoB
    }

}

//Arrow functions don't have bindings, this and super wont work. 
 
let personThree = {
    firstname: "Jane",
    lastname: "Doe",
    giveinfo: () => { 
        x = "This person is: " + this.firstname + this.lastname + " they are " + this.age + "years old"; 
        return x; 
    },
    calculateDob: () => {
        currentDate = new Date(); 
        Dob = currentDate.getFullYear() - this.age; 
        return DoB
    }

}



//Object Constructors 

const staff = new Object();

//creates an object called staff, with no values in it. 
//Can use the . operator to add values 

staff.name = "Ryan Crosby"
staff.age = 31
staff.workplace = "durham"






function personConstructor(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

var Bob = new personConstructor("Bob", "Smith", 43)

var Sally = new personConstructor("Sally", "Smith", 42)

Sally.__proto__ = Bob 






/****
 * A constructor for creating an instance of an animal
 * @param {string} type - the type of animal that you are creating 
 * @param {boolean} eats - 
 */
function animal(type, eats, size){
    this.type = type;
    this.eats = eats;
    this.size = size;
    this.sayHi = function() {
        console.log("Hello I am a ", this.type)
        
    }


}

//using object.create 
//snake inherits methods from animal.prototype
//animal.call(snake, …) runs the constructor on the new object

var snake = Object.create(animal)

animal.call(snake, "reptile", true, "small");

console.log(snake)

snake.sayHi()

animal.isPrototypeOf(snake)






/*
This is a constructor function, intended to be used with new.
It gives each Animal:

- a name property
- a greet() method defined directly on the instance (not on the prototype)
*/
function Animal(name) {
  this.name = name;
  this.greet = function() {
    console.log("Hello, I like pets");
  };
}

/*
Animal.call(this, name);
This line is critical for inheritance of instance properties.
It calls Animal but forces its this to be the new Snake being created.
*/

function Snake(hiss, name) {
  // Call Animal constructor to initialize shared properties
  Animal.call(this, name);
  this.hiss = hiss;
}

/* Properly set up inheritance

Why do this?

Snake.prototype = Object.create(Animal.prototype);

This makes all Animal prototype methods available to snakes.

Snake.prototype.constructor = Snake;

Fixes the constructor property, which is lost when you overwrite the prototype.

Important:

You defined greet() inside the constructor, not on the prototype, so this step does not affect greet — but it’s still best practice and allows prototype-based methods if you add any later.
*/
Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Snake;


// Add snake-specific method
Snake.prototype.hissSound = function() {
  console.log(this.name + " says " + this.hiss);
};

// Test it
var nagini = new Snake("hisssss", "Nagini");
nagini.greet();       // "Hello, I like pets"
nagini.hissSound();   // "Nagini says hisssss"

